export default function Benefits() {
  return (
    <div className="benefit-strip" aria-label="AgriSell platform capabilities">
      <div className="container benefits">
        <span>
          <svg aria-hidden="true">
            <use href="assets/icons.svg#leaf" />
          </svg>
          Presell &amp; Harvest Reservations
        </span>
        <span>
          <svg aria-hidden="true">
            <use href="assets/icons.svg#shield" />
          </svg>
          Verified Local Farms
        </span>
        <span>
          <svg aria-hidden="true">
            <use href="assets/icons.svg#truck" />
          </svg>
          Live GPS Delivery Tracking
        </span>
        <span>
          <svg aria-hidden="true">
            <use href="assets/icons.svg#check" />
          </svg>
          Cash on Delivery &amp; GCash
        </span>
      </div>
    </div>
  );
}
