export default function Installation() {
  return (
    <section
      className="install-section"
      id="how-to-install"
      aria-labelledby="install-heading"
    >
      <div className="section container">
        <p className="eyebrow">Step-by-step Android installation</p>
        <div className="section-heading">
          <h2 id="install-heading">
            How to install &amp; start
            <br />
            in under two minutes.
          </h2>
          <p>
            Because AgriSell is distributed directly as an official Android APK,
            follow these four clear steps on your phone to install and sign up.
          </p>
        </div>
        <ol className="install-steps">
          <li className="install-step-card">
            <div className="step-top">
              <span className="step-number">01</span>
              <span className="step-badge">Scan</span>
            </div>
            <h3>Scan the QR code</h3>
            <p>
              Scan the QR code with your Android camera and open the link. On
              your phone already? Tap the QR code. If your browser asks for
              confirmation, tap <strong>Download anyway</strong> and wait for
              the 85 MB file to finish.
            </p>
          </li>
          <li className="install-step-card">
            <div className="step-top">
              <span className="step-number">02</span>
              <span className="step-badge">Permission</span>
            </div>
            <h3>Allow browser install</h3>
            <p>
              Tap the completed download notification (or open your{" "}
              <strong>Downloads</strong> folder). If prompted, tap{" "}
              <strong>Settings &rarr; Allow from this source</strong>, then go
              back.
            </p>
          </li>
          <li className="install-step-card">
            <div className="step-top">
              <span className="step-number">03</span>
              <span className="step-badge">Install</span>
            </div>
            <h3>Tap Install &amp; Open</h3>
            <p>
              Tap <strong>Install</strong>. If Google Play Protect shows a
              prompt for a new direct APK, tap{" "}
              <strong>More details &rarr; Install anyway</strong>, then tap{" "}
              <strong>Open</strong>.
            </p>
          </li>
          <li className="install-step-card">
            <div className="step-top">
              <span className="step-number">04</span>
              <span className="step-badge">Get Started</span>
            </div>
            <h3>Pick your role &amp; verify</h3>
            <p>
              Select <strong>Buyer</strong>, <strong>Farmer</strong>, or{" "}
              <strong>Rider</strong>, enter your details, verify your email with
              the 6-digit OTP code, and pin your address on the map.
            </p>
          </li>
        </ol>
        <div className="install-tips" aria-label="Helpful installation tips">
          <div className="install-tip">
            <svg aria-hidden="true">
              <use href="assets/icons.svg#check" />
            </svg>
            <span>
              <strong>Enable Location / GPS:</strong> Required when pinning your
              delivery address, farm location, or live rider route.
            </span>
          </div>
          <div className="install-tip">
            <svg aria-hidden="true">
              <use href="assets/icons.svg#shield" />
            </svg>
            <span>
              <strong>Security tip:</strong> After installing AgriSell, you can
              turn your browser&rsquo;s &ldquo;Install unknown apps&rdquo;
              toggle back off.
            </span>
          </div>
        </div>
        <div className="install-callout">
          <div>
            <h3>Ready to join the local harvest marketplace?</h3>
            <p>
              Download the official AgriSell Android APK for Buyers, Farmers,
              and Riders.
            </p>
          </div>
          <a className="button primary-download" href="#install-qr">
            <svg aria-hidden="true">
              <use href="assets/icons.svg#download" />
            </svg>
            Scan to get AgriSell <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
        <p className="platform-note">
          Compatible with Android 8.0 and above. iOS (iPhone/iPad) is not
          supported by `.apk` packages.
        </p>
      </div>
    </section>
  );
}
