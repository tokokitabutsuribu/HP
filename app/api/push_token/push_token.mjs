import { kv } from "@vercel/kv";
import { getMessaging } from "firebase-admin/messaging";
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { firebaseAdmin as app, /*messaging*/ } from '../firebaseAdmin.mjs';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

/*initializeApp({
  credential: admin.credential.cert({ // cert()の中に直接JSON形式で代入
    projectId: process.env.FSA_PROJECT_ID,
    privateKey: process.env.FSA_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FSA_CLIENT_EMAIL,
  }),
});*/
//const app = initializeApp();
const messaging = getMessaging();

async function push_token(request) {
  var errormessage = [];
  // try {
  //  if (request.method !== 'POST') {          //Next.js導入により不要
  //    return NextResponse.status(400).json({ "status": "bad_request" });
  //  }
  //kvに登録
  const date = new Date();
  const currentTime = date.toLocaleString();
  await kv.set(request.body.token, currentTime, { ex: 5184000 });
  errormessage.push("kv success");

  //トピックに登録
  for (var topic of request.body.true_topics) {
    await messaging.subscribeToTopic(request.body.token, topic)
      .then((res) => {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        errormessage.push('Successfully subscribed to topic:' + JSON.stringify(res));

      })
      .catch((error) => {
        errormessage.push("subscribe:" + error);
      });
  };

  //トピックに登録解除
  for (var topic of request.body.false_topics) {
    await messaging.unsubscribeFromTopic(request.body.token, topic)
      .then((res) => {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        errormessage.push('Successfully unsubscribed from topic:' + JSON.stringify(res));
      })
      .catch((error) => {
        errormessage.push("unsubscribe:" + error);
      });
  };

  return NextResponse.status(200).json({ "status": errormessage });
  /* } catch (error) {
     errormessage.push(error);
     return response.status(500).json({ "status": errormessage });
   // Handle errors
   }*/
}
export { push_token };