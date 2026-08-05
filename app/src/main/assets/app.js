(() => {
  'use strict';

  const nf = new Intl.NumberFormat('en-CA');
  const dec = new TextDecoder('utf-8');
  const LANGS = new Set(['rusyn', 'english']);
  const UI_LANGS = new Set(['english', 'rusyn']);
  const VIEWS = new Set(['search', 'favorites', 'history', 'settings']);

  const I18N = Object.freeze({
    english: Object.freeze({
      appTitle: 'Lexicon — Two-way offline Rusyn - English dictionary',
      subtitle: 'Two-way offline Rusyn - English dictionary',
      interfaceBadge: 'Language in use: English',
      interfaceFlagAlt: 'British flag',
      switchInterface: 'Switch interface language to Rusyn',
      swapLanguages: 'Swap translation languages',
      clearSearch: 'Clear search',
      loadingTitle: 'Opening Lexicon',
      loadingText: 'Preparing 267,792 offline source rows…',
      loadingStart: 'Starting…',
      from: 'From',
      to: 'To',
      languageRusyn: 'Rusyn',
      languageEnglish: 'English',
      sourceLanguageRusyn: 'Rusyn',
      sourceLanguageEnglish: 'English',
      targetLanguageRusyn: 'Rusyn',
      targetLanguageEnglish: 'English',
      lookUp: 'Look up',
      wordSuggestions: 'Word suggestions',
      favorites: 'Favorites',
      favoritesSub: 'Saved on this device only.',
      clearAll: 'Clear all',
      history: 'History',
      historySub: 'Your 50 most recent searches.',
      settings: 'Settings',
      settingsSub: 'Display and local data information.',
      appearance: 'Appearance',
      appearanceDesc: 'Follow the system theme or choose a fixed light or dark appearance.',
      system: 'System',
      light: 'Light',
      dark: 'Dark',
      textSize: 'Text size',
      textSizeDesc: 'Adjust interface and result text.',
      compact: 'Compact',
      standard: 'Standard',
      large: 'Large',
      dictionaryAudit: 'Dictionary audit',
      auditDesc: 'Every non-header data row from the workbook is embedded exactly once.',
      showDetails: 'Show details',
      sourceRows: 'Source rows',
      translatedRows: 'Translated rows',
      withoutRusyn: 'Without Rusyn',
      search: 'Search',
      mainNavigation: 'Main navigation',
      confirm: 'Confirm',
      cancel: 'Cancel',
      ok: 'OK',
      findWord: 'Find a word',
      homeDescription: 'Search all embedded source rows in either direction. Exact matches return every matching workbook row. Rusyn search also corrects visually identical Latin letters accidentally mixed into Cyrillic words.',
      fullyOffline: 'fully offline',
      enterRusyn: 'Enter a Rusyn word',
      enterEnglish: 'Enter an English word',
      enterEnglishMessage: 'Enter an English word.',
      ready: 'Lexicon is ready.',
      loadFailure: 'Dictionary data could not be loaded or failed its integrity checks. Keep index.html, app.js, data-worker.js and dictionary.json in the same folder.',
      selectedDirection: '{from} to {to} selected.',
      resultFound: '{count} result found for {query}.',
      resultsFound: '{count} results found for {query}.',
      row: 'row',
      rows: 'rows',
      showMore: 'Show more',
      sheet: 'Sheet',
      missingTranslation: 'Translation unavailable in source data',
      blankSource: 'Blank source word',
      sourceRow: 'source row',
      addFavorite: 'Add to favorites',
      removeFavorite: 'Remove from favorites',
      noExactMatch: 'No exact match',
      notFound: '“{query}” was not found in {language}. Search ignores capitalization and repeated spaces. For Rusyn, it also treats common Latin/Cyrillic look-alike letters as the same character.',
      rowsDisplayed: '{shown} of {total} rows displayed.',
      savedFavorite: 'Saved to favorites.',
      removedFavorite: 'Removed from favorites.',
      noFavorites: 'No saved entries yet. Use the star beside a result.',
      translationUnavailable: 'Translation unavailable',
      englishUnavailable: 'English word unavailable',
      source: 'Source',
      openSaved: 'Open this saved entry',
      showMoreFavorites: 'Show more favorites',
      favoritesDisplayed: '{shown} of {total} favorites displayed.',
      savedRowUnavailable: 'This saved source row is no longer available.',
      savedEntryOpened: 'Saved entry opened.',
      clearFavoritesTitle: 'Clear favorites?',
      clearFavoritesBody: 'Remove all {count} saved entries from this device?',
      clearFavoritesConfirm: 'Clear favorites',
      favoritesCleared: 'Favorites cleared.',
      noSearches: 'No searches yet.',
      repeatSearch: 'Repeat search',
      removeHistory: 'Remove from history',
      historyRemoved: 'History item removed.',
      clearHistoryTitle: 'Clear search history?',
      clearHistoryBody: 'Remove all {count} recent searches from this device?',
      clearHistoryConfirm: 'Clear history',
      historyCleared: 'History cleared.',
      unknownDate: 'Unknown date',
      auditTitle: 'Lexicon data audit',
      close: 'Close',
      auditEmbedded: 'Embedded source rows: {count}',
      auditBoth: 'Rows with both words: {count}',
      auditNoRusyn: 'Rows without a Rusyn word: {count}',
      auditNoEnglish: 'Rows without an English word: {count}',
      auditSheets: 'Source worksheets: {count}',
      auditMixed: 'Rusyn rows with mixed-script look-alikes normalized for search: {count}',
      auditNote: 'Every non-header workbook row containing dictionary data was embedded exactly once. No dictionary row was removed or rewritten. See data-audit.json for per-sheet counts.',
      storageWarning: 'Local storage is unavailable. Favorites and history will last only until the app closes.',
      unableOpen: 'Unable to open Lexicon',
      reloadApp: 'Reload app',
      progressStartingWorker: 'Starting background decoder…',
      progressFallback: 'Background decoder unavailable. Using compatible fallback…',
      progressPreparing: 'Preparing dictionary…',
      progressLoading: 'Loading packed dictionary…',
      progressColumns: 'Decoding dictionary columns…',
      progressWorksheets: 'Decoding worksheet references…',
      progressRows: 'Decoding source rows…',
      progressRusynOffsets: 'Decoding Rusyn offsets…',
      progressEnglishOffsets: 'Decoding English offsets…',
      progressRusynWords: 'Decoding Rusyn words…',
      progressEnglishWords: 'Decoding English words…',
      progressOrder: 'Decoding search order…',
      progressVerify: 'Verifying all source rows…'
    }),
    rusyn: Object.freeze({
      appTitle: 'Lexicon — Двосмерни офлайн руски - анґлийски словнїк',
      subtitle: 'Двосмерни офлайн руски - анґлийски словнїк',
      interfaceBadge: 'Language in use: "Руски"',
      interfaceFlagAlt: 'Руска застава',
      switchInterface: 'Пременїц язик апликациї на анґлийски',
      swapLanguages: 'Вимениц язики прекладу',
      clearSearch: 'Вичисциц патранє',
      loadingTitle: 'Отвиранє Lexicon-а',
      loadingText: 'Приправянє 267,792 офлайн жридлових рядкох…',
      loadingStart: 'Початок…',
      from: 'Зоз',
      to: 'Нa',
      languageRusyn: 'Руского',
      languageEnglish: 'Анґлийски',
      sourceLanguageRusyn: 'Руского',
      sourceLanguageEnglish: 'Анґлийски',
      targetLanguageRusyn: 'Руского',
      targetLanguageEnglish: 'Анґлийски',
      lookUp: 'Патрац',
      wordSuggestions: 'Предкладаня словох',
      favorites: 'Улюбени',
      favoritesSub: 'Учуване лєм на тим уредзеню.',
      clearAll: 'Вичисциц шицко',
      history: 'История',
      historySub: 'Ваших 50 найновших патраньох.',
      settings: 'Подлашованя',
      settingsSub: 'Вигляд и локални податки.',
      appearance: 'Вигляд',
      appearanceDesc: 'Слїдзце системску тему або виберце сталу светлу чи цемну тему.',
      system: 'Системска',
      light: 'Светла',
      dark: 'Цемна',
      textSize: 'Велькосц тексту',
      textSizeDesc: 'Подлашуйце текст интерфейсу и резултатох.',
      compact: 'Мала',
      standard: 'Стандардна',
      large: 'Велька',
      dictionaryAudit: 'Контрола словнїка',
      auditDesc: 'Кажди рядок зоз податками без заглавя уключени точно раз.',
      showDetails: 'Приказац подробносци',
      sourceRows: 'Жридлови рядки',
      translatedRows: 'Преложени рядки',
      withoutRusyn: 'Без руского',
      search: 'Патранє',
      mainNavigation: 'Главна навигация',
      confirm: 'Потвердзенє',
      cancel: 'Одрушац',
      ok: 'Добре',
      findWord: 'Найдзце слово',
      homeDescription: 'Препатруйце шицки уключени жридлови рядки у обидвох напрямох. Точне совподанє враци шицки одвитуюци рядки зоз роботней кнїжки. При патраню по руски апликация виправя и латински букви хтори виглядаю исто як кирилски.',
      fullyOffline: 'цалком офлайн',
      enterRusyn: 'Упишце слово',
      enterEnglish: 'Упишце анґлийске слово',
      enterEnglishMessage: 'Упишце анґлийске слово.',
      ready: 'Lexicon готови.',
      loadFailure: 'Податки словнїка ше нє могли отворици або нє прешли контролу. Тримайце index.html, app.js, data-worker.js и dictionary.json у истей папки.',
      selectedDirection: 'Вибрани напрям {from} → {to}.',
      resultFound: 'Найдзени 1 резултат за {query}.',
      resultsFound: 'Найдзени {count} резултати за {query}.',
      row: 'рядок',
      rows: 'рядки',
      showMore: 'Приказац вецей',
      sheet: 'Аркуш',
      missingTranslation: 'Преклад нє доступни у жридлових податкох',
      blankSource: 'Празне жридлове слово',
      sourceRow: 'жридлови рядок',
      addFavorite: 'Додац до улюбених',
      removeFavorite: 'Одстранїц зоз улюбених',
      noExactMatch: 'Нєт точного совподаня',
      notFound: '„{query}“ нє найдене у {language}. Патранє нє розликує вельки и мали букви и повторени розходи. При рускім патраню подобни латински и кирилски букви рахую ше як исти.',
      rowsDisplayed: 'Приказани {shown} зоз {total} рядкох.',
      savedFavorite: 'Учуване до улюбених.',
      removedFavorite: 'Одстранєне зоз улюбених.',
      noFavorites: 'Ище нєт учуваних словох. Хаснуйце звездочку при резултату.',
      translationUnavailable: 'Преклад нє доступни',
      englishUnavailable: 'Анґлийске слово нє доступне',
      source: 'Жридло',
      openSaved: 'Отвориц учуване слово',
      showMoreFavorites: 'Приказац вецей улюбених',
      favoritesDisplayed: 'Приказани {shown} зоз {total} улюбених.',
      savedRowUnavailable: 'Тот учувани жридлови рядок вецей нє доступни.',
      savedEntryOpened: 'Учуване слово отворене.',
      clearFavoritesTitle: 'Вичисциц улюбени?',
      clearFavoritesBody: 'Одстранїц шицки {count} учувани слова зоз того уредзеня?',
      clearFavoritesConfirm: 'Вичисциц улюбени',
      favoritesCleared: 'Улюбени вичисцени.',
      noSearches: 'Ище нєт патраньох.',
      repeatSearch: 'Повториц патранє',
      removeHistory: 'Одстранїц зоз историї',
      historyRemoved: 'Ставка зоз историї одстранєна.',
      clearHistoryTitle: 'Вичисциц историю патраня?',
      clearHistoryBody: 'Одстранїц шицки {count} найновши патраня зоз того уредзеня?',
      clearHistoryConfirm: 'Вичисциц историю',
      historyCleared: 'История вичисцена.',
      unknownDate: 'Нєпознати датум',
      auditTitle: 'Контрола податкох Lexicon-а',
      close: 'Завериц',
      auditEmbedded: 'Уключени жридлови рядки: {count}',
      auditBoth: 'Рядки зоз обома словами: {count}',
      auditNoRusyn: 'Рядки без руского слова: {count}',
      auditNoEnglish: 'Рядки без анґлийского слова: {count}',
      auditSheets: 'Жридлови аркуши: {count}',
      auditMixed: 'Руски рядки зоз подлашованима подобнима буквами: {count}',
      auditNote: 'Кажди рядок роботней кнїжки зоз словнїковима податками уключени точно раз. Нєоден рядок нє одстранєни анї преписани. Подробносци по аркушох у data-audit.json.',
      storageWarning: 'Локалне складованє нє доступне. Улюбени и история буду доступни лєм покля апликация отворена.',
      unableOpen: 'Lexicon ше нє може отвориц',
      reloadApp: 'Поново отвориц апликацию',
      progressStartingWorker: 'Започинанє декодованя у позадзини…',
      progressFallback: 'Декодованє у позадзини нє доступне. Хаснує ше компатибилни способ…',
      progressPreparing: 'Приправянє словнїка…',
      progressLoading: 'Начитованє спакованого словнїка…',
      progressColumns: 'Декодованє колонкох словнїка…',
      progressWorksheets: 'Декодованє одношеньох на аркуши…',
      progressRows: 'Декодованє жридлових рядкох…',
      progressRusynOffsets: 'Декодованє руских офсетох…',
      progressEnglishOffsets: 'Декодованє анґлийских офсетох…',
      progressRusynWords: 'Декодованє руских словох…',
      progressEnglishWords: 'Декодованє анґлийских словох…',
      progressOrder: 'Декодованє порядку патраня…',
      progressVerify: 'Контрола шицких жридлових рядкох…'
    })
  });
  const FAVORITES_PAGE = 50;
  const RESULTS_FIRST_PAGE = 40;
  const RESULTS_NEXT_PAGE = 60;

  const STORAGE = Object.freeze({
    favorites: 'lexicon-favorites-v3',
    history: 'lexicon-history-v3',
    settings: 'lexicon-settings-v3'
  });
  const LEGACY_STORAGE = Object.freeze({
    favorites: ['lexikon-favorites-v2'],
    history: ['lexikon-history-v2'],
    settings: ['lexikon-settings-v2']
  });

  const DIRECTION_UI = Object.freeze({
    rusyn: Object.freeze({
      from: 'rusyn',
      to: 'english',
      fromCode: 'rsk',
      toCode: 'en',
      fromLabel: 'Rusyn',
      toLabel: 'English',
      placeholder: 'Упишце слово',
      inputLang: 'rsk'
    }),
    english: Object.freeze({
      from: 'english',
      to: 'rusyn',
      fromCode: 'en',
      toCode: 'rsk',
      fromLabel: 'English',
      toLabel: 'Rusyn',
      placeholder: 'Enter an English word',
      inputLang: 'en'
    })
  });

  // Latin and Cyrillic characters can look identical while using different Unicode codes.
  // Normalize safe look-alikes in Rusyn text without changing the stored dictionary rows.
  const CYRILLIC_CHAR = /[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F]/;
  const LETTER_RUN = /[A-Za-z\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F]+/g;
  const LATIN_LOOKALIKE_TO_CYRILLIC = Object.freeze({
    A: 'А', B: 'В', C: 'С', E: 'Е', H: 'Н', I: 'І', K: 'К', M: 'М',
    O: 'О', P: 'Р', T: 'Т', X: 'Х', Y: 'У',
    a: 'а', c: 'с', e: 'е', i: 'і', k: 'к', o: 'о', p: 'р', x: 'х', y: 'у'
  });

  const migratedFavorites = loadAndMigrate(STORAGE.favorites, LEGACY_STORAGE.favorites, []);
  const migratedHistory = loadAndMigrate(STORAGE.history, LEGACY_STORAGE.history, []);
  const migratedSettings = loadAndMigrate(STORAGE.settings, LEGACY_STORAGE.settings, {});

  const S = {
    ready: false,
    from: 'rusyn',
    to: 'english',
    view: 'search',
    uiLanguage: 'rusyn',
    scroll: { search: 0, favorites: 0, history: 0, settings: 0 },
    suggestions: [],
    activeSuggestion: -1,
    inputDirty: false,
    composing: false,
    results: [],
    shown: 0,
    query: '',
    favorites: sanitizeFavorites(migratedFavorites),
    history: sanitizeHistory(migratedHistory),
    settings: sanitizeSettings(migratedSettings),
    favoriteShown: FAVORITES_PAGE,
    favoritesDirty: true,
    historyDirty: true,
    suggestionTimer: null,
    toastTimer: null,
    storageWarned: false,
    modalAction: null,
    modalRestoreFocus: null,
    mediaDark: null,
    worker: null
  };

  const E = {};
  let D = null;

  function t(key, values = {}) {
    const table = I18N[S.uiLanguage] || I18N.english;
    let text = table[key] ?? I18N.english[key] ?? key;
    for (const [name, value] of Object.entries(values)) {
      text = String(text).replaceAll(`{${name}}`, String(value));
    }
    return String(text);
  }

  function toggleInterfaceLanguage() {
    const next = S.uiLanguage === 'english' ? 'rusyn' : 'english';
    applyInterfaceLanguage(next, { persist: true, rerender: true });
  }

  function applyInterfaceLanguage(language, options = {}) {
    const safe = UI_LANGS.has(language) ? language : 'english';
    S.uiLanguage = safe;
    S.settings.language = safe;
    document.documentElement.lang = safe === 'rusyn' ? 'rsk' : 'en';
    document.title = t('appTitle');

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (key) element.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.dataset.i18nAria;
      if (key) element.setAttribute('aria-label', t(key));
    });

    if (E.uiLanguageFlag) {
      E.uiLanguageFlag.src = safe === 'rusyn' ? 'assets/flag-rusyn.png' : 'assets/flag-uk.png';
      E.uiLanguageFlag.alt = t('interfaceFlagAlt');
    }
    if (E.uiLanguageText) E.uiLanguageText.textContent = t('interfaceBadge');
    if (E.uiLanguageToggle) E.uiLanguageToggle.setAttribute('aria-label', t('switchInterface'));

    applyDirectionUI();
    if (D) updateStats();

    if (options.persist) saveSettings();
    if (options.rerender && S.ready) {
      if (S.query) {
        if (S.results.length) renderResults(false);
        else renderNotFound(S.query, norm(S.query, S.from, true));
      } else {
        renderHome();
      }
      S.favoritesDirty = true;
      S.historyDirty = true;
      if (S.view === 'favorites') renderFavorites();
      if (S.view === 'history') renderHistory();
      announce(t('interfaceBadge'));
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    cache();
    applySettings();
    persistSanitizedStorage();
    bind();
    setReady(false);
    initializeNavigationState();

    try {
      D = await loadDictionary();
      D.ruCache = new Map();
      D.enCache = new Map();
      updateStats();
      applyDirectionUI();
      renderHome();
      setReady(true);
      E.clearFavorites.disabled = !S.favorites.length;
      E.clearHistory.disabled = !S.history.length;
      announce(t('ready'));
    } catch (error) {
      console.error(error);
      fatal(t('loadFailure'));
    }
  }

  function cache() {
    [
      'appRoot', 'loading', 'loadingSpinner', 'loadingTitle', 'loadingText', 'loadingProgress',
      'uiLanguageToggle', 'uiLanguageFlag', 'uiLanguageText', 'fromLanguage', 'toLanguage', 'fromMark', 'toMark',
      'swap', 'direction', 'searchWrap', 'searchInput', 'clear', 'lookup', 'suggestions', 'content',
      'favoritesList', 'historyList', 'clearFavorites', 'clearHistory', 'appearance',
      'fontSize', 'audit', 'statTotal', 'statTranslated', 'statMissing', 'toast', 'status',
      'modalBackdrop', 'modal', 'modalTitle', 'modalBody', 'modalCancel', 'modalConfirm'
    ].forEach(id => { E[id] = document.getElementById(id); });
    E.views = Array.from(document.querySelectorAll('.view'));
    E.nav = Array.from(document.querySelectorAll('.nav'));
    E.readyControls = Array.from(document.querySelectorAll('[data-requires-ready]'));
    E.fromControl = E.fromLanguage ? E.fromLanguage.closest('.language-control') : null;
    E.toControl = E.toLanguage ? E.toLanguage.closest('.language-control') : null;
  }

  function bind() {
    E.uiLanguageToggle.addEventListener('click', toggleInterfaceLanguage);
    E.fromLanguage.addEventListener('change', () => changeDirection(E.fromLanguage.value));
    E.toLanguage.addEventListener('change', () => changeDirection(opposite(E.toLanguage.value)));
    E.swap.addEventListener('click', () => changeDirection(S.to));

    E.lookup.addEventListener('click', search);
    E.clear.addEventListener('click', clearSearch);
    E.searchInput.addEventListener('input', onSearchInput);
    E.searchInput.addEventListener('keydown', keySearch);
    E.searchInput.addEventListener('focus', () => {
      if (S.inputDirty && E.searchInput.value.trim()) scheduleSuggestions();
    });
    E.searchInput.addEventListener('compositionstart', () => {
      S.composing = true;
      clearTimeout(S.suggestionTimer);
    });
    E.searchInput.addEventListener('compositionend', () => {
      S.composing = false;
      S.inputDirty = true;
      scheduleSuggestions();
    });

    document.addEventListener('click', event => {
      if (!event.target.closest('.search-wrap')) closeSuggestions();
    });

    E.content.addEventListener('click', contentClick);
    E.favoritesList.addEventListener('click', favoritesClick);
    E.historyList.addEventListener('click', historyClick);
    E.clearFavorites.addEventListener('click', requestClearFavorites);
    E.clearHistory.addEventListener('click', requestClearHistory);

    E.nav.forEach(button => button.addEventListener('click', () => navigate(button.dataset.target)));
    window.addEventListener('popstate', event => {
      const target = event.state && VIEWS.has(event.state.lexiconView) ? event.state.lexiconView : 'search';
      navigate(target, { push: false });
    });

    E.appearance.addEventListener('change', () => {
      S.settings.appearance = E.appearance.value;
      applyTheme();
      saveSettings();
    });
    E.fontSize.addEventListener('change', () => {
      S.settings.font = E.fontSize.value;
      applyFontSize();
      saveSettings();
    });
    E.audit.addEventListener('click', showAudit);

    E.modalCancel.addEventListener('click', closeModal);
    E.modalConfirm.addEventListener('click', confirmModal);
    E.modalBackdrop.addEventListener('click', event => {
      if (event.target === E.modalBackdrop) closeModal();
    });
    E.modal.addEventListener('keydown', modalKeydown);

    const viewport = window.visualViewport;
    if (viewport) {
      viewport.addEventListener('resize', positionSuggestions);
      viewport.addEventListener('scroll', positionSuggestions);
    }
    window.addEventListener('resize', positionSuggestions);
  }

  function initializeNavigationState() {
    const base = location.href.split('#')[0];
    try {
      history.replaceState({ lexiconView: 'search' }, '', `${base}#search`);
    } catch {
      // Some local WebViews restrict history URL changes. State navigation still works in memory.
      try { history.replaceState({ lexiconView: 'search' }, ''); } catch { /* no-op */ }
    }
  }

  async function loadDictionary() {
    setLoadingProgress('Starting background decoder…');
    const forceFallback = new URLSearchParams(location.search).has('noworker');
    if (!forceFallback && 'Worker' in window) {
      try {
        return await loadWithWorker();
      } catch (workerError) {
        console.warn('Background decoder unavailable; using main-thread fallback.', workerError);
        setLoadingProgress('Background decoder unavailable. Using compatible fallback…');
      }
    }
    return loadOnMainThread();
  }

  function loadWithWorker() {
    return new Promise((resolve, reject) => {
      let settled = false;
      let timeout = null;
      const worker = new Worker('data-worker.js');
      S.worker = worker;

      const finish = () => {
        if (timeout) clearTimeout(timeout);
        worker.terminate();
        S.worker = null;
      };

      timeout = setTimeout(() => {
        if (settled) return;
        settled = true;
        finish();
        reject(new Error('Background decoder timed out.'));
      }, 60000);

      worker.onmessage = async event => {
        const message = event.data || {};
        if (message.type === 'progress') {
          setLoadingProgress(message.message || 'Preparing dictionary…');
          return;
        }
        if (message.type === 'error' && !settled) {
          settled = true;
          finish();
          reject(new Error(message.message || 'Background decoder failed.'));
          return;
        }
        if (message.type === 'ready' && !settled) {
          settled = true;
          finish();
          try {
            const data = reconstructWorkerData(message.meta, message.buffers);
            validateTransferredData(data);
            resolve(data);
          } catch (error) {
            reject(error);
          }
        }
      };

      worker.onerror = event => {
        if (settled) return;
        settled = true;
        finish();
        reject(new Error(event.message || 'Background decoder could not start.'));
      };

      worker.postMessage({ type: 'load' });
    });
  }

  function reconstructWorkerData(meta, buffers) {
    if (!meta || !buffers) throw new Error('Background decoder returned incomplete data.');
    return {
      ...meta,
      sheets: new Uint8Array(buffers.sheets),
      sourceRows: new Uint32Array(buffers.sourceRows),
      ruOffsets: new Uint32Array(buffers.ruOffsets),
      enOffsets: new Uint32Array(buffers.enOffsets),
      ruBytes: new Uint8Array(buffers.ruBytes),
      enBytes: new Uint8Array(buffers.enBytes),
      ruOrder: new Uint32Array(buffers.ruOrder)
    };
  }

  async function loadOnMainThread() {
    setLoadingProgress('Loading packed dictionary…');
    const response = await fetch('dictionary.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Could not load dictionary.json (${response.status}).`);
    const packed = await response.json();
    if (!packed || typeof packed !== 'object') throw new Error('Packed dictionary object was not found.');

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
      rusynLookalikeCharactersNormalized: Number(packed.rusynLookalikeCharactersNormalized || 0)
    };

    data.sheets = await decodeB64Async(packed.sheetsB64, 'Decoding worksheet references…');
    packed.sheetsB64 = '';
    data.sourceRows = bytesToU32(await decodeB64Async(packed.sourceRowsB64, 'Decoding source rows…'));
    packed.sourceRowsB64 = '';
    data.ruOffsets = bytesToU32(await decodeB64Async(packed.rusynOffsetsB64, 'Decoding Rusyn offsets…'));
    packed.rusynOffsetsB64 = '';
    data.enOffsets = bytesToU32(await decodeB64Async(packed.englishOffsetsB64, 'Decoding English offsets…'));
    packed.englishOffsetsB64 = '';
    data.ruBytes = await decodeB64Async(packed.rusynTextB64, 'Decoding Rusyn words…');
    packed.rusynTextB64 = '';
    data.enBytes = await decodeB64Async(packed.englishTextB64, 'Decoding English words…');
    packed.englishTextB64 = '';
    data.ruOrder = bytesToU32(await decodeB64Async(packed.rusynOrderB64, 'Decoding search order…'));
    packed.rusynOrderB64 = '';

    releasePackedGlobal();
    setLoadingProgress('Verifying all source rows…');
    await validateDecodedData(data, true);
    return data;
  }

  async function decodeB64Async(value, label) {
    if (typeof value !== 'string' || !value.length) throw new Error('A packed dictionary column is missing.');
    setLoadingProgress(label);
    const padding = value.endsWith('==') ? 2 : value.endsWith('=') ? 1 : 0;
    const outputLength = Math.floor(value.length * 3 / 4) - padding;
    const output = new Uint8Array(outputLength);
    const chunkChars = 1024 * 1024; // Multiple of four.
    let write = 0;
    for (let start = 0; start < value.length; start += chunkChars) {
      const end = Math.min(value.length, start + chunkChars);
      const binary = atob(value.slice(start, end));
      for (let i = 0; i < binary.length; i += 1) output[write++] = binary.charCodeAt(i);
      await yieldToUI();
    }
    if (write !== outputLength) throw new Error('Decoded column length mismatch.');
    return output;
  }

  function bytesToU32(bytes) {
    if (!(bytes instanceof Uint8Array) || bytes.byteLength % 4 !== 0) throw new Error('Invalid packed integer column length.');
    return new Uint32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
  }

  function validateTransferredData(data) {
    const n = data.rowCount;
    if (!Number.isInteger(n) || n < 1) throw new Error('Invalid row count.');
    if (!Array.isArray(data.sheetNames) || !data.sheetNames.length) throw new Error('Worksheet names are missing.');
    if (data.sheets.length !== n || data.sourceRows.length !== n) throw new Error('Packed row-column length mismatch.');
    if (data.ruOffsets.length !== n + 1 || data.enOffsets.length !== n + 1) throw new Error('Packed text-offset length mismatch.');
    if (data.ruOrder.length !== n) throw new Error('Packed Rusyn search-order length mismatch.');
    if (data.ruOffsets[0] !== 0 || data.enOffsets[0] !== 0) throw new Error('Packed text offsets do not begin at zero.');
    if (data.ruOffsets[n] !== data.ruBytes.length || data.enOffsets[n] !== data.enBytes.length) throw new Error('Packed text length mismatch.');
  }

  async function validateDecodedData(data, asynchronous) {
    const n = data.rowCount;
    if (!Number.isInteger(n) || n < 1) throw new Error('Invalid row count.');
    if (!Array.isArray(data.sheetNames) || !data.sheetNames.length) throw new Error('Worksheet names are missing.');
    if (data.sheets.length !== n || data.sourceRows.length !== n) throw new Error('Packed row-column length mismatch.');
    if (data.ruOffsets.length !== n + 1 || data.enOffsets.length !== n + 1) throw new Error('Packed text-offset length mismatch.');
    if (data.ruOrder.length !== n) throw new Error('Packed Rusyn search-order length mismatch.');

    await validateOffsets(data.ruOffsets, data.ruBytes.length, 'Rusyn', asynchronous);
    await validateOffsets(data.enOffsets, data.enBytes.length, 'English', asynchronous);

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

      if (asynchronous && i > 0 && i % 25000 === 0) await yieldToUI();
    }

    if (sourceIds.size !== n) throw new Error('Source identifier count mismatch.');
    if (translated !== data.translatedCount) throw new Error('Translated-row count does not match decoded records.');
    if (missingRusyn !== data.missingRusynCount) throw new Error('Missing-Rusyn count does not match decoded records.');
    if (missingEnglish !== data.missingEnglishCount) throw new Error('Missing-English count does not match decoded records.');
  }

  async function validateOffsets(offsets, byteLength, label, asynchronous) {
    if (offsets[0] !== 0) throw new Error(`${label} offsets do not begin at zero.`);
    let previous = 0;
    for (let i = 1; i < offsets.length; i += 1) {
      const value = offsets[i];
      if (value < previous || value > byteLength) throw new Error(`${label} offsets are not monotonic or are outside the text buffer.`);
      previous = value;
      if (asynchronous && i % 50000 === 0) await yieldToUI();
    }
    if (previous !== byteLength) throw new Error(`${label} text length does not match its final offset.`);
  }

  function releasePackedGlobal() {
    try { delete globalThis.LEXICON_PACKED; } catch { globalThis.LEXICON_PACKED = null; }
    try { delete globalThis.LEXIKON_PACKED; } catch { globalThis.LEXIKON_PACKED = null; }
    const script = document.querySelector('script[data-dictionary-src]');
    if (script) script.remove();
  }

  function yieldToUI() {
    return new Promise(resolve => setTimeout(resolve, 0));
  }

  function setLoadingProgress(message) {
    const progressKeys = {
      'Starting background decoder…': 'progressStartingWorker',
      'Background decoder unavailable. Using compatible fallback…': 'progressFallback',
      'Preparing dictionary…': 'progressPreparing',
      'Loading packed dictionary…': 'progressLoading',
      'Decoding dictionary columns…': 'progressColumns',
      'Decoding worksheet references…': 'progressWorksheets',
      'Decoding source rows…': 'progressRows',
      'Decoding Rusyn offsets…': 'progressRusynOffsets',
      'Decoding English offsets…': 'progressEnglishOffsets',
      'Decoding Rusyn words…': 'progressRusynWords',
      'Decoding English words…': 'progressEnglishWords',
      'Decoding search order…': 'progressOrder',
      'Verifying all source rows…': 'progressVerify'
    };
    if (E.loadingProgress) E.loadingProgress.textContent = progressKeys[message] ? t(progressKeys[message]) : message;
  }

  function setReady(ready) {
    S.ready = ready;
    E.readyControls.forEach(control => { control.disabled = !ready; });
    if (ready) {
      document.body.classList.remove('app-loading');
      E.appRoot.removeAttribute('inert');
      E.appRoot.removeAttribute('aria-hidden');
      E.loading.classList.add('hidden');
    } else {
      document.body.classList.add('app-loading');
      E.appRoot.setAttribute('inert', '');
      E.appRoot.setAttribute('aria-hidden', 'true');
    }
  }

  function term(index, lang) {
    const rusyn = lang === 'rusyn';
    const cache = rusyn ? D.ruCache : D.enCache;
    if (cache.has(index)) return cache.get(index);

    const offsets = rusyn ? D.ruOffsets : D.enOffsets;
    const bytes = rusyn ? D.ruBytes : D.enBytes;
    const value = dec.decode(bytes.subarray(offsets[index], offsets[index + 1]));

    if (cache.size > 5000) cache.clear();
    cache.set(index, value);
    return value;
  }

  function fixRusynLookalikes(value, allowPureLatin = false) {
    const text = String(value ?? '');
    const isPureSafeLookalike = allowPureLatin &&
      !CYRILLIC_CHAR.test(text) &&
      /[A-Za-z]/.test(text) &&
      Array.from(text).every(ch => !/[A-Za-z]/.test(ch) || LATIN_LOOKALIKE_TO_CYRILLIC[ch]);

    if (isPureSafeLookalike) {
      return Array.from(text).map(ch => LATIN_LOOKALIKE_TO_CYRILLIC[ch] || ch).join('');
    }

    return text.replace(LETTER_RUN, token => {
      if (!CYRILLIC_CHAR.test(token)) return token;
      return Array.from(token).map(ch => LATIN_LOOKALIKE_TO_CYRILLIC[ch] || ch).join('');
    });
  }

  function norm(value, lang = 'english', isInput = false) {
    let normalized = String(value ?? '').normalize('NFKC');
    if (lang === 'rusyn') normalized = fixRusynLookalikes(normalized, isInput);
    return normalized.toLowerCase().trim().replace(/\s+/g, ' ');
  }

  function displayTerm(value, lang) {
    const text = String(value ?? '');
    return lang === 'rusyn' ? fixRusynLookalikes(text) : text;
  }

  function opposite(lang) {
    return lang === 'english' ? 'rusyn' : 'english';
  }

  function name(lang) {
    return lang === 'english' ? t('languageEnglish') : t('languageRusyn');
  }

  function roleName(lang, role) {
    const source = role === 'source';
    if (lang === 'english') return t(source ? 'sourceLanguageEnglish' : 'targetLanguageEnglish');
    return t(source ? 'sourceLanguageRusyn' : 'targetLanguageRusyn');
  }

  function setLanguageOptionText(select, role) {
    if (!select) return;
    const rusyn = select.querySelector('option[value="rusyn"]');
    const english = select.querySelector('option[value="english"]');
    if (rusyn) rusyn.textContent = roleName('rusyn', role);
    if (english) english.textContent = roleName('english', role);
  }

  function langCode(lang) {
    return lang === 'english' ? 'en' : 'rsk';
  }

  function changeDirection(from) {
    if (!S.ready || !LANGS.has(from)) return;
    setDirection(from, { clearSearchState: true });
    announce(t('selectedDirection', { from: name(S.from), to: name(S.to) }));
  }

  function setDirection(from, options = {}) {
    const safeFrom = LANGS.has(from) ? from : 'rusyn';
    S.from = safeFrom;
    S.to = opposite(safeFrom);
    applyDirectionUI();
    closeSuggestions();

    if (options.clearSearchState !== false) {
      E.searchInput.value = '';
      E.clear.classList.remove('visible');
      S.inputDirty = false;
      S.results = [];
      S.shown = 0;
      S.query = '';
      renderHome();
    }
  }

  function applyDirectionUI() {
    if (!E.fromLanguage || !E.toLanguage) return;
    const ui = DIRECTION_UI[S.from] || DIRECTION_UI.rusyn;
    const rusynInterface = S.uiLanguage === 'rusyn';

    // In the Rusyn interface, show the destination first: На en | Анґлийски
    // for Rusyn-to-English, and На rsk | Руски for English-to-Rusyn.
    // The source control follows after the swap button and uses the proper
    // source-language forms: Руского / Анґлийского.
    if (E.fromControl && E.toControl) {
      E.toControl.style.order = rusynInterface ? '1' : '3';
      E.swap.style.order = '2';
      E.fromControl.style.order = rusynInterface ? '3' : '1';
    }

    // Apply every code, role-specific name and value from one direction state
    // so navigation and interface-language changes cannot mix the languages.
    setLanguageOptionText(E.fromLanguage, 'source');
    setLanguageOptionText(E.toLanguage, 'target');
    E.fromLanguage.value = ui.from;
    E.toLanguage.value = ui.to;
    E.fromMark.textContent = ui.fromCode;
    E.toMark.textContent = ui.toCode;
    E.fromLanguage.setAttribute('lang', ui.from === 'rusyn' ? 'rsk' : 'en');
    E.toLanguage.setAttribute('lang', ui.to === 'rusyn' ? 'rsk' : 'en');
    E.fromLanguage.setAttribute('aria-label', `${t('from')}: ${roleName(ui.from, 'source')}`);
    E.toLanguage.setAttribute('aria-label', `${t('to')}: ${roleName(ui.to, 'target')}`);
    E.direction.textContent = `${name(ui.from)} → ${name(ui.to)}`;
    const placeholder = ui.from === 'rusyn' ? t('enterRusyn') : t('enterEnglish');
    E.searchInput.placeholder = placeholder;
    E.searchInput.setAttribute('aria-label', placeholder);
    E.searchInput.setAttribute('lang', ui.inputLang);
  }

  function updateStats() {
    if (!D) return;
    E.statTotal.textContent = nf.format(D.rowCount);
    E.statTranslated.textContent = nf.format(D.translatedCount);
    E.statMissing.textContent = nf.format(D.missingRusynCount);
  }

  function onSearchInput() {
    E.clear.classList.toggle('visible', Boolean(E.searchInput.value));
    S.inputDirty = true;

    if (S.query && norm(E.searchInput.value, S.from, true) !== norm(S.query, S.from, true)) {
      S.results = [];
      S.shown = 0;
      S.query = '';
      renderHome();
    }

    if (!S.composing) scheduleSuggestions();
  }

  function renderHome() {
    if (!D) return;
    const examples = S.from === 'rusyn'
      ? ['вода', 'валал', 'хижа', 'кнїжка']
      : (Array.isArray(D.examples) && D.examples.length ? D.examples : ['water', 'village', 'house', 'book']);
    const exampleLang = langCode(S.from);

    E.content.innerHTML = `
      <div class="empty">
        <div class="empty-inner">
          <div class="round-icon logo-round" aria-hidden="true">
            <img src="assets/logo-ab-book.png" alt="">
          </div>
          <h2>${html(t('findWord'))}</h2>
          <p>${html(t('homeDescription'))}</p>
          <div class="examples">${examples.map(word => `<button class="chip" type="button" data-example="${attr(word)}" lang="${exampleLang}">${html(word)}</button>`).join('')}</div>
          <div class="data-note">${nf.format(D.rowCount)} ${html(t('sourceRows').toLowerCase())} · ${html(t('fullyOffline'))}</div>
        </div>
      </div>`;
  }

  function scheduleSuggestions() {
    clearTimeout(S.suggestionTimer);
    if (!S.inputDirty || S.composing) return;
    S.suggestionTimer = setTimeout(showSuggestions, 90);
  }

  function showSuggestions() {
    if (!S.ready || S.composing || !S.inputDirty) return;
    const q = norm(E.searchInput.value, S.from, true);
    if (!q) {
      closeSuggestions();
      return;
    }

    S.suggestions = prefix(q, S.from, 9);
    S.activeSuggestion = -1;
    if (!S.suggestions.length) {
      closeSuggestions();
      return;
    }

    const language = langCode(S.from);
    E.suggestions.innerHTML = S.suggestions.map((word, index) => `
      <button class="suggestion" id="suggestion-${index}" type="button" role="option" aria-selected="false" data-s="${index}" lang="${language}">
        <strong>${html(word)}</strong><small>${name(S.from)}</small>
      </button>`).join('');

    E.suggestions.querySelectorAll('[data-s]').forEach(button => {
      button.addEventListener('click', () => choose(Number(button.dataset.s)));
    });
    E.suggestions.classList.remove('hidden');
    E.searchInput.setAttribute('aria-expanded', 'true');
    positionSuggestions();
  }

  function positionSuggestions() {
    if (!E.suggestions || E.suggestions.classList.contains('hidden')) return;
    const panel = E.searchWrap.querySelector('.search-panel');
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const viewport = window.visualViewport;
    const viewportTop = viewport ? viewport.offsetTop : 0;
    const viewportHeight = viewport ? viewport.height : window.innerHeight;
    const viewportBottom = viewportTop + viewportHeight;
    const navHeight = document.querySelector('.bottom-nav')?.getBoundingClientRect().height || 0;
    const below = Math.max(0, viewportBottom - rect.bottom - navHeight - 16);
    const above = Math.max(0, rect.top - viewportTop - 16);
    const openUp = below < 160 && above > below;
    const available = openUp ? above : below;

    if (available < 72) {
      closeSuggestions();
      return;
    }
    E.suggestions.classList.toggle('open-up', openUp);
    E.suggestions.style.maxHeight = `${Math.min(360, available)}px`;
  }

  function keySearch(event) {
    if (S.composing || event.isComposing || event.keyCode === 229) return;
    const open = !E.suggestions.classList.contains('hidden');
    if (event.key === 'ArrowDown' && open) {
      event.preventDefault();
      S.activeSuggestion = Math.min(S.activeSuggestion + 1, S.suggestions.length - 1);
      updateActiveSuggestion();
    } else if (event.key === 'ArrowUp' && open) {
      event.preventDefault();
      S.activeSuggestion = Math.max(S.activeSuggestion - 1, 0);
      updateActiveSuggestion();
    } else if (event.key === 'Escape') {
      closeSuggestions();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      S.activeSuggestion >= 0 ? choose(S.activeSuggestion) : search();
    }
  }

  function updateActiveSuggestion() {
    Array.from(E.suggestions.children).forEach((button, index) => {
      const active = index === S.activeSuggestion;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
      if (active) {
        E.searchInput.setAttribute('aria-activedescendant', button.id);
        button.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function choose(index) {
    const word = S.suggestions[index];
    if (!word) return;
    E.searchInput.value = word;
    E.clear.classList.add('visible');
    S.inputDirty = false;
    closeSuggestions();
    search();
  }

  function closeSuggestions() {
    clearTimeout(S.suggestionTimer);
    S.suggestions = [];
    S.activeSuggestion = -1;
    E.suggestions.classList.add('hidden');
    E.suggestions.classList.remove('open-up');
    E.suggestions.style.maxHeight = '';
    E.suggestions.innerHTML = '';
    E.searchInput.setAttribute('aria-expanded', 'false');
    E.searchInput.removeAttribute('aria-activedescendant');
  }

  function lowerEn(q) {
    let low = 0;
    let high = D.rowCount;
    while (low < high) {
      const mid = (low + high) >>> 1;
      if (norm(term(mid, 'english'), 'english') < q) low = mid + 1;
      else high = mid;
    }
    return low;
  }

  function lowerRu(q) {
    let low = 0;
    let high = D.ruOrder.length;
    while (low < high) {
      const mid = (low + high) >>> 1;
      if (norm(term(D.ruOrder[mid], 'rusyn'), 'rusyn') < q) low = mid + 1;
      else high = mid;
    }
    return low;
  }

  function exact(q, lang) {
    const output = [];
    if (lang === 'english') {
      let position = lowerEn(q);
      while (position < D.rowCount && norm(term(position, 'english'), 'english') === q) {
        output.push(position);
        position += 1;
      }
    } else {
      let position = lowerRu(q);
      while (position < D.ruOrder.length) {
        const row = D.ruOrder[position];
        if (norm(term(row, 'rusyn'), 'rusyn') !== q) break;
        output.push(row);
        position += 1;
      }
    }
    return output;
  }

  function prefix(q, lang, limit) {
    const output = [];
    const seen = new Set();
    let scans = 0;

    if (lang === 'english') {
      let position = lowerEn(q);
      while (position < D.rowCount && output.length < limit && scans < 5000) {
        const raw = term(position, 'english').trim();
        const key = norm(raw, 'english');
        if (!key.startsWith(q)) break;
        if (key && !seen.has(key)) {
          seen.add(key);
          output.push(displayTerm(raw, 'english'));
        }
        position += 1;
        scans += 1;
      }
    } else {
      let position = lowerRu(q);
      while (position < D.ruOrder.length && output.length < limit && scans < 5000) {
        const raw = term(D.ruOrder[position], 'rusyn').trim();
        const key = norm(raw, 'rusyn');
        if (!key.startsWith(q)) break;
        if (key && !seen.has(key)) {
          seen.add(key);
          output.push(displayTerm(raw, 'rusyn'));
        }
        position += 1;
        scans += 1;
      }
    }
    return output;
  }

  function search() {
    if (!S.ready) return;
    const shown = E.searchInput.value.trim();
    const q = norm(shown, S.from, true);
    if (!q) {
      toast(S.from === 'rusyn' ? `${t('enterRusyn')}.` : t('enterEnglishMessage'));
      E.searchInput.focus({ preventScroll: true });
      return;
    }

    closeSuggestions();
    E.searchInput.blur();
    S.inputDirty = false;
    S.query = shown;
    S.results = exact(q, S.from);
    S.shown = 0;
    addHistory(shown, S.from);
    if (S.results.length) renderResults(true);
    else renderNotFound(shown, q);
    revealContent();
    announce(t(S.results.length === 1 ? 'resultFound' : 'resultsFound', { count: nf.format(S.results.length), query: shown }));
  }

  function clearSearch() {
    E.searchInput.value = '';
    E.clear.classList.remove('visible');
    S.results = [];
    S.shown = 0;
    S.query = '';
    S.inputDirty = false;
    closeSuggestions();
    renderHome();
    E.searchInput.focus({ preventScroll: true });
  }

  function renderResults(resetCount = true) {
    if (resetCount || S.shown < 1) S.shown = Math.min(RESULTS_FIRST_PAGE, S.results.length);
    else S.shown = Math.min(Math.max(RESULTS_FIRST_PAGE, S.shown), S.results.length);

    E.content.innerHTML = `
      <div class="results-head">
        <div><div class="kicker">${name(S.from)} → ${name(S.to)}</div><h2 class="query-title">“${html(S.query)}”</h2></div>
        <div class="result-count">${nf.format(S.results.length)} ${html(t(S.results.length === 1 ? 'row' : 'rows'))}</div>
      </div>
      <div class="result-list" id="resultList">${cards(S.results.slice(0, S.shown))}</div>
      ${S.shown < S.results.length ? `<button class="more" id="more" type="button">${html(t('showMore'))}</button>` : ''}`;
  }

  function cards(ids) {
    const saved = new Set(S.favorites.map(item => item.key));
    return ids.map(index => {
      const source = displayTerm(term(index, S.from).trim(), S.from);
      const target = displayTerm(term(index, S.to).trim(), S.to);
      const sheet = D.sheetNames[D.sheets[index]] || `${t('sheet')} ${D.sheets[index] + 1}`;
      const key = recordKey(index);
      const isSaved = saved.has(key);

      return `
        <article class="result-card" data-record-key="${attr(key)}">
          <div>
            <div class="translation" lang="${langCode(S.to)}">${target ? html(target) : `<span class="missing">${html(t('missingTranslation'))}</span>`}</div>
            <div class="source" lang="${langCode(S.from)}">${html(source || t('blankSource'))}</div>
            <div class="meta">${html(sheet)} · ${html(t('sourceRow'))} ${nf.format(D.sourceRows[index])}</div>
          </div>
          <button class="star ${isSaved ? 'saved' : ''}" type="button" data-row="${index}" data-key="${attr(key)}" aria-label="${html(isSaved ? t('removeFavorite') : t('addFavorite'))}" aria-pressed="${isSaved}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>
          </button>
        </article>`;
    }).join('');
  }

  function renderNotFound(shown, q) {
    const nearby = prefix(q, S.from, 10);
    E.content.innerHTML = `
      <div class="not-found">
        <div class="round-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8.5 9.5h5M8.5 12.5h3"/></svg></div>
        <h2>${html(t('noExactMatch'))}</h2>
        <p>${html(t('notFound', { query: shown, language: name(S.from) }))}</p>
        ${nearby.length ? `<div class="nearby">${nearby.map(word => `<button class="chip" type="button" data-near="${attr(word)}" lang="${langCode(S.from)}">${html(word)}</button>`).join('')}</div>` : ''}
      </div>`;
  }

  function contentClick(event) {
    const example = event.target.closest('[data-example]');
    const nearby = event.target.closest('[data-near]');
    const star = event.target.closest('[data-row]');
    const more = event.target.closest('#more');

    if (example || nearby) {
      E.searchInput.value = example ? example.dataset.example : nearby.dataset.near;
      E.clear.classList.add('visible');
      S.inputDirty = false;
      search();
    } else if (star) {
      toggleFavorite(Number(star.dataset.row), star);
    } else if (more) {
      showMoreResults(more);
    }
  }

  function showMoreResults(button) {
    const list = document.getElementById('resultList');
    if (!list) return;
    const start = S.shown;
    const end = Math.min(start + RESULTS_NEXT_PAGE, S.results.length);
    list.insertAdjacentHTML('beforeend', cards(S.results.slice(start, end)));
    S.shown = end;
    const firstNew = list.children[start];
    if (S.shown >= S.results.length) {
      button.remove();
      if (firstNew) {
        firstNew.setAttribute('tabindex', '-1');
        firstNew.focus({ preventScroll: true });
      } else {
        E.content.setAttribute('tabindex', '-1');
        E.content.focus({ preventScroll: true });
      }
    } else {
      button.focus({ preventScroll: true });
    }
    announce(t('rowsDisplayed', { shown: nf.format(end), total: nf.format(S.results.length) }));
  }

  function recordKey(index) {
    return `${D.sheets[index]}:${D.sourceRows[index]}`;
  }

  function toggleFavorite(index, sourceButton) {
    if (!Number.isInteger(index) || index < 0 || index >= D.rowCount) return;
    const key = recordKey(index);
    const position = S.favorites.findIndex(item => item.key === key);

    if (position >= 0) {
      S.favorites.splice(position, 1);
      toast(t('removedFavorite'));
    } else {
      S.favorites.unshift({
        key,
        recordIndex: index,
        sheet: D.sheets[index],
        row: D.sourceRows[index],
        rusyn: displayTerm(term(index, 'rusyn'), 'rusyn'),
        english: term(index, 'english'),
        from: S.from,
        savedAt: Date.now()
      });
      toast(t('savedFavorite'));
    }

    store(STORAGE.favorites, S.favorites);
    S.favoritesDirty = true;
    syncFavoriteStars(key);
    if (sourceButton && document.contains(sourceButton)) sourceButton.focus({ preventScroll: true });
  }

  function syncFavoriteStars(onlyKey = null) {
    const saved = new Set(S.favorites.map(item => item.key));
    const selector = onlyKey ? `.star[data-key="${cssEscape(onlyKey)}"]` : '.star[data-key]';
    document.querySelectorAll(selector).forEach(button => {
      const isSaved = saved.has(button.dataset.key);
      button.classList.toggle('saved', isSaved);
      button.setAttribute('aria-pressed', String(isSaved));
      button.setAttribute('aria-label', isSaved ? t('removeFavorite') : t('addFavorite'));
    });
  }

  function renderFavorites(options = {}) {
    S.favoritesDirty = false;
    E.clearFavorites.disabled = !S.favorites.length;
    if (!S.favorites.length) {
      E.favoritesList.innerHTML = `<div class="list-empty" id="favoritesEmpty" tabindex="-1">${html(t('noFavorites'))}</div>`;
      if (options.focusEmpty) document.getElementById('favoritesEmpty')?.focus({ preventScroll: true });
      return;
    }

    S.favoriteShown = Math.min(Math.max(FAVORITES_PAGE, S.favoriteShown), S.favorites.length);
    const visible = S.favorites.slice(0, S.favoriteShown);
    E.favoritesList.innerHTML = visible.map((item, index) => `
      <article class="list-row" data-favorite-key="${attr(item.key)}">
        <div>
          <div class="list-term" lang="rsk">${html(displayTerm(item.rusyn, 'rusyn') || t('translationUnavailable'))}</div>
          <div class="list-meta"><span lang="en">${html(item.english || t('englishUnavailable'))}</span> · ${html(D.sheetNames[item.sheet] || t('source'))}, ${html(t('row'))} ${nf.format(item.row)}</div>
        </div>
        <div class="actions">
          <button class="icon-btn" type="button" data-fsearch="${index}" aria-label="${html(t('openSaved'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button>
          <button class="icon-btn danger" type="button" data-fremove="${index}" aria-label="${html(t('removeFavorite'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5m4-5v5"/></svg></button>
        </div>
      </article>`).join('') + (S.favoriteShown < S.favorites.length ? `<button class="more list-more" type="button" data-fmore>${html(t('showMoreFavorites'))}</button>` : '');

    if (options.focusKey) {
      const row = E.favoritesList.querySelector(`[data-favorite-key="${cssEscape(options.focusKey)}"]`);
      (row?.querySelector('[data-fremove]') || row)?.focus({ preventScroll: true });
    }
  }

  function favoritesClick(event) {
    const searchButton = event.target.closest('[data-fsearch]');
    const removeButton = event.target.closest('[data-fremove]');
    const moreButton = event.target.closest('[data-fmore]');

    if (searchButton) {
      const item = S.favorites[Number(searchButton.dataset.fsearch)];
      if (item) openFavorite(item);
    } else if (removeButton) {
      removeFavoriteAt(Number(removeButton.dataset.fremove));
    } else if (moreButton) {
      const oldShown = S.favoriteShown;
      S.favoriteShown = Math.min(S.favoriteShown + FAVORITES_PAGE, S.favorites.length);
      renderFavorites();
      const firstNew = E.favoritesList.querySelectorAll('.list-row')[oldShown];
      if (firstNew) {
        firstNew.setAttribute('tabindex', '-1');
        firstNew.focus({ preventScroll: true });
      }
      announce(t('favoritesDisplayed', { shown: nf.format(S.favoriteShown), total: nf.format(S.favorites.length) }));
    }
  }

  function openFavorite(item) {
    const index = resolveFavoriteIndex(item);
    if (index < 0) {
      toast(t('savedRowUnavailable'));
      return;
    }

    const from = LANGS.has(item.from) ? item.from : (item.rusyn ? 'rusyn' : 'english');
    setDirection(from, { clearSearchState: true });
    const query = displayTerm(term(index, from), from).trim();
    E.searchInput.value = query;
    E.clear.classList.toggle('visible', Boolean(query));
    S.query = query;
    S.results = [index];
    S.shown = 1;
    S.inputDirty = false;
    addHistory(query, from);
    renderResults(true);
    navigate('search');
    revealContent();
    announce(t('savedEntryOpened'));
  }

  function resolveFavoriteIndex(item) {
    const candidate = Number(item.recordIndex);
    if (Number.isInteger(candidate) && candidate >= 0 && candidate < D.rowCount && recordKey(candidate) === item.key) return candidate;
    for (let i = 0; i < D.rowCount; i += 1) {
      if (D.sheets[i] === Number(item.sheet) && D.sourceRows[i] === Number(item.row)) {
        item.recordIndex = i;
        store(STORAGE.favorites, S.favorites);
        return i;
      }
    }
    return -1;
  }

  function removeFavoriteAt(index) {
    if (!Number.isInteger(index) || !S.favorites[index]) return;
    const removed = S.favorites[index];
    S.favorites.splice(index, 1);
    store(STORAGE.favorites, S.favorites);
    syncFavoriteStars(removed.key);

    const next = S.favorites[index] || S.favorites[index - 1] || null;
    renderFavorites({ focusKey: next?.key, focusEmpty: !next });
    toast(t('removedFavorite'));
  }

  function requestClearFavorites() {
    if (!S.favorites.length) return;
    openModal({
      title: t('clearFavoritesTitle'),
      body: t('clearFavoritesBody', { count: nf.format(S.favorites.length) }),
      confirmText: t('clearFavoritesConfirm'),
      danger: true,
      onConfirm: () => {
        S.favorites = [];
        S.favoriteShown = FAVORITES_PAGE;
        store(STORAGE.favorites, []);
        renderFavorites({ focusEmpty: true });
        syncFavoriteStars();
        toast(t('favoritesCleared'));
      }
    });
  }

  function addHistory(query, from) {
    const normalizedQuery = norm(query, from, true);
    S.history = S.history.filter(item => !(item.from === from && norm(item.query, item.from, true) === normalizedQuery));
    S.history.unshift({ query, from, at: Date.now() });
    S.history = S.history.slice(0, 50);
    store(STORAGE.history, S.history);
    S.historyDirty = true;
  }

  function renderHistory(options = {}) {
    S.historyDirty = false;
    E.clearHistory.disabled = !S.history.length;
    if (!S.history.length) {
      E.historyList.innerHTML = `<div class="list-empty" id="historyEmpty" tabindex="-1">${html(t('noSearches'))}</div>`;
      if (options.focusEmpty) document.getElementById('historyEmpty')?.focus({ preventScroll: true });
      return;
    }

    E.historyList.innerHTML = S.history.map((item, index) => `
      <article class="list-row" data-history-key="${attr(historyKey(item))}">
        <div>
          <div class="list-term" lang="${langCode(item.from)}">${html(item.query)}</div>
          <div class="list-meta">${name(item.from)} → ${name(opposite(item.from))} · ${html(formatDate(item.at))}</div>
        </div>
        <div class="actions">
          <button class="icon-btn" type="button" data-hopen="${index}" aria-label="${html(t('repeatSearch'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button>
          <button class="icon-btn danger" type="button" data-hremove="${index}" aria-label="${html(t('removeHistory'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5m4-5v5"/></svg></button>
        </div>
      </article>`).join('');

    if (options.focusKey) {
      const row = E.historyList.querySelector(`[data-history-key="${cssEscape(options.focusKey)}"]`);
      (row?.querySelector('[data-hremove]') || row)?.focus({ preventScroll: true });
    }
  }

  function historyClick(event) {
    const openButton = event.target.closest('[data-hopen]');
    const removeButton = event.target.closest('[data-hremove]');

    if (openButton) {
      const item = S.history[Number(openButton.dataset.hopen)];
      if (!item) return;
      setDirection(item.from, { clearSearchState: true });
      E.searchInput.value = item.query;
      E.clear.classList.add('visible');
      S.inputDirty = false;
      navigate('search');
      search();
    } else if (removeButton) {
      removeHistoryAt(Number(removeButton.dataset.hremove));
    }
  }

  function removeHistoryAt(index) {
    if (!Number.isInteger(index) || !S.history[index]) return;
    S.history.splice(index, 1);
    store(STORAGE.history, S.history);
    const next = S.history[index] || S.history[index - 1] || null;
    renderHistory({ focusKey: next ? historyKey(next) : null, focusEmpty: !next });
    announce(t('historyRemoved'));
  }

  function requestClearHistory() {
    if (!S.history.length) return;
    openModal({
      title: t('clearHistoryTitle'),
      body: t('clearHistoryBody', { count: nf.format(S.history.length) }),
      confirmText: t('clearHistoryConfirm'),
      danger: true,
      onConfirm: () => {
        S.history = [];
        store(STORAGE.history, []);
        renderHistory({ focusEmpty: true });
        toast(t('historyCleared'));
      }
    });
  }

  function historyKey(item) {
    return `${item.from}:${encodeURIComponent(norm(item.query, item.from, true))}`;
  }

  function navigate(target, options = {}) {
    if (!S.ready || !VIEWS.has(target)) return;

    // Search is the app's home view. Reapply the complete direction state whenever
    // it is opened so language codes and names can never become mixed after navigation.
    if (target === 'search') applyDirectionUI();
    if (target === S.view) {
      closeSuggestions();
      return;
    }

    const push = options.push !== false;
    S.scroll[S.view] = window.scrollY || document.documentElement.scrollTop || 0;
    S.view = target;
    closeSuggestions();

    E.views.forEach(view => view.classList.toggle('active', view.dataset.view === target));
    E.nav.forEach(button => {
      const active = button.dataset.target === target;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });

    if (target === 'favorites' && S.favoritesDirty) renderFavorites();
    if (target === 'history' && S.historyDirty) renderHistory();

    if (push) {
      const base = location.href.split('#')[0];
      try { history.pushState({ lexiconView: target }, '', `${base}#${target}`); }
      catch { try { history.pushState({ lexiconView: target }, ''); } catch { /* no-op */ } }
    }

    requestAnimationFrame(() => {
      const y = Number(S.scroll[target]) || 0;
      window.scrollTo(0, y);
    });
  }

  function applySettings() {
    applyInterfaceLanguage(S.settings.language, { persist: false, rerender: false });
    E.appearance.value = S.settings.appearance;
    E.fontSize.value = S.settings.font;
    applyFontSize();

    S.mediaDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (S.mediaDark) {
      const listener = () => {
        if (S.settings.appearance === 'system') applyTheme();
      };
      if (typeof S.mediaDark.addEventListener === 'function') S.mediaDark.addEventListener('change', listener);
      else if (typeof S.mediaDark.addListener === 'function') S.mediaDark.addListener(listener);
    }
    applyTheme();
  }

  function applyTheme() {
    const appearance = S.settings.appearance;
    const dark = appearance === 'dark' || (appearance === 'system' && Boolean(S.mediaDark?.matches));
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#181510' : '#f7f3ec';
  }

  function applyFontSize() {
    const font = ['15px', '16px', '18px'].includes(S.settings.font) ? S.settings.font : '16px';
    document.documentElement.style.fontSize = font;
  }

  function saveSettings() {
    store(STORAGE.settings, S.settings);
  }

  function showAudit() {
    const body = [
      t('auditEmbedded', { count: nf.format(D.rowCount) }),
      t('auditBoth', { count: nf.format(D.translatedCount) }),
      t('auditNoRusyn', { count: nf.format(D.missingRusynCount) }),
      t('auditNoEnglish', { count: nf.format(D.missingEnglishCount) }),
      t('auditSheets', { count: D.sheetNames.length }),
      t('auditMixed', { count: nf.format(D.rusynRowsWithNormalizedLookalikes || 0) }),
      '',
      t('auditNote')
    ].join('\n');

    openModal({ title: t('auditTitle'), body, confirmText: t('close'), hideCancel: true });
  }

  function openModal({ title, body, confirmText = t('ok'), danger = false, hideCancel = false, onConfirm = null }) {
    S.modalRestoreFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    S.modalAction = typeof onConfirm === 'function' ? onConfirm : null;
    E.modalTitle.textContent = title;
    E.modalBody.textContent = body;
    E.modalConfirm.textContent = confirmText;
    E.modalConfirm.classList.toggle('danger', danger);
    E.modalConfirm.classList.toggle('primary', !danger);
    E.modalCancel.hidden = hideCancel;
    E.modalBackdrop.hidden = false;
    E.appRoot.setAttribute('inert', '');
    E.appRoot.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => E.modalConfirm.focus());
  }

  function closeModal() {
    if (E.modalBackdrop.hidden) return;
    E.modalBackdrop.hidden = true;
    E.modalCancel.hidden = false;
    E.modalConfirm.classList.remove('danger');
    E.modalConfirm.classList.add('primary');
    document.body.style.overflow = '';
    if (S.ready) {
      E.appRoot.removeAttribute('inert');
      E.appRoot.removeAttribute('aria-hidden');
    }
    const restore = S.modalRestoreFocus;
    S.modalRestoreFocus = null;
    S.modalAction = null;
    if (restore && document.contains(restore)) restore.focus({ preventScroll: true });
  }

  function confirmModal() {
    const action = S.modalAction;
    closeModal();
    if (action) action();
  }

  function modalKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(E.modal.querySelectorAll('button:not([hidden]):not(:disabled), [href], input:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function revealContent() {
    requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
      try { E.content.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); }
      catch { E.content.scrollIntoView(true); }
    });
  }

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    if (!Number.isFinite(date.getTime())) return t('unknownDate');
    const locale = S.uiLanguage === 'rusyn' ? 'sr-Cyrl' : 'en-GB';
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  }

  function sanitizeFavorites(value) {
    if (!Array.isArray(value)) return [];
    const seen = new Set();
    const output = [];
    for (const raw of value) {
      if (!raw || typeof raw !== 'object') continue;
      const key = String(raw.key ?? '');
      if (!key || seen.has(key)) continue;
      const sheet = Number(raw.sheet);
      const row = Number(raw.row);
      if (!Number.isInteger(sheet) || sheet < 0 || !Number.isInteger(row) || row < 1) continue;
      seen.add(key);
      output.push({
        key,
        recordIndex: Number.isInteger(Number(raw.recordIndex)) ? Number(raw.recordIndex) : null,
        sheet,
        row,
        rusyn: String(raw.rusyn ?? ''),
        english: String(raw.english ?? ''),
        from: LANGS.has(raw.from) ? raw.from : (String(raw.rusyn ?? '').trim() ? 'rusyn' : 'english'),
        savedAt: Number.isFinite(Number(raw.savedAt)) ? Number(raw.savedAt) : Date.now()
      });
      if (output.length === 5000) break;
    }
    return output;
  }

  function sanitizeHistory(value) {
    if (!Array.isArray(value)) return [];
    const output = [];
    const seen = new Set();
    for (const item of value) {
      if (!item || typeof item !== 'object') continue;
      const query = String(item.query ?? '').trim();
      const from = LANGS.has(item.from) ? item.from : null;
      if (!query || !from) continue;
      const key = `${from}\u0000${norm(query, from, true)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      output.push({ query, from, at: Number.isFinite(Number(item.at)) ? Number(item.at) : Date.now() });
      if (output.length === 50) break;
    }
    return output;
  }

  function sanitizeSettings(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return { appearance: 'system', font: '16px', language: 'rusyn' };
    let appearance = ['system', 'light', 'dark'].includes(value.appearance) ? value.appearance : null;
    if (!appearance && typeof value.dark === 'boolean') appearance = value.dark ? 'dark' : 'light';
    const font = ['15px', '16px', '18px'].includes(value.font) ? value.font : '16px';
    const language = UI_LANGS.has(value.language) ? value.language : 'rusyn';
    return { appearance: appearance || 'system', font, language };
  }


  function persistSanitizedStorage() {
    try {
      localStorage.setItem(STORAGE.favorites, JSON.stringify(S.favorites));
      localStorage.setItem(STORAGE.history, JSON.stringify(S.history));
      localStorage.setItem(STORAGE.settings, JSON.stringify(S.settings));
    } catch {
      // Storage availability is reported only after the interface is ready and the user changes data.
    }
  }

  function loadAndMigrate(primaryKey, legacyKeys, fallback) {
    const current = load(primaryKey, undefined);
    if (current !== undefined) return current;
    for (const key of legacyKeys) {
      const legacy = load(key, undefined);
      if (legacy !== undefined) {
        try { localStorage.setItem(primaryKey, JSON.stringify(legacy)); } catch { /* unavailable */ }
        return legacy;
      }
    }
    return fallback;
  }

  function load(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function store(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      if (!S.storageWarned) {
        S.storageWarned = true;
        toast(t('storageWarning'));
      }
    }
  }

  function toast(message) {
    clearTimeout(S.toastTimer);
    E.toast.textContent = message;
    E.toast.classList.add('show');
    E.toast.setAttribute('aria-hidden', 'false');
    announce(message);
    S.toastTimer = setTimeout(() => {
      E.toast.classList.remove('show');
      E.toast.setAttribute('aria-hidden', 'true');
    }, 2200);
  }

  function announce(message) {
    E.status.textContent = '';
    requestAnimationFrame(() => { E.status.textContent = message; });
  }


  // Called by the native Android wrapper. Returns true when the web app handled Back.
  globalThis.lexiconHandleAndroidBack = function lexiconHandleAndroidBack() {
    if (!E.modalBackdrop || !E.modalBackdrop.hidden) {
      closeModal();
      return true;
    }
    if (E.suggestions && !E.suggestions.hidden && E.suggestions.childElementCount) {
      closeSuggestions();
      return true;
    }
    if (S.view && S.view !== 'search') {
      navigate('search', { push: false });
      try {
        const base = location.href.split('#')[0];
        history.replaceState({ lexiconView: 'search' }, '', `${base}#search`);
      } catch { /* no-op */ }
      return true;
    }
    return false;
  };

  function fatal(message) {
    setReady(false);
    E.loadingSpinner.classList.add('hidden');
    E.loading.setAttribute('role', 'alert');
    E.loadingTitle.textContent = t('unableOpen');
    E.loadingText.textContent = message;
    E.loadingProgress.innerHTML = `<button type="button" id="reloadApp" style="min-height:3rem;padding:.65rem 1rem;border:1px solid var(--line);border-radius:.75rem;color:var(--ink);background:var(--soft)">${html(t('reloadApp'))}</button>`;
    document.getElementById('reloadApp')?.addEventListener('click', () => location.reload());
  }

  function cssEscape(value) {
    if (globalThis.CSS && typeof CSS.escape === 'function') return CSS.escape(String(value));
    return String(value).replace(/(["\\])/g, '\\$1');
  }

  function html(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function attr(value) {
    return html(value).replace(/`/g, '&#096;');
  }
})();
