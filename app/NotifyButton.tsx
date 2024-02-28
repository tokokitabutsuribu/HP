"use client";

import React, { useEffect } from "react";
import style from "./NotifyButton.module.css";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyCiYIh1FvmXaUteVJG7x7e5knuFakKt5ms",
	authDomain: "butsuribuhp-pwa.firebaseapp.com",
	projectId: "butsuribuhp-pwa",
	storageBucket: "butsuribuhp-pwa.appspot.com",
	messagingSenderId: "841487077695",
	appId: "1:841487077695:web:42229ff499ed5c91d0838a",
	measurementId: "G-G1N7SE550S",
};

export default function () {
	useEffect(() => {
		const app = initializeApp(firebaseConfig);
		const messaging = getMessaging(app);
		const APIURL = "/api/push_token";
		async function getmytoken() {
			let iserror = false;
			getToken(messaging, { vapidKey: "BHYfDERRzVeOZOz32LOi6uZTYpzItJ5MVK8EswEeYkjLLOeX8thI1o7yPBuizxXqq_j_r1pauCAo3_YTGWxc7tQ" })
				.then((currentToken) => {
					if (currentToken) {
						console.log(currentToken);
						localStorage.messageToken = currentToken;
						document.getElementById("requestpermission").style.display = "none";
						fetch(APIURL, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								token: currentToken,
								true_topics: ["all"],
								false_topics: [],
							}),
						})
							.then((res) => {
								console.log(res);
							})
							.catch((error) => {
								console.log(error);
								iserror = true;
							});
					} else {
						// Show permission request UI
						console.log("No registration token available. Request permission to generate one.");
						document.getElementById("requestpermission").style.display = "block";
						// ...
					}
				})
				.catch((err) => {
					console.log("An error occurred while retrieving token. ", err);
					document.getElementById("requestpermission").style.display = "block";
					// ...
				});
		}
		function registerInstallAppEvent(elem) {
			//インストールバナー表示条件満足時のイベントを乗っ取る
			window.addEventListener("beforeinstallprompt", (event) => {
				console.log("beforeinstallprompt: ", event);
				event.preventDefault(); //バナー表示をキャンセル
				elem.promptEvent = event; //eventを保持しておく
				elem.style.display = "block"; //要素を表示する
				return false;
			});
			//インストールダイアログの表示処理
			function installApp() {
				if (elem.promptEvent) {
					elem.promptEvent.prompt(); //ダイアログ表示
					elem.promptEvent.userChoice.then((choice) => {
						elem.style.display = "none";
						elem.promptEvent = null; //一度しか使えないため後始末
					}); //end then
				}
			} //end installApp
			//ダイアログ表示を行うイベントを追加
			elem.addEventListener("click", installApp);
		}

		const ua = navigator.userAgent;
		// document.getElementById("requestpermission").onclick = function requestPermission() {
		// 	console.log("Requesting permission...");

		// 	if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && (navigator.maxTouchPoints > 1 || "ontouchend" in document)) || ((ua.indexOf("ipad") > -1 || ua.indexOf("Macintosh") > -1) && "ontouchend" in document)) {
		// 		if (!window.matchMedia("(display-mode: standalone)").matches) {
		// 			(document.getElementById("pop-up") as HTMLInputElement).checked = true;
		// 		}
		// 	}
		// 	Notification.requestPermission()
		// 		.then((permission) => {
		// 			if (permission === "granted") {
		// 				console.log("Notification permission granted.");
		// 				document.getElementById("requestpermission").style.display = "none";
		// 				getmytoken();
		// 			} else {
		// 				const ua = navigator.userAgent;
		// 				if (/iPad|iPhone|iPod/.test(ua) || (/macintosh/.test(ua) && (navigator.maxTouchPoints > 1 || "ontouchend" in document)) || ua.indexOf("ipad") > -1 || (ua.indexOf("macintosh") > -1 && "ontouchend" in document)) {
		// 					if (!window.matchMedia("(display-mode: standalone)").matches) {
		// 						(document.getElementById("pop-up") as HTMLInputElement).checked = true;
		// 					} else {
		// 						document.getElementById("requestpermission").innerText = "通知がブロックされています";
		// 					}
		// 				} else {
		// 					document.getElementById("requestpermission").innerText = "通知がブロックされています";
		// 				}
		// 			}
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		// };

		// if (/iPad|iPhone|iPod/.test(ua) || (/macintosh/.test(ua) && (navigator.maxTouchPoints > 1 || "ontouchend" in document)) || ua.indexOf("ipad") > -1 || (ua.indexOf("macintosh") > -1 && "ontouchend" in document)) {
		// 	document.getElementById("InstallBtn").addEventListener("click", () => {
		// 		(document.getElementById("pop-up") as HTMLInputElement).checked = true;
		// 	});
		// } else {
		// 	registerInstallAppEvent(document.getElementById("InstallBtn"));
		// }
		// if (window.matchMedia("(display-mode: standalone)").matches) {
		// 	document.getElementById("InstallBtn").style.display = "none";
		// }
		// if (Object.prototype.hasOwnProperty.call(localStorage, "messagetoken")) {
		// 	getmytoken();
		// }
	}, []);

	return (
		<div id="buttons">
			<div id="InstallBtnForiOS" style={{ width: "fit-content" }}>
				<input type="checkbox" className={style.popUp} id="pop-up" />
				<div className={style.overlay}>
					<label className={style.close2} htmlFor="pop-up" />
					<div className={style.window}>
						<label className={style.close} htmlFor="pop-up">
							閉じる
						</label>
						<div className={style.popUpContent}>
							<h4>インストール方法</h4>
							<p>
								このサイトはPWAに対応しています。詳しくは
								<a href="https://tkbutsuribu.vercel.app/about.html#pwa">こちら</a>
							</p>
							<h5>iPhone、iPad、その他Apple製モバイル端末の場合</h5>
							<p>共有メニューから「ホーム画面に追加」を押してください</p>
							<h5>Mac、その他Apple製パソコンの場合</h5>
							<p>メニューから「PWAのインストール」とかいうやつを押してください。</p>
							<h5>アプリ内ブラウザの場合</h5>
							<p>標準ブラウザで開いてください</p>
							<h5>Android、Windowsの場合</h5>
							<p>メニューから「このアプリをインストール」みたいなのを押してください。一度閉じてもう一度このボタンを押すとポップアップが出るかもしれないのでそちらからもできます。</p>
							<h5>どれにも当てはまらない場合、上に書いてある通りにできない場合</h5>
							<p>
								以下の方法をお試しください
								<ul>
									<li>ブラウザを最新版にする</li>
									<li>別のブラウザでやってみる</li>
									<li>再読み込みしてみる</li>
									<li>既にインストールしてないか確かめる</li>
								</ul>
								それでも解決しない場合、お問い合わせください
							</p>
						</div>
					</div>
				</div>
			</div>
			<button id="InstallBtn" className={style.button} type="button">
				<img height="16px" width="16px" src="/images/installicon.svg" alt="install" style={{ maxHeight: "100%", width: "auto", margin: "0 5px 0 2px" }} />
				インストールする
			</button>
			<button id="requestpermission" className={style.button} type="button" value="通知" style={{ display: "block" }}>
				<img height="16px" width="16px" src="./images/notification.svg" alt="notification" style={{ maxHeight: "100%", width: "auto", margin: "0 5px 0 2px" }} />
				通知を許可する
			</button>
		</div>
	);
}
