import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles.css";
import "../hero.css";
import "../benefits.css";
import "../sections.css";
import "../responsive.css";
import "../mobile.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
