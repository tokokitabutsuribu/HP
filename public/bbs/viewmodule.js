import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const supabase = createClient("https://ojizjelrnhsxpmjtavhi.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaXpqZWxybmhzeHBtanRhdmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzUwNjcsImV4cCI6MjAxNDgxMTA2N30.7ElMMPF5I89Ec3-nwnLczykjM96ZxMubfwgMLF4LJ1k");

const params = new URL(document.location).searchParams;

const reload = async () => {
	const threadID = params.get("thread");
	const mode = params.get('mode') ?? 'all';
	const loadtitle = supabase
		.from('threads')
		.select()
		.eq('id', threadID)
		.then((data) => {
			document.getElementById('title').innerText = data.data[0].title;
			document.head.title = data.data[0].title + ' -物理部掲示板	';
			document.querySelector('meta[name="description"]').content = data.data[0].title;
		});
	let loadcomments;
	if (mode === 'all') {
		loadcomments = supabase
			.from("comments")
			.select()
			.eq("thread_id", threadID)
			.order('posted_at', { ascending: true })
			.then((data) => { makeview(data.data); });
	} else if (mode === 'latest') {
		loadcomments = supabase
			.from("comments")
			.select()
			.eq("thread_id", threadID)
			.order('posted_at', { ascending: false })
			.limit(20)
			.then((data) => { makeview(data.data.reverse()); });
	}
	await Promise.all([loadtitle,loadcomments])
};

const makeview = (data) => {
	document.getElementById('view').innerHTML = '';
	for (const i in data) {
		data[i];
		const elem = document.createElement("div");
		elem.id = i;
		elem.dataset.uuid = data[i].comment_id;
		elem.innerHTML = `<div class="menubutton" onclick="openmenu(this,arguments[0])"><img src="menu.svg" width="16px" height="16px"
		alt="menu">
	<div class="bbsmenu">
		<button type="button" onclick="copyuuid(this,arguments[0])">グローバルIDをコピー</button>
		<button type="button" onclick="this.parentNode.parentNode.parentNode.remove()">非表示にする</button>
	</div>
</div>
						<span class="num">${parseInt(i) + 1}.</span>
						<span class="username">${data[i].poster_name}</span>
						<span class="postdate">${new Date(data[i].posted_at).toLocaleString('ja-jp')}</span>
						<span class="id">ID:${data[i].poster_id}</span>
						<pre class="content">${replacemessage(data[i].comment)}</pre>`;
		document.getElementById("view").appendChild(elem);
	}
};

const post = () => {
	const data = {
		poster_name: document.getElementById("name").value,
		comment: document.getElementById("message").value,
		thread_id: params.get("thread")
	};
	fetch('/api/bbs_post', {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	})
		.then(async (rawdata) => {
			if (rawdata.ok) {
				return rawdata.json();
			}
			throw new Error((await rawdata.json()).message);
		})
		.then((data) => {
			console.log(data);
			document.getElementById("message").value = ''
			setTimeout(reload, 500)
		})
		.catch((e) => {
			window.alert(e);
		});
};

document.getElementById('reload').addEventListener('click', reload);
document.getElementById('post').addEventListener('click', post);
window.addEventListener('DOMContentLoaded', async () => {
	await reload();
	document.body.style.display=''
});