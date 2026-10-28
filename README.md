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

For Cloudflare Workers Assets, use build command `npm run build` and assets
directory `dist`. There is no checked-in Wrangler/deployment configuration;
keep these values in the existing Cloudflare deployment settings. The build
disables Vite's automatic public-directory copy and copies non-APK assets only.
Original APKs remain in `public/downloads/`. Do not deploy `public/` as assets.

## Social sharing preview

`index.html` includes Open Graph and large-image Twitter card metadata with the
absolute GitHub Pages URL. The preview is `public/assets/og-image.png` (1200 x 630).
Keep the canonical, page, and image URLs in sync if the hosting address changes.
To regenerate the branded image on Windows from the existing logo:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tool\create_og_image.ps1
```

Build and deploy `dist/` to publish both the metadata and image. Social platforms
may cache old previews until they fetch the page again.

## Add the release APK

The download buttons and QR code use a separately hosted HTTPS URL. By default,
the host is `https://markandoy395.github.io/get-agrisell/downloads`, where the
existing APK releases are published. No upload or environment change is needed
to keep using that host. Keep its existing APK files available when publishing
future GitHub Pages changes; `dist/` no longer contains installers.

To use Supabase Storage instead:

1. Create a public bucket such as `app-releases` in the existing Supabase project.
   Set both the project's and bucket's upload limits above the APK size (100 MB
   accommodates the current releases). Supabase Free caps files at 50 MB, so
   these approximately 85 MB installers require a plan with a higher limit or
   continued use of the existing GitHub host.
2. Upload the original files from `public/downloads/`, preserving every filename,
   including `agrisell.apk` and the versioned APKs. Use content type
   `application/vnd.android.package-archive`. Confirm the public URLs download
   without signing in before switching hosts.
3. Set the Cloudflare **build environment** variable `VITE_APK_BASE_URL` to the
   public directory URL, for example
   `https://PROJECT_REF.supabase.co/storage/v1/object/public/app-releases`.
   For local builds, copy `.env.example` to `.env.local` and change the value.
   This value is public: use no service-role key, API key, or expiring signed URL.
4. Rebuild and redeploy. Buttons and QR codes use `<base URL>/agrisell.apk`.
   The built `release.json` points to the same host's versioned installer.
   Cloudflare's generated `dist/_redirects` forwards old `/downloads/*` URLs to
   matching filenames on the selected host with HTTP 302.

Verify downloads and QR scanning on an Android device after deployment.
Cross-origin URLs may open in the browser rather than honoring the HTML
download filename. Vite preview does not implement Cloudflare's `_redirects`;
test legacy redirects on Cloudflare. No Supabase credentials are needed by
the website to download publicly hosted APKs.

## In-app update notifications

The Flutter app reads this website's `public/release.json` to offer newer Android
builds. Prepare the APK and matching metadata together from this folder:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tool\prepare_android_update.ps1 -Version 1.0.10 -BuildNumber 11 -Notes 'Improvements and bug fixes.'
npm.cmd run build
```

Use a higher build number for each release. Upload the new versioned APK and
replace `agrisell.apk` on the selected external host **before** deploying `dist/`
to Cloudflare. The preparation script keeps the originals in `public/downloads/`;
the build rewrites the relative manifest APK URL to the selected external host.
The download button and QR URL stay stable. Users must manually
install the first APK containing the popup. See
`../agresellApp/docs/app_updates.md` for rollout and signing requirements.

To test the popup, install `downloads/agrisell-1.0.2-3.apk` first and open the
app while online. It should offer the published 1.0.9/build 10 update. Tap
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
