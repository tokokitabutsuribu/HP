//import { initializeApp } from 'firebase-admin/app';
const { createHmac } = await import('node:crypto');
const { timingSafeEqual } = await import('node:crypto');
import { getMessaging } from "firebase-admin/messaging";
import { NextResponse } from 'next/server';
import { firebaseAdmin as app, /*messaging*/ } from '../firebaseAdmin.mjs';
//firebaseのadminSDKの認証

/*const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG)
const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: atob(process.env.FIREBASE_PRIVATE_KEY),
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
};*/

//const app = initializeApp();
const messaging = getMessaging();
let fin = false;
async function article_update(request) {
  // if (request.method !== 'POST') {          //Next.js導入により不要
  //   return NextResponse.status(400).json({ "status": "error" });
  // }
  //送信元の認証
  //microCMSのwebhookのシークレット値
  let expectedSignature = createHmac('sha256', process.env.MICROCMS_SECRET_KEY);
  expectedSignature = expectedSignature.update(JSON.stringify(request.body));
  expectedSignature = expectedSignature.digest('hex');
  const signature = request.headers['x-microcms-signature'];
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    fin = true;
    console.log("not right access");
    return NextResponse.json({ status: "error" },{status:401});
  }

  const condition = '\'new-article\' in topics';

  // See documentation on defining a message payload.
  const sendmessage = {
    topic: "new-article",
    notification: {
      title: '新しい記事が投稿されました',
      body: request.body.contents.new.publishValue.title
    },
    webpush: {
      fcm_options: {
        link: `https://tkbutsuribu.vercel.app/articles/article.html?id=${request.body.id}`
      }
    }
  };
  if (!fin) {
    // Send a message to devices subscribed to the provided topic.
    await messaging.send(sendmessage)
      .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.log(error);
        fin = true;
        return NextResponse.json({ status: error },{status:500});
      });

  }
  if (!fin) return NextResponse.json({ status: "success" },{status:200});
}
export { article_update };