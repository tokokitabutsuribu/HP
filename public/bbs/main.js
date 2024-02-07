import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { doc, addDoc,setDoc, Timestamp } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCsxUaU9lhyD-deziXAzRKwcwxXoyyelDw",
  authDomain: "butsuribu-bbs.firebaseapp.com",
  projectId: "butsuribu-bbs",
  storageBucket: "butsuribu-bbs.appspot.com",
  messagingSenderId: "200898124912",
  appId: "1:200898124912:web:4cd9f1833bdc108fe568b5",
  measurementId: "G-S6JC2E0BSY"
});

// Create a ReCaptchaEnterpriseProvider instance using your reCAPTCHA Enterprise
// site key and pass it to initializeAppCheck().
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("6LfmoYooAAAAAABKff3JzyH5eX2s192zGlJILRXr"),
  isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
});
alert('load');
const db = getFirestore(app);

function post(){
  alert('posting');
  const data={
    name:document.getElementById('name').value,
    message:document.getElementById('message'),
    time:Timestamp.fromdate(new Date()),
    id:getID()
  };
 addDoc(doc(db,"bbs","mainboard","thread1"),data); 
 alert('posted');
}


function getID(){
  const fetchIpAddress = async() => {
    return await fetch('https://ipinfo.io?callback')
    .then(response => response.json())
    .then(json => json.ip);
  }
  return fetchIpAddress;
}