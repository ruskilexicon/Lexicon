# Lexicon — Android Studio project

This is a small native Android wrapper around the completed offline HTML/JavaScript dictionary.
The interface is rendered in one Android WebView, while all dictionary data is stored separately in:

    app/src/main/assets/dictionary.json

`dictionary.json` contains all 267,792 source rows in the same compact, lossless packed JSON format used by the web app. The dictionary is not embedded in Java or JavaScript.

## Open and run

1. Extract this ZIP.
2. Open the `LexiconAndroidStudio` folder in Android Studio.
3. Allow Gradle Sync to finish. The first sync downloads Gradle and AndroidX dependencies.
4. Select an emulator or connected Android phone and click Run.

The project uses Java 17, compile/target SDK 36, minimum SDK 23, Android Gradle Plugin 9.3.0 and Gradle 9.5.0.

## Build a test APK

In Android Studio use:

    Build > Build Bundle(s) / APK(s) > Build APK(s)

Debug output:

    app/build/outputs/apk/debug/app-debug.apk

## Build for Google Play

Use:

    Build > Generate Signed Bundle / APK > Android App Bundle

Choose **Android App Bundle (AAB)**, create or select your private signing key, and build the release bundle.

Before the first Play Store upload, decide whether the application ID below is the permanent ID you want:

    com.lexicon.rusynenglish

It is set in `app/build.gradle`. Change it before first publication if necessary. Also increase `versionCode` for every update and update `versionName` when appropriate.

## Main files

- `app/src/main/java/com/lexicon/rusynenglish/MainActivity.java` — secure local WebView wrapper and Android Back handling.
- `app/src/main/assets/index.html` — interface.
- `app/src/main/assets/app.js` — dictionary/search/application behavior.
- `app/src/main/assets/data-worker.js` — background JSON decoding and validation.
- `app/src/main/assets/dictionary.json` — complete separate dictionary payload.
- `app/src/main/assets/data-audit.json` — source-row audit metadata.
- `app/src/main/assets/assets/` — interface flags and the A/B book logo.
- `play-store-assets/icon-512.png` — 512 × 512 launcher/store icon prepared from the supplied image.

## Offline behavior

The manifest does not request Internet permission. Local files are served through Android's `WebViewAssetLoader` under the internal `appassets.androidplatform.net` origin. Navigation away from that internal origin is blocked.

Favorites, recent searches, interface language, theme and text size are stored in WebView local storage on the device.

## Updating the dictionary

Keep the file name `dictionary.json`. A replacement must preserve the packed schema expected by `data-worker.js` and `app.js`. The app validates the row count, offsets, worksheet references, source-row identifiers and search order before enabling the interface.

## App icon

Launcher icons are under `app/src/main/res/mipmap-*`. The source image and a 512 × 512 version are in `play-store-assets`.

## Note about local build verification

The project structure, XML, Java source, JavaScript syntax, JSON parsing, packed dictionary counts and ZIP integrity were checked while creating this package. An Android SDK/emulator was not available in the creation environment, so the final Gradle Android build and installation must be completed in Android Studio.
