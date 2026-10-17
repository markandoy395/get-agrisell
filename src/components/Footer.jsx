export default function Footer() {
  return (
    <>
      {" "}
      <footer className="container footer">
        <a className="brand footer-brand" href="#" aria-label="AgriSell home">
          <img
            className="brand-logo"
            src="assets/agrisell-logo.png"
            alt="AgriSell"
          />
        </a>
        <p>From local farms. To your fingertips.</p>
        <a href="#how-to-install">
          Installation guide <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </>
  );
}
