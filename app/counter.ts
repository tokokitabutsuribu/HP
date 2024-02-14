import { kv } from "@vercel/kv";
import { cookies } from 'next/headers'

// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
export default async function counter() {

	const cookieStore = cookies();
	const cookie = cookieStore
		.getAll()
		.map((cookie) => `${cookie.name}=${cookie.value}`)
		.join(";");
	let id = cookies().get('counterID')?.value
	const idindex = await kv.lpos('users',id)
	if (!idindex) {

	} else {
		kv.incr('count')
	}
}

