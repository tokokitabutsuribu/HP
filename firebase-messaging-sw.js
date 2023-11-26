importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCiYIh1FvmXaUteVJG7x7e5knuFakKt5ms",
    authDomain: "butsuribuhp-pwa.firebaseapp.com",
    projectId: "butsuribuhp-pwa",
    storageBucket: "butsuribuhp-pwa.appspot.com",
    messagingSenderId: "841487077695",
    appId: "1:841487077695:web:42229ff499ed5c91d0838a",
    measurementId: "G-G1N7SE550S"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();