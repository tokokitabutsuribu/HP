import { kv } from "@vercel/kv";
import { cookies } from 'next/headers'
import React from "react";

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
	const idindex = await kv.lpos('users', id)
	if (!idindex) {

	} else {
		await kv.incr('count')
	}

	let ret;
	const getcount: string = await kv.get('count') ?? '0'
	for (const num of getcount.split('')) {
		ret += <li className="num">{num}</li>;
	}
	getcount.sub
	return ret
}

