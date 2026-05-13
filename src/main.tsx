import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// GitHub Pages SPA redirect support: restore the path saved by 404.html
(() => {
  const redirect = sessionStorage.getItem("spa-redirect");
  if (redirect) {
    sessionStorage.removeItem("spa-redirect");
    if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState(null, "", redirect);
    }
  }
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);