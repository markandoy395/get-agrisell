import { useDownload } from "../DownloadProvider.jsx";

export default function Hero() {
  const download = useDownload();
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="eyebrow pill">
            <svg aria-hidden="true">
              <use href="assets/icons.svg#leaf" />
            </svg>
            Presell Produce &middot; Waste Reduce
          </p>
          <h1 id="hero-heading">
            Local farms, buyers &amp; riders.
            <br />
            <span>Connected in one app.</span>
          </h1>
          <p className="hero-description">
            AgriSell bridges the harvest gap&mdash;helping farmers presell crops
            and reduce post-harvest waste, giving buyers direct access to
            farm-fresh produce, and equipping riders with live route and waybill
            tools.
          </p>
          <div className="role-badges" aria-label="Supported app roles">
            <span className="role-badge">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#cart" />
              </svg>
              <strong>Buyer</strong> &middot; Shop &amp; reserve produce
            </span>
            <span className="role-badge">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#leaf" />
              </svg>
              <strong>Farmer</strong> &middot; List &amp; presell harvests
            </span>
            <span className="role-badge">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#truck" />
              </svg>
              <strong>Rider</strong> &middot; Fulfill local deliveries
            </span>
          </div>
          <div className="hero-actions">
            <button className="button primary-download" onClick={download}>
              <svg className="download-icon" aria-hidden="true">
                <use href="assets/icons.svg#download" />
              </svg>
              <span>
                <strong>Download for Android</strong>
                <small>Direct APK &middot; v1.0.1 (33 MB)</small>
              </span>
              <span className="arrow" aria-hidden="true">
                &darr;
              </span>
            </button>
            <a className="button secondary-button" href="#how-to-install">
              How to install <span aria-hidden="true">&darr;</span>
            </a>
          </div>
          <p className="download-note">
            <svg aria-hidden="true">
              <use href="assets/icons.svg#shield" />
            </svg>
            Signed Android release <span>&middot;</span> Android 8.0+{" "}
            <span>&middot;</span> No play store account required
          </p>
        </div>
        <figure
          className="hero-visual"
          id="app-preview"
          aria-label="AgriSell app preview"
        >
          <img
            src="assets/app-preview.png"
            alt="AgriSell mobile marketplace screen showing produce categories, fresh vegetables, farm deals, and local shopping."
            width="1440"
            height="1030"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
