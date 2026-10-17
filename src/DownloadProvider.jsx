import { createContext, useContext, useRef } from "react";
import { apkUrl } from "./config.js";
import DownloadDialog from "./components/DownloadDialog.jsx";

const DownloadContext = createContext(null);

export function useDownload() {
  return useContext(DownloadContext);
}

export function DownloadProvider({ children }) {
  const dialogRef = useRef(null);

  function download() {
    if (!apkUrl) {
      dialogRef.current.showModal();
      return;
    }

    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "agrisell.apk";
    document.body.append(link);
    link.click();
    link.remove();
  }

  return (
    <DownloadContext.Provider value={download}>
      {children}
      <DownloadDialog dialogRef={dialogRef} />
    </DownloadContext.Provider>
  );
}
