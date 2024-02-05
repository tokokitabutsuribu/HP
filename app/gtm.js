"use client";

import { useEffect } from "react";

export default function gtm() {
	useEffect(()=>{
		window["dataLayer"] = window["dataLayer"] || [];
		window["dataLayer"].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
		const f = document.getElementsByTagName("script")[0];
		const j = document.createElement("script");
		const dl = "dataLayer" !== "dataLayer" ? `&l=${"dataLayer"}` : "";
		j.async = true;
		j.src = `https://www.googletagmanager.com/gtm.js?id="GTM-TVKWHB4T"${dl}`;
		f.parentNode.insertBefore(j, f);
	});
}
