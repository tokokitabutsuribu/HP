"use client";

import { useEffect } from "react";

export default function gtm() {
  console.log("gtm");
  try {
    useEffect(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("sw.js", { updateViaCache: "none" })
          .then((reg) => {
            console.log("SW registered.", reg);
          });
      }
      if (!/nogtm/.test(location.search)) {
        try {
          ((w, d, l, i) => {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            const f = d.getElementsByTagName("script")[0];
            const j = d.createElement("script");
            const dl = l !== "dataLayer" ? `&l=${l}` : "";
            j.async = true;
            j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
            f.parentNode.insertBefore(j, f);
          })(window, document, "dataLayer", "GTM-TVKWHB4T");
        } catch (e) {
          console.log(e);
          console.log("at gtm");
        }
      }
    });
  } catch (e) {
    console.log(e);
    console.log("at gtm");
  }
  return <></>;
}
