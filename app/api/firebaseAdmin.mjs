import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
const firebaseAdmin = getApps().length === 0 ? initializeApp({
  credential: cert(JSON.parse(atob(process.env.FIREBASE_CONFIG_BASE64))),
}) : getApp();
const messaging = getMessaging();
export { firebaseAdmin };
export { messaging };