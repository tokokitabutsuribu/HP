import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";
const supabase = createClient(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "");
type request = { poster_name: string; comment: string; reply_token?: string; thread_id: number; poster_id?: string };
export async function POST(rawreq: NextRequest) {
	const req: request = await rawreq.json();
	if (req.comment.length > 300) return NextResponse.json({ message: "too long comment" }, { status: 400 });
	if (req.poster_name.length > 30) return NextResponse.json({ message: "too long name" }, { status: 400 });
	// IPアドレスを取得
	// ipアドレスを取得
	let ip: string = rawreq.ip ?? rawreq.headers.get("x-real-ip") ?? "Unknown";

	// プロキシ経由の場合
	const forwardedFor = rawreq.headers.get("x-forwarded-for");

	// プロキシ経由の場合は、プロキシのIPアドレスを取得
	if (!ip && forwardedFor) {
		ip = forwardedFor.split(",").at(0) ?? "Unknown";
	}
	const hash = createHash("sha256")
		.update(ip)
		.update(process.env.BBS_SALT ?? "salt")
		.digest("hex");
	req.poster_id = `${hash.substring(0,4)}:${hash.substring(4,10)}`;
	let iserror = false;
	await supabase
		.from("comments")
		.insert(req)
		.then(
			(data) => {},
			(e) => {
				console.error(e);
				iserror = true;
			},
		);
	if (iserror) {
		return NextResponse.json({ message: "ERROR" }, { status: 500, statusText: "server error" });
	}
	return NextResponse.json({ message: "OK" }, { status: 200 });
}
