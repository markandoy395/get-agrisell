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

The existing release APK is included at `public/downloads/agrisell.apk` and connected to every download button. Vite copies it into `dist/downloads/` during builds. Replace it with a newer signed release when needed. Setting `apkUrl` to `null` makes the buttons show the availability message instead.

## Files

- `src/App.jsx`: React page composition.
- `src/components/`: page sections and availability dialog.
- `src/DownloadProvider.jsx`: shared React download action and dialog reference.
- `src/config.js`: APK download URL.
- `styles.css`, `hero.css`, `benefits.css`: shared styles and reference hero layout.
- `sections.css`: experience, installation guide, footer, and dialog styles.
- `responsive.css`, `mobile.css`: tablet, phone, and reduced-motion styles.
- `public/assets/app-preview.png`: supplied reference, clipped with CSS to display its app illustration. Product listings inside the illustration are reference imagery, not a live catalog.

Run `npm.cmd run format` to format source, or `npm.cmd run format:check` to check it. Application source files must stay at 200 lines or fewer.
