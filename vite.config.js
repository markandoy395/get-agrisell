import { cp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_APK_BASE_URL");
  const apkBaseUrl = (
    env.VITE_APK_BASE_URL?.trim() ||
    "https://markandoy395.github.io/get-agrisell/downloads"
  ).replace(/\/+$/, "");
  const host = new URL(apkBaseUrl);
  if (
    host.protocol !== "https:" ||
    host.username ||
    host.password ||
    host.search ||
    host.hash ||
    /\s/.test(apkBaseUrl)
  ) {
    throw new Error("VITE_APK_BASE_URL must be a public HTTPS directory URL.");
  }

  let config;
  return {
    base: "./",
    build: { copyPublicDir: false },
    define: {
      "import.meta.env.VITE_APK_BASE_URL": JSON.stringify(apkBaseUrl),
    },
    plugins: [
      react(),
      {
        name: "external-apk-downloads",
        apply: "build",
        configResolved(resolved) {
          config = resolved;
        },
        async closeBundle() {
          const output = path.resolve(config.root, config.build.outDir);
          await cp(config.publicDir, output, {
            recursive: true,
            filter: (source) => !source.toLowerCase().endsWith(".apk"),
          });
          const manifestPath = path.join(output, "release.json");
          const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
          if (manifest.apkUrl.startsWith("downloads/")) {
            manifest.apkUrl = `${apkBaseUrl}/${manifest.apkUrl.slice(10)}`;
          }
          await writeFile(
            manifestPath,
            `${JSON.stringify(manifest, null, 2)}\n`,
          );
          await writeFile(
            path.join(output, "_redirects"),
            `/downloads/* ${apkBaseUrl}/:splat 302\n`,
          );
        },
      },
    ],
  };
});
