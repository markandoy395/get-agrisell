import { useDownload } from "../DownloadProvider.jsx";

export default function Header() {
  const download = useDownload();
  return (
    <>
      {" "}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="status-dot"></span> AgriSell is available as a direct
        Android APK — not on Google Play yet <span aria-hidden="true">↗</span>
      </div>
      <header className="site-header">
        <nav className="navigation container" aria-label="Main navigation">
          <a className="brand" href="#" aria-label="AgriSell home">
            <img
              className="brand-logo"
              src="assets/agrisell-logo.png"
              alt="AgriSell"
            />
          </a>
          <div className="nav-links">
            <a href="#why-agrisell">Why AgriSell</a>
            <a href="#app-preview">App preview</a>
            <a href="#how-to-install">How to install</a>
          </div>
          <button className="button nav-download" onClick={download}>
            <svg aria-hidden="true">
              <use href="assets/icons.svg#download" />
            </svg>
            Get the APK
          </button>
        </nav>
      </header>
    </>
  );
}
