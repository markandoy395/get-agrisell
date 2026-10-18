# Get AgriSell

React + Vite Android download landing page based on the supplied preview. This folder is independent of the Flutter app and admin dashboard.

## Preview

Requires Node.js 20.19+ or 22.12+. Install dependencies and start Vite:

```powershell
cd C:\Users\ACER\Downloads\Agrisell\get-agrisell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. Use the development server instead of opening `index.html` directly.

## Production

Run `npm.cmd run build`, then deploy the contents of `dist/` to a static host. Run `npm.cmd run preview` to preview that build locally. The relative Vite base supports hosting in a subdirectory.

## Add the release APK

1. Put the signed release APK at `public/downloads/agrisell.apk`, or upload it to your download host.
2. Update `apkUrl` in `src/config.js` if you change the download location.
3. Verify the download on an Android device. Cross-origin URLs may be opened by the browser instead of honoring the download filename.

The existing release APK is included at `public/downloads/agrisell.apk`. The QR code encodes its absolute URL using the current website address, including any hosting subdirectory. Visitors can scan it with an Android camera or tap it on the same phone to download the installer, then approve installation in Android. Vite copies the APK into `dist/downloads/` during builds. Replace it with a newer signed release when needed. Setting `apkUrl` to `null` shows an installer availability message.

For scanning during local development, use a network-accessible website address rather than localhost. In production, serve the page and APK from a public HTTPS host.

## In-app update notifications

The Flutter app reads this website's `public/release.json` to offer newer Android
builds. Prepare the APK and matching metadata together from this folder:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tool\prepare_android_update.ps1 -Version 1.0.5 -BuildNumber 6 -Notes 'Improvements and bug fixes.'
npm.cmd run build
```

Use a higher build number for each release, then deploy the complete `dist/`
folder to GitHub Pages. The script preserves the existing download button and QR
URL and creates a versioned APK URL for update prompts. Users must manually
install the first APK containing the popup. See
`../agresellApp/docs/app_updates.md` for rollout and signing requirements.

To test the popup, install `downloads/agrisell-1.0.2-3.apk` first and open the
app while online. It should offer the published 1.0.4/build 5 update. Tap
**Update now**, open the downloaded APK, and approve **Update** in Android.
After upgrading, the popup should stop appearing. The normal website download
and QR code install the latest build directly.

Release builds use an isolated `.agrisell-release` folder beside the projects,
with integration_test omitted only from its temporary pubspec. This avoids
conflicts with IDE-generated files while preserving the app's integration tests.

## Source files

- `src/App.jsx`: React page composition.
- `src/components/`: page sections and availability dialog.
- `src/DownloadProvider.jsx`: shared React download action and dialog reference.
- `src/config.js`: APK download URL.
- `src/components/InstallQrCode.jsx`, `qr-code.css`: scannable installer QR code and responsive styles.
- `styles.css`, `hero.css`, `benefits.css`: shared styles and reference hero layout.
- `sections.css`: experience, installation guide, footer, and dialog styles.
- `responsive.css`, `mobile.css`: tablet, phone, and reduced-motion styles.
- `public/assets/app-preview.png`: supplied reference, clipped with CSS to display its app illustration. Product listings inside the illustration are reference imagery, not a live catalog.

Run `npm.cmd run format` to format source, or `npm.cmd run format:check` to check it. Application source files must stay at 200 lines or fewer.
