"use client";

import React, { ReactComponentElement, ReactNode, useState } from "react";
import { useEffect } from "react";

export default function () {
	const [toolbar, settoolbar] = useState<ReactNode>();
	//
	useEffect(() => {
		if (window.matchMedia("(display-mode: standalone)").matches) {
			settoolbar(
				<div style={{ position: "fixed", top: 0, left: 0, width: "100vw", backgroundColor: "#1cf8fd", height: "32px", alignItems: "center", display: "flex", zIndex: 3 }}>
					<button className="hovergray"
						type="button"
						onClick={() => {
							history.back();
						}}
						style={{ width: "32px", height: "32px", borderRadius: "9999px", borderWidth: 0, backgroundColor: "#fff0", marginLeft: "10px" }}
					>
						<img src="/images/left.svg" width="16px" height="16px" alt="back" />
					</button>
					<button className="hovergray"
						style={{ width: "32px", height: "32px", borderRadius: "9999px", borderWidth: 0, backgroundColor: "#fff0", marginLeft: "10px",}}
						type="button"
						onClick={() => {
							location.reload();
						}}
					>
						<img src="/images/reload.svg" width="19px" height="19px" alt="reload" />
					</button>
				</div>,
			);
			try {
				document.getElementById("wrapper").style.marginTop = "32px";
			} catch (e) {}
		} else {
			settoolbar(<div style={{ display: "none" }} />);
		}
	}, []);

	return <>{toolbar}</>;
}
