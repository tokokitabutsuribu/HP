import { kv } from "@vercel/kv";
import { initializeApp } from 'firebase-admin/app';
import { getMessaging } from "firebase-admin/messaging";

/*initializeApp({
  credential: admin.credential.cert({ // cert()の中に直接JSON形式で代入
    projectId: process.env.FSA_PROJECT_ID,
    privateKey: process.env.FSA_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FSA_CLIENT_EMAIL,
  }),
});*/
const app = initializeApp();
const messaging = getMessaging();

export default async function handler(request, response) {
  var errormessage = []
  // try {
  if (request.method !== 'POST') {
    return response.status(400).json({ "status": "bad_request" });
  }
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

  return response.status(200).json({ "status": errormessage });
  /* } catch (error) {
     errormessage.push(error);
     return response.status(500).json({ "status": errormessage });
   // Handle errors
   }*/
}