try {
	const addbutton = document.getElementById("add");
	let num = 0;
	addbutton.onclick = () => {
		const music = document.createElement("div");
		music.classList.add('music')
		num++;
		music.id = num;
		music.innerHTML = `<label>曲名<input type="text" name="musicname" placeholder="例:荒城の月" required /></label>
    <label>作曲者<input type="text" name="artistname" placeholder="例:滝廉太郎" required /></label>
	<button class="remove" type="button" onclick="document.getElementById('${num}').remove()">-</button>`;

		document.getElementById('musiclist').appendChild(music);
	};
	const requestelem = document.getElementById('request')
	const sendingelem = document.getElementById('sending')
	const sendedelem = document.getElementById('sended')
	const failedelem = document.getElementById('failed')

	document.getElementById('submit').addEventListener('click', () => {
		try {
			const apiurl = '/api/request'//'https://devhook.app/api/endpoint/1KxPOyuuekVMybXy0EJASIyySjThM7Ug/hook'
			let iserror=false;
			const musiclist = Array.from(document.getElementsByClassName('music')).map((musicelem) => {
				const ret = {}
				Array.from(musicelem.children).map((childelem) => {
					if (!childelem.children[0]) return
					if(!childelem.children[0].value){
						iserror=true;
					}
					ret[childelem.children[0].getAttribute('name')] = childelem.children[0].value;
				})
				return ret;
			})
			if(iserror){
				window.alert('未記入の項目があります')
				return;
			}
			requestelem.style.display = 'none'
			sendingelem.style.display = 'block'
			let rawdata;
			fetch(apiurl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ musiclist: musiclist }) })
			.then((data)=>{rawdata=data;return data.json()})	
			.then((data) => {
					if (rawdata.ok) {
						document.getElementById('form').innerHTML = `<div id="musiclist">
					<div class="music">
						<label>曲名<input type="text" name="musicname" placeholder="例:荒城の月" required /></label>
						<label>作曲者<input type="text" name="artistname" placeholder="例:滝廉太郎" required /></label>
					</div>
				</div>`
						sendingelem.style.display = 'none'
						sendedelem.style.display = 'block'
					} else {
						sendingelem.style.display = 'none'
						failedelem.style.display = 'block'
						window.alert(`${rawdata.status}:${rawdata.statusText}\n${data.message}`)
					}
				})
				.catch((e) => {
					sendingelem.style.display = 'none'
					sendedelem.style.display = 'block'
					window.alert(e)
				})
		} catch (e) {
			window.alert(e);
		}
	})
} catch (e) {
	window.alert(e)
}