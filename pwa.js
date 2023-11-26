import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//firebaseの通知
const firebaseConfig = {
    apiKey: "AIzaSyCiYIh1FvmXaUteVJG7x7e5knuFakKt5ms",
    authDomain: "butsuribuhp-pwa.firebaseapp.com",
    projectId: "butsuribuhp-pwa",
    storageBucket: "butsuribuhp-pwa.appspot.com",
    messagingSenderId: "841487077695",
    appId: "1:841487077695:web:42229ff499ed5c91d0838a",
    measurementId: "G-G1N7SE550S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

const APIURL = "https://tkbutsuribu.vercel.app/api/push_token";

document.getElementById('requestpermission').onclick = function requestPermission() {
    console.log('Requesting permission...');
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)
        || (/Macintosh/.test(ua) && ((navigator.maxTouchPoints > 1) || ('ontouchend' in document)))
        || ((ua.indexOf('ipad') > -1 || ua.indexOf('Macintosh') > -1) && ('ontouchend' in document))) {
        if (!window.matchMedia("(display-mode: standalone)").matches) {
            document.getElementById('pop-up').checked=true;
        }
    }
    Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                document.getElementById('requestpermission').style.display = "none";
                getmytoken();
            } else {
                const ua = navigator.userAgent;
                if (/iPad|iPhone|iPod/.test(ua) || (/macintosh/.test(ua) && (navigator.maxTouchPoints > 1 || 'ontouchend' in document))
                    || (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document)) {
                    if (!window.matchMedia("(display-mode: standalone)").matches) {
                        document.getElementById('pop-up').checked=true;
                    } else {
                        document.getElementById('requestpermission').innerText = "通知がブロックされています"
                    }
                } else {
                    document.getElementById('requestpermission').innerText = "通知がブロックされています"
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

function getmytoken() {
    getToken(messaging, { vapidKey: 'BHYfDERRzVeOZOz32LOi6uZTYpzItJ5MVK8EswEeYkjLLOeX8thI1o7yPBuizxXqq_j_r1pauCAo3_YTGWxc7tQ' }).then((currentToken) => {
        if (currentToken) {
            console.log(currentToken);
            localStorage.messageToken = currentToken;
            document.getElementById('requestpermission').style.display = "none";
            fetch(APIURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "token": currentToken,
                    "true_topics": ['new-article'],
                    "false_topics": []
                })
            })
                .then((res) => { console.log(res); })
                .catch((error) => {
                    console.log(error);
                })
            // Send the token to your server and update the UI if necessary
            // ...
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            document.getElementById('requestpermission').style.display = "block";
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        document.getElementById('requestpermission').style.display = "block"
        // ...
    });
}
getmytoken();

//インストールボタン
const installforios = document.getElementById('InstallBtnForiOS');
function registerInstallAppEvent(elem) {
    //インストールバナー表示条件満足時のイベントを乗っ取る
    window.addEventListener('beforeinstallprompt', function (event) {
        console.log("beforeinstallprompt: ", event);
        event.preventDefault(); //バナー表示をキャンセル
        elem.promptEvent = event; //eventを保持しておく
        elem.style.display = "block"; //要素を表示する
        installforios.style.display = "none";
        return false;
    });
    //インストールダイアログの表示処理
    function installApp() {
        if (elem.promptEvent) {
            elem.promptEvent.prompt(); //ダイアログ表示
            elem.promptEvent.userChoice.then(function (choice) {
                elem.style.display = "none";
                elem.promptEvent = null; //一度しか使えないため後始末
            });//end then
        }
    }//end installApp
    //ダイアログ表示を行うイベントを追加
    elem.addEventListener("click", installApp);
}//end registerInstallAppEvent

registerInstallAppEvent(document.getElementById("InstallBtn"));
if(window.matchMedia("(display-mode: standalone)").matches){
    installforios.style.display="none";
}