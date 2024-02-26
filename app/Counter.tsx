import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import React from "react";
import styles from "./Counter.module.css";
import crypto from "crypto";
import Cidcookie from "./cidcookie";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
export const dynamic = "force-dynamic";

export default async function counter() {
	let cidc = <></>;
	try {
		let id: string;
		if (cookies().has("counterID")) {
			id = cookies().get("counterID").value;
		} else {
			id = crypto.randomUUID();
			cidc = <Cidcookie cid={id} />;
		}
		console.log(`id:${id}`);
		const idindex = await kv.lpos("users", id);
		if (!Number.isInteger(idindex)) {
			await kv.lpush("users", id);
			await kv.incr("count");
			console.log("incr");
		}

		const ret: React.JSX.Element[] = [];
		const getcount: string = String(await kv.get("count"));
		console.log(`count:${getcount}`);
		let i = 0;
		console.log(`length:${getcount.length}`);
		for (i = 0; i < 6 - getcount.length; i++) {
			ret.push(<li className={styles.num}>0</li>);
		}
		for (i = 0; i < getcount.length; i++) {
			ret.push(<li className={styles.num}>{getcount[i]}</li>);
		}
		console.log(ret);
		return (
			<>
				<ul className={styles.accessCount} style={{ fontSize: "0px" }}>
					<li style={{ marginRight: "5px" }} className={styles.count1}>
						あなたは
					</li>
					{ret}
					<li style={{ marginLeft: "5px" }} className={styles.count2}>
						人目の来訪者です
					</li>
				</ul>
				{cidc}
			</>
		);
	} catch (e) {
		console.warn(`at counter.tsx\n\n${e}`);
		return (
			<>
				<li className={styles.num}>x</li>
				{cidc}
			</>
		);
	}
}
