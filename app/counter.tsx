import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import React from "react";
import style from './stylesheet.module.css'

// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
export default async function counter() {
	const id = cookies().get("counterID").value;
	const idindex = await kv.lpos("users", id);
	if (!idindex) {
		await kv.lpush("users", id);
	} else {
		await kv.incr("count");
	}

	let ret: React.JSX.Element[];
	const getcount: string = await kv.get("count");
	for (const num of getcount.split("")) {
		ret.push(<li className={style.number}>{num}</li>);
	}

	return <>{ret}</>;
}
