import { useDownload } from "../DownloadProvider.jsx";

export default function Installation() {
  const download = useDownload();
  return (
    <>
      {" "}
      <section
        className="install-section"
        id="how-to-install"
        aria-labelledby="install-heading"
      >
        <div className="section container">
          <p className="eyebrow">From here to your home screen</p>
          <div className="section-heading">
            <h2 id="install-heading">
              A fresh start.
              <br />
              Three simple steps.
            </h2>
            <p>
              AgriSell installs directly on Android. Here’s how to get ready for
              your first visit to the market.
            </p>
          </div>
          <ol className="install-steps">
            <li>
              <span className="step-number">01</span>
              <h3>Download the APK</h3>
              <p>
                Tap “Download for Android” on your Android phone and save the
                AgriSell APK file.
              </p>
            </li>
            <li>
              <span className="step-number">02</span>
              <h3>Allow this installation</h3>
              <p>
                If Android asks, open Settings and allow your browser to install
                this app. Labels may vary by device.
              </p>
            </li>
            <li>
              <span className="step-number">03</span>
              <h3>Open your fresh market</h3>
              <p>
                Open the downloaded file, tap Install, then launch AgriSell. You
                can turn the browser’s installation permission off afterward.
              </p>
            </li>
          </ol>
          <div className="install-callout">
            <div>
              <h3>Your next fresh find starts here.</h3>
              <p>Get AgriSell directly on your Android phone.</p>
            </div>
            <button className="button primary-download" onClick={download}>
              <svg aria-hidden="true">
                <use href="assets/icons.svg#download" />
              </svg>
              Download for Android <span aria-hidden="true">↗</span>
            </button>
          </div>
          <p className="platform-note">
            For Android devices. This APK cannot be installed on an iPhone or
            iPad.
          </p>
        </div>
      </section>
    </>
  );
}
