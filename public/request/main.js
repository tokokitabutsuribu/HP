try {
	const addbutton = document.getElementById("add");
	let num = 0;
	addbutton.onclick = () => {
		const music = document.createElement("div");
		music.classList.add('music')
		num++;
		music.id = num;
		music.innerHTML = `<lavel">曲名<input type="text" name="musicname" placeholder="例:荒城の月" /></lavel>
    <label>作曲者<input type="te/xt" name="artistname" placeholder="例:滝廉太郎" /></label>
	<button class="remove" type="button" onclick="document.getElementById('${num}').remove()">-</button>`;

		document.getElementById('musiclist').appendChild(music);
	};

	document.getElementById('submit').addEventListener('click', () => {
		try {
			const apiurl = 'https://devhook.app/api/endpoint/1KxPOyuuekVMybXy0EJASIyySjThM7Ug/hook'
			const musiclist = Array.from(document.getElementsByClassName('music')).map((musicelem) => {
				const ret = {}
				Array.from(musicelem.children).map((childelem) => {
					ret[childelem.getAttribute('name')] = childelem.value;
				})
				return ret;
			})
			fetch(apiurl, { method: 'POST', body: { musiclist: musiclist } })
				.then((data) => { })
				.catch((e) => {
					window.alert(e)
				})
		} catch (e) {
			window.alert(e);
		}
	})
} catch (e) {
	window.alert(e)
}