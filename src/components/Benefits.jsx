export default function Benefits() {
  return (
    <>
      {" "}
      <div className="benefit-strip" aria-label="AgriSell highlights">
        <div className="container benefits">
          <span>
            <svg aria-hidden="true">
              <use href="assets/icons.svg#leaf" />
            </svg>
            Fresh local produce
          </span>
          <span>
            <svg aria-hidden="true">
              <use href="assets/icons.svg#arrow" />
            </svg>
            Easy product discovery
          </span>
          <span>
            <svg aria-hidden="true">
              <use href="assets/icons.svg#heart" />
            </svg>
            Favorites and deals
          </span>
          <span>
            <svg aria-hidden="true">
              <use href="assets/icons.svg#phone" />
            </svg>
            Android direct download
          </span>
        </div>
      </div>
    </>
  );
}
