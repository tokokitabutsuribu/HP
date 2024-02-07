import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const supabase = createClient(
	"https://ojizjelrnhsxpmjtavhi.supabase.co/",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaXpqZWxybmhzeHBtanRhdmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzUwNjcsImV4cCI6MjAxNDgxMTA2N30.7ElMMPF5I89Ec3-nwnLczykjM96ZxMubfwgMLF4LJ1k",
);
try {
	const counterID = localStorage.getItem("counterID");
	let count;
	let iserror = false;
	const today = new Date().toLocaleDateString("sv-SE");
	let ifPlusCount = false;
	const insertHTML = (accesscount) => {
		//htmlに入れる
		let add = '<li style="margin-right:5px" id="count1">あなたは</li>';
		const countstr = accesscount.toString().padStart(Math.max(accesscount.toString().length, 6), 0);
		for (let i = 0; i < countstr.length; i++) {
			add += `<li class="num">${countstr.substr(i, 1)}</li>`;
		}
		add += '<li style="margin-left: 5px;" id="count2">人目の来訪者です</li>';
		document.querySelector("#access-counter").innerHTML = add;
	};
	const getCount = async () => {
		await supabase
			.from("pageviews")
			.select()
			.then((data) => {
				count = data.data[0].pageview;
			})
			.catch((error) => {
				count = 0;
				iserror = true;
			});
	};
	const todaycheck = async () => {
		//bool
		let a;
		if (counterID) {
			await supabase
				.from("pageviews_details")
				.select()
				.eq("id", counterID)
				.then((data) => {
					try {
						const lastaccess = data.data[0].date;
						console.log(lastaccess);
						console.log(today);
						// biome-ignore lint/suspicious/noDoubleEquals: <explanation>
						if (lastaccess == today) {
							console.log(true);
							a = true;
						} else {
							a = false;
						}
					} catch (error) {
						a = false;
					}
				});
		} else {
			a = false;
		}
		return a;
	};
	await getCount();

	const istodayaccessed = await todaycheck();
	if (istodayaccessed || iserror) {
		insertHTML(count);
		ifPlusCount = false;
	} else {
		insertHTML(count + 1);
		//カウンターを増やす
		const a = supabase
			.from("pageviews")
			.update({ pageview: count + 1 })
			.eq("id", 1);
		let b;
		if (counterID) {
			b = supabase.from("pageviews_details").upsert({ id: counterID, date: today });
		} else {
			b = supabase
				.from("pageviews_details")
				.insert({ date: today })
				.select()
				.then((data) => {
					localStorage.counterID = data.data[0].id;
				});
		}
		await Promise.all([a, b]);
	}
} catch (e) {
	console.log(e);
}
