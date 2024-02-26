"use client";

import React, { ReactComponentElement, ReactNode, useState } from "react";
import { useEffect } from "react";
import style from "./PwaToolBar.module.css";

export default function () {
	const [toolbar, settoolbar] = useState<ReactNode>();
//
	useEffect(() => {
		if (window.matchMedia("(display-mode: standalone)").matches) {
			settoolbar(
				<div className={style.pwatoolbar}>
					<button
						type="button"
						onClick={() => {
							history.back();
						}}
					>
						<img src="/images/left.svg" width="16px" alt="back" />
					</button>
					<button
						type="button"
						onClick={() => {
							location.reload();
						}}
					>
						<img src="/images/reload.svg" width="19px" alt="reload" />
					</button>
				</div>,
			);

			document.getElementById("wrapper").style.marginTop = "32px";
		} else {
			settoolbar(<div style={{ display: "none" }} />);
		}
	}, []);

	return <>{toolbar}</>;
}
