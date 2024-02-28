"use client";

import { useEffect } from "react";

export default function gtm() {
	console.log("gtm");
	try {
		useEffect(() => {
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('sw.js')
					.then((reg) => { console.log('SW registered.', reg); });
			}
			if (!/nogtm/.test(location.search)) {
				try {
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'gtm.start': new Date().getTime(), event: 'gtm.js'
					});
					const f = document.getElementsByTagName('script')[0];
					const j = document.createElement('script');
					j.async = true;
					j.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TVKWHB4T&l=dataLayer";
					f.parentNode.insertBefore(j, f);
				} catch (e) {
					console.log(e);
					console.log("at gtm");
				}
			}
		});
	}
	catch (e) {
		console.log(e);
		console.log("at gtm");
	}
	return <></>;
}
