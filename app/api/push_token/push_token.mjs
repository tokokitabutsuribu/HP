import { kv } from "@vercel/kv";
import { getMessaging } from "firebase-admin/messaging";
import { NextResponse } from "next/server";
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

async function push_token(req) {
	const request = await req.json();
	const errormessage = [];
	// try {
	//  if (request.method !== 'POST') {          //Next.js導入により不要
	//    return NextResponse.status(400).json({ "status": "bad_request" });
	//  }
	//kvに登録->supabaseに移行
	// const date = new Date();
	// const currentTime = date.toLocaleString();
	// await kv.set(request.body.token, currentTime, { ex: 5184000 });
	// errormessage.push("kv success");

	//console.log(`${request}\n\n${request.true_topics}`)
	//supabaseに登録
	await supabase
		.from('messaging-tokens')
		.upsert({ token: request.token, last_updated: new Date().toLocaleString(), true_topics: request.true_topics, false_topics: request.false_topics })
		.select()
		.then(({ statusText }) => {
			errormessage.push(`supabase ${statusText}`)
		})
		.catch((e) => {
			errormessage.push(`supabse ${e}`)
		});
	//トピックに登録
	for (const topic of request.true_topics) {
		await messaging.subscribeToTopic(request.token, topic)
			.then((res) => {
				// See the MessagingTopicManagementResponse reference documentation
				// for the contents of response.
				errormessage.push(`Successfully subscribed to topic:${JSON.stringify(res)}`);
			})
			.catch((error) => {
				errormessage.push(`subscribe:${error}`);
			});
	};

	//トピックに登録解除
	for (const topic of request.false_topics) {
		await messaging.unsubscribeFromTopic(request.token, topic)
			.then((res) => {
				// See the MessagingTopicManagementResponse reference documentation
				// for the contents of response.
				errormessage.push(`Successfully unsubscribed from topic:${JSON.stringify(res)}`);
			})
			.catch((error) => {
				errormessage.push(`unsubscribe:${error}`);
			});
	};
	try{
	NextResponse.json({ message: "Hello World" });
}catch(e){
	console.log(e);
	NextResponse.json({message:""},{status:200})
}
}
export { push_token };