export default function Experience() {
  return (
    <section
      className="experience section container"
      id="why-agrisell"
      aria-labelledby="experience-heading"
    >
      <p className="eyebrow">Built for the entire local supply chain</p>
      <div className="section-heading">
        <h2 id="experience-heading">
          One app, three roles.
          <br />
          Built to reduce farm waste.
        </h2>
        <p>
          Whether you grow crops, shop for your household, or deliver across
          town, AgriSell gives you dedicated tools inside a single Android app.
        </p>
      </div>
      <div className="feature-grid">
        <article className="feature role-card">
          <div className="role-card-header">
            <span className="feature-icon">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#cart" />
              </svg>
            </span>
            <span className="role-tag">For Buyers</span>
          </div>
          <h3>Shop fresh &amp; reserve harvests</h3>
          <p>
            Order directly from verified local farms at transparent farm-gate
            prices.
          </p>
          <ul className="role-list">
            <li>Browse vegetables, fruits, nuts, spices, and seasonal deals</li>
            <li>Reserve upcoming harvests (presell) or buy in-stock produce</li>
            <li>Pay via Cash on Delivery (COD) or verified GCash reference</li>
            <li>Chat directly with farmers and track your rider on the map</li>
          </ul>
        </article>
        <article className="feature role-card">
          <div className="role-card-header">
            <span className="feature-icon">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#leaf" />
              </svg>
            </span>
            <span className="role-tag">For Farmers</span>
          </div>
          <h3>Presell crops &amp; cut waste</h3>
          <p>
            Secure buyer demand before and after harvest so fresh produce never
            goes to waste.
          </p>
          <ul className="role-list">
            <li>Register your verified farm pin and list commodity lots</li>
            <li>Accept presell reservations, manage stock, and run sales</li>
            <li>Coordinate pickups with assigned riders and message buyers</li>
            <li>Track earnings and request payouts to your preferred method</li>
          </ul>
        </article>
        <article className="feature role-card">
          <div className="role-card-header">
            <span className="feature-icon">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#truck" />
              </svg>
            </span>
            <span className="role-tag">For Riders</span>
          </div>
          <h3>Deliver with live routing</h3>
          <p>
            Accept farm-to-buyer delivery batches matched to your vehicle’s load
            capacity.
          </p>
          <ul className="role-list">
            <li>Go online/offline and accept nearby farm pickup assignments</li>
            <li>
              Navigate with turn-by-turn road routing and digital waybills
            </li>
            <li>
              Upload delivery proof photos and record COD cash collections
            </li>
            <li>Built-in Safety &amp; SOS incident reporting and cash-out</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
