try {
	const addbutton = document.getElementById("add");
	let num = 0;
	addbutton.onclick = () => {
		const music = document.createElement("div");
		music.classList.add('music')
		num++;
		music.id = num;
		music.innerHTML = `<lavel>曲名<input type="text" name="musicname" placeholder="例:荒城の月" /></lavel>
    <label>作曲者<input type="text" name="artistname" placeholder="例:滝廉太郎" /></label>
	<button class="remove" type="button" onclick="document.getElementById('${num}').remove()">-</button>`;

		document.getElementById('musiclist').appendChild(music);
	};

	document.getElementById('submit').addEventListener('click', () => {
		try {
			const apiurl = '/api/request'//'https://devhook.app/api/endpoint/1KxPOyuuekVMybXy0EJASIyySjThM7Ug/hook'
			const musiclist = Array.from(document.getElementsByClassName('music')).map((musicelem) => {
				const ret = {}
				Array.from(musicelem.children).map((childelem) => {
					if(!childelem.children[0])return
					ret[childelem.children[0].getAttribute('name')] = childelem.children[0].value;
				})
				return ret;
			})
			fetch(apiurl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ musiclist: musiclist }) })
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