export default function Experience() {
  return (
    <>
      {" "}
      <section
        className="experience section container"
        id="why-agrisell"
        aria-labelledby="experience-heading"
      >
        <p className="eyebrow">The AgriSell experience</p>
        <div className="section-heading">
          <h2 id="experience-heading">
            A little closer to
            <br />
            your local market.
          </h2>
          <p>
            Fresh finds, familiar farmers, and an easier way to discover what’s
            in season. All in one place.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature">
            <span className="feature-icon">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#leaf" />
              </svg>
            </span>
            <h3>Find your fresh favorites</h3>
            <p>
              Explore produce categories, from everyday vegetables and fruits to
              nuts and spices.
            </p>
          </article>
          <article className="feature">
            <span className="feature-icon">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#search" />
              </svg>
            </span>
            <h3>Discover more, easily</h3>
            <p>
              Browse the market and find fresh picks from local farmers in just
              a few taps.
            </p>
          </article>
          <article className="feature">
            <span className="feature-icon">
              <svg aria-hidden="true">
                <use href="assets/icons.svg#heart" />
              </svg>
            </span>
            <h3>Keep good finds close</h3>
            <p>
              Explore favorites and product deals as you plan your next local
              shop.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
