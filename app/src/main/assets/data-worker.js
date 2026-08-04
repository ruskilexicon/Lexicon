'use strict';

const DATA_FILE = 'dictionary.json';

self.onmessage = event => {
  if (event.data && event.data.type === 'load') load().catch(error => fail(error));
};

async function load() {
  progress('Loading packed dictionary…');
  const response = await fetch(DATA_FILE, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load ${DATA_FILE} (${response.status}).`);
  const packed = await response.json();
  if (!packed || typeof packed !== 'object') throw new Error('Packed dictionary object was not found.');

  progress('Decoding dictionary columns…');
  const sheets = b64bytes(packed.sheetsB64);
  const sourceRows = b64u32(packed.sourceRowsB64);
  const ruOffsets = b64u32(packed.rusynOffsetsB64);
  const enOffsets = b64u32(packed.englishOffsetsB64);
  const ruBytes = b64bytes(packed.rusynTextB64);
  const enBytes = b64bytes(packed.englishTextB64);
  const ruOrder = b64u32(packed.rusynOrderB64);

  const data = {
    rowCount: Number(packed.rowCount),
    translatedCount: Number(packed.translatedCount),
    missingRusynCount: Number(packed.missingRusynCount),
    missingEnglishCount: Number(packed.missingEnglishCount),
    sheetNames: Array.isArray(packed.sheetNames) ? packed.sheetNames.slice() : [],
    examples: Array.isArray(packed.examples) ? packed.examples.slice() : [],
    version: packed.version,
    encoding: packed.encoding,
    rusynNormalization: packed.rusynNormalization,
    rusynRowsWithNormalizedLookalikes: Number(packed.rusynRowsWithNormalizedLookalikes || 0),
    rusynLookalikeCharactersNormalized: Number(packed.rusynLookalikeCharactersNormalized || 0),
    sheets,
    sourceRows,
    ruOffsets,
    enOffsets,
    ruBytes,
    enBytes,
    ruOrder
  };

  progress('Verifying all source rows…');
  validate(data);

  // The local packed JSON object becomes eligible for garbage collection after transfer.

  const meta = { ...data };
  delete meta.sheets;
  delete meta.sourceRows;
  delete meta.ruOffsets;
  delete meta.enOffsets;
  delete meta.ruBytes;
  delete meta.enBytes;
  delete meta.ruOrder;

  self.postMessage({
    type: 'ready',
    meta,
    buffers: {
      sheets: sheets.buffer,
      sourceRows: sourceRows.buffer,
      ruOffsets: ruOffsets.buffer,
      enOffsets: enOffsets.buffer,
      ruBytes: ruBytes.buffer,
      enBytes: enBytes.buffer,
      ruOrder: ruOrder.buffer
    }
  }, [
    sheets.buffer,
    sourceRows.buffer,
    ruOffsets.buffer,
    enOffsets.buffer,
    ruBytes.buffer,
    enBytes.buffer,
    ruOrder.buffer
  ]);
}

function b64bytes(value) {
  if (typeof value !== 'string' || !value.length) throw new Error('A packed dictionary column is missing.');
  const binary = atob(value);
  const output = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) output[i] = binary.charCodeAt(i);
  return output;
}

function b64u32(value) {
  const bytes = b64bytes(value);
  if (bytes.byteLength % 4 !== 0) throw new Error('Invalid packed integer column length.');
  return new Uint32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
}

function validate(data) {
  const n = data.rowCount;
  if (!Number.isInteger(n) || n < 1) throw new Error('Invalid row count.');
  if (!Array.isArray(data.sheetNames) || !data.sheetNames.length) throw new Error('Worksheet names are missing.');
  if (data.sheets.length !== n || data.sourceRows.length !== n) throw new Error('Packed row-column length mismatch.');
  if (data.ruOffsets.length !== n + 1 || data.enOffsets.length !== n + 1) throw new Error('Packed text-offset length mismatch.');
  if (data.ruOrder.length !== n) throw new Error('Packed Rusyn search-order length mismatch.');

  validateOffsets(data.ruOffsets, data.ruBytes.length, 'Rusyn');
  validateOffsets(data.enOffsets, data.enBytes.length, 'English');

  const orderSeen = new Uint8Array(n);
  const sourceIds = new Set();
  let translated = 0;
  let missingRusyn = 0;
  let missingEnglish = 0;

  for (let i = 0; i < n; i += 1) {
    const sheet = data.sheets[i];
    const row = data.sourceRows[i];
    if (sheet >= data.sheetNames.length) throw new Error(`Invalid worksheet index at record ${i}.`);
    if (!Number.isInteger(row) || row < 1) throw new Error(`Invalid source row at record ${i}.`);

    const sourceId = sheet * 4294967296 + row;
    if (sourceIds.has(sourceId)) throw new Error(`Duplicate source identifier at record ${i}.`);
    sourceIds.add(sourceId);

    const orderValue = data.ruOrder[i];
    if (orderValue >= n) throw new Error(`Out-of-range Rusyn search-order value at position ${i}.`);
    if (orderSeen[orderValue]) throw new Error(`Duplicate Rusyn search-order value ${orderValue}.`);
    orderSeen[orderValue] = 1;

    const hasRu = data.ruOffsets[i + 1] > data.ruOffsets[i];
    const hasEn = data.enOffsets[i + 1] > data.enOffsets[i];
    if (hasRu && hasEn) translated += 1;
    if (!hasRu) missingRusyn += 1;
    if (!hasEn) missingEnglish += 1;
  }

  if (sourceIds.size !== n) throw new Error('Source identifier count mismatch.');
  if (translated !== data.translatedCount) throw new Error('Translated-row count does not match decoded records.');
  if (missingRusyn !== data.missingRusynCount) throw new Error('Missing-Rusyn count does not match decoded records.');
  if (missingEnglish !== data.missingEnglishCount) throw new Error('Missing-English count does not match decoded records.');
}

function validateOffsets(offsets, byteLength, label) {
  if (offsets[0] !== 0) throw new Error(`${label} offsets do not begin at zero.`);
  let previous = 0;
  for (let i = 1; i < offsets.length; i += 1) {
    const value = offsets[i];
    if (value < previous || value > byteLength) throw new Error(`${label} offsets are not monotonic or are outside the text buffer.`);
    previous = value;
  }
  if (previous !== byteLength) throw new Error(`${label} text length does not match its final offset.`);
}

function progress(message) {
  self.postMessage({ type: 'progress', message });
}

function fail(error) {
  self.postMessage({ type: 'error', message: error instanceof Error ? error.message : String(error) });
}
