import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "");
type request = { poster_name: string; comment: string; reply_token?: string; thread_id: number; poster_id?: string };
export async function POST(rawreq: NextRequest) {
	const req: request = await rawreq.json();
	if (req.comment.length > 300) return NextResponse.json({ message: "too long comment" }, { status: 400 });
	if (req.poster_name.length > 30) return NextResponse.json({ message: "too long comment" }, { status: 400 });
    req.poster_id='qawsedrftgyhujikolp'
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
