try {
	const addbutton = document.getElementById("add");
	let num = 0;
	addbutton.onclick = () => {
		const music = document.createElement("div");
		music.classList.add('music');
		num++;
		music.id = num;
		music.innerHTML = `<label><span>曲名</span><input type="text" name="musicname" placeholder="必須項目です" required /></label>
    <label><span>作曲者</span><input type="text" name="artistname" placeholder="必須項目です" required /></label>
	<button class="remove" type="button" onclick="document.getElementById('${num}').remove()"><img src="./remove.svg" alt="delete" /></button>`;

		document.getElementById('musiclist').appendChild(music);
	};
	const requestelem = document.getElementById('request');
	const sendingelem = document.getElementById('loading-wrapper');
	const sendedelem = document.getElementById('sended');
	const failedelem = document.getElementById('failed');
	const errorpopup = document.getElementById('errorpopup');
	let jumpTopTimeoutId;
	document.getElementById('submit').addEventListener('click', () => {
		try {
			const apiurl = '/api/request';//'https://devhook.app/api/endpoint/1KxPOyuuekVMybXy0EJASIyySjThM7Ug/hook'
			let iserror = false;
			const musiclist = Array.from(document.getElementsByClassName('music')).map((musicelem) => {
				const ret = {};
				Array.from(musicelem.children).map((childelem) => {
					if (!childelem.children[1]) return;
					if (!childelem.children[1].value) {
						iserror = true;
					}
					ret[childelem.children[1].getAttribute('name')] = childelem.children[0].value;
				});
				return ret;
			});
			if (iserror) {
				errorpopup.style.visibility = 'visible';
				errorpopup.style.opacity = 1;
				return;
			}
			sendingelem.style.display = 'block';
			let rawdata;
			fetch(apiurl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ musiclist: musiclist }) })
				.then((data) => { rawdata = data; return data.json(); })
				.then((data) => {
					if (rawdata.ok) {
						document.getElementById('musiclist').innerHTML = `
					<div class="music">
						<label><span>曲名</span><input type="text" name="musicname" placeholder="必須項目です" required /></label>
						<label><span>作曲者</span><input type="text" name="artistname" placeholder="必須項目です" required /></label>
					</div>`;
						requestelem.style.display = 'none';
						sendingelem.style.display = 'none';
						sendedelem.style.display = 'block';
						let jump = 10;
						const jumpmessage = document.getElementById('jumpmessage');
						jumpTopTimeoutId = setInterval(() => {
							jump--;
							jumpmessage.innerHTML = `送信しました。${jump}秒後に自動的に<a href="/">トップページ</a>に遷移します。`;
							if (jump === 0) {
								jumpmessage.innerText = '遷移しています……';
								location.href = "/";
							}
						}, 1000);
					} else {
						sendingelem.style.display = 'none';
						failedelem.style.display = 'block';
						failedelem.innerText = `${rawdata.status}:${rawdata.statusText}\n${data.message}`;
						console.log(`${rawdata.status}:${rawdata.statusText}\n${data.message}`);
					}
				})
				.catch((e) => {
					sendingelem.style.display = 'none';
					failedelem.style.display = 'block';
					failedelem.innerText = e;
					console.log(e);
				});
		} catch (e) {
			window.alert(e);
		}
	});
	document.getElementById('reset').addEventListener('click', () => {
		clearInterval(jumpTopTimeoutId);
		sendedelem.style.display = 'none';
		requestelem.style.display = 'block';
	});
} catch (e) {
	window.alert(e);
}