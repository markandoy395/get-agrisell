export default function DownloadDialog({ dialogRef }) {
  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) dialogRef.current.close();
  }

  return (
    <dialog
      ref={dialogRef}
      id="download-dialog"
      aria-labelledby="download-title"
      aria-describedby="download-description"
      onClick={closeOnBackdrop}
    >
      <form method="dialog">
        <button className="dialog-close" aria-label="Close download message">
          ×
        </button>
        <span className="feature-icon">
          <svg aria-hidden="true">
            <use href="assets/icons.svg#phone" />
          </svg>
        </span>
        <h2 id="download-title">The APK is on its way</h2>
        <p id="download-description">
          An Android download hasn’t been added yet. Please check back for the
          AgriSell APK.
        </p>
        <button className="button primary-download dialog-done">Got it</button>
      </form>
    </dialog>
  );
}
