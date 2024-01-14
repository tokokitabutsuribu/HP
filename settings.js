import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js";
const firebaseConfig = {
    apiKey: "AIzaSyCiYIh1FvmXaUteVJG7x7e5knuFakKt5ms",
    authDomain: "butsuribuhp-pwa.firebaseapp.com",
    projectId: "butsuribuhp-pwa",
    storageBucket: "butsuribuhp-pwa.appspot.com",
    messagingSenderId: "841487077695",
    appId: "1:841487077695:web:42229ff499ed5c91d0838a",
    measurementId: "G-G1N7SE550S"
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const APIURL = "/api/push_token";


const reset = () => {
    if (localStorage.hasOwnProperty('messagetoken')) {
        document.getElementById('requestpermission').style.display = 'none';
        document.getElementById('notification').style.display = 'block';
    }
};
reset();

async function getmytoken(mytrue_topics, myfalse_topics) {
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
                    "true_topics": mytrue_topics,
                    "false_topics": myfalse_topics
                })
            })
                .then((res) => { console.log(res); })
                .catch((error) => {
                    console.log(error);
                });
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
        document.getElementById('requestpermission').style.display = "block";
        // ...
    });
}

document.getElementById('requestpermission').onclick = function requestPermission() {
    console.log('Requesting permission...');
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)
        || (/Macintosh/.test(ua) && ((navigator.maxTouchPoints > 1) || ('ontouchend' in document)))
        || ((ua.indexOf('ipad') > -1 || ua.indexOf('Macintosh') > -1) && ('ontouchend' in document))) {
        if (!window.matchMedia("(display-mode: standalone)").matches) {
            document.getElementById('pop-up').checked = true;
        }
    }
    Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                document.getElementById('requestpermission').style.display = "none";
                reset();
                getmytoken(['all'], []);
            } else {
                const ua = navigator.userAgent;
                if (/iPad|iPhone|iPod/.test(ua) || (/macintosh/.test(ua) && (navigator.maxTouchPoints > 1 || 'ontouchend' in document))
                    || (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document)) {
                    if (!window.matchMedia("(display-mode: standalone)").matches) {
                        document.getElementById('pop-up').checked = true;
                    } else {
                        document.getElementById('requestpermission').innerText = "通知がブロックされています";
                    }
                } else {
                    document.getElementById('requestpermission').innerText = "通知がブロックされています";
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
};