export default function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-brand-group">
        <a className="brand footer-brand" href="#" aria-label="AgriSell home">
          <img
            className="brand-logo"
            src="assets/agrisell-logo.png"
            alt="AgriSell"
          />
        </a>
        <p>
          Presell Produce, Waste Reduce &mdash; Connecting local farms, buyers,
          and riders.
        </p>
      </div>
      <div className="footer-links">
        <a href="#why-agrisell">Roles &amp; Features</a>
        <a href="#how-to-install">
          Installation guide <span aria-hidden="true">&uarr;</span>
        </a>
      </div>
    </footer>
  );
}
