import { kv } from "@vercel/kv";

// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
function counter() {

	let ip: string = request.ip ?? request.headers.get('x-real-ip') ?? '';
	// プロキシ経由の場合、x-forwarded-forヘッダーからIPアドレスを取得
	if (!ip && forwardedFor) {
		const forwardedFor = request.headers.get('x-forwarded-for');
		ip = forwardedFor.split(',').at(0) ?? 'Unknown';
	}

	if (false) {

	} else {
		kv.incr('count')
	}
}

