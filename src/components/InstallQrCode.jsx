import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { apkUrl } from "../config.js";

export default function InstallQrCode() {
  const [image, setImage] = useState(null);
  const [failed, setFailed] = useState(false);
  const installerUrl = apkUrl
    ? new URL(apkUrl, window.location.href).href
    : null;

  useEffect(() => {
    if (!installerUrl) return;
    let active = true;
    QRCode.toDataURL(installerUrl, {
      errorCorrectionLevel: "M",
      margin: 4,
      width: 220,
      color: { dark: "#153e2e", light: "#ffffff" },
    }).then(
      (result) => {
        if (active) setImage(result);
      },
      () => {
        if (active) setFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, [installerUrl]);

  return (
    <div className="install-qr" id="install-qr">
      <a
        className="install-qr-image"
        href={installerUrl || undefined}
        download="agrisell.apk"
        aria-label="Download the AgriSell Android installer"
      >
        {image ? (
          <img
            src={image}
            width="220"
            height="220"
            alt="Scan this QR code with your Android camera to download AgriSell"
          />
        ) : (
          <span role="status">
            {!installerUrl
              ? "Installer coming soon"
              : failed
                ? "Tap here to get the installer"
                : "Preparing QR code…"}
          </span>
        )}
      </a>
      <div className="install-qr-copy">
        <h2>Scan to get AgriSell</h2>
        <p>
          Open your Android camera, scan the code, and tap the link to download
          the app.
        </p>
        <p className="install-qr-hint">
          On your phone already? Tap the QR code. Open the downloaded APK and
          approve installation.
        </p>
        <a className="install-qr-guide" href="#how-to-install">
          How to install <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </div>
  );
}
