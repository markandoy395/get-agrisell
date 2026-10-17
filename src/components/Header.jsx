export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="status-dot"></span>
        <span>
          AgriSell v1.0.1 for Android &mdash; Official direct APK for Buyers,
          Farmers &amp; Riders
        </span>
        <a className="announcement-link" href="#how-to-install">
          Install guide <span aria-hidden="true">&darr;</span>
        </a>
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
            <a href="#why-agrisell">Who it&rsquo;s for</a>
            <a href="#app-preview">App preview</a>
            <a href="#how-to-install">How to install</a>
          </div>
          <a className="button nav-download" href="#install-qr">
            <svg aria-hidden="true">
              <use href="assets/icons.svg#download" />
            </svg>
            Get the app
          </a>
        </nav>
      </header>
    </>
  );
}
