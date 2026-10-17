import { useDownload } from "../DownloadProvider.jsx";

export default function Hero() {
  const download = useDownload();
  return (
    <>
      {" "}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner container">
          <div className="hero-copy">
            <p className="eyebrow pill">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#leaf" />
              </svg>
              Your fresh market, in your pocket
            </p>
            <h1 id="hero-heading">
              From local farms.
              <br />
              <span>To your fingertips.</span>
            </h1>
            <p className="hero-description">
              Meet AgriSell — a simple way to browse fresh produce, discover
              local farmers, and shop with confidence.
              <br />
              Get the Android app directly from our website.
            </p>
            <div className="hero-actions">
              <button className="button primary-download" onClick={download}>
                <svg className="download-icon" aria-hidden="true">
                  <use href="assets/icons.svg#download" />
                </svg>
                <span>
                  <strong>Download for Android</strong>
                  <small>Direct APK download</small>
                </span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
              <a className="button secondary-button" href="#app-preview">
                Explore the app <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="download-note">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#phone" />
              </svg>{" "}
              Android APK <span aria-hidden="true">|</span> Direct install · No
              app store needed
            </p>
          </div>
          <figure
            className="hero-visual"
            id="app-preview"
            aria-label="AgriSell app preview"
          >
            <img
              src="assets/app-preview.png"
              alt="AgriSell mobile shopping screen showing produce categories, fresh vegetables, and sale products. Farm-fresh picks. Made for local shopping."
              width="1440"
              height="1030"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
