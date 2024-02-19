const addbutton = document.getElementById("add");
let num=0;
addbutton.onclick = () => {
	const music = document.createElement("div");
	music.classList.add('music')
	num++;
	music.id=num;
	music.innerHTML = `<lavel">曲名<input type="text" name="musicname" placeholder="例:荒城の月" /></lavel>
    <label>作曲者<input type="te/xt" name="artistname" placeholder="例:滝廉太郎" /></label>
	<button class="remove" type="button" onclick="document.getElementById('${num}').remove()">-</button>`;

	document.getElementById('musiclist').appendChild(music);
};
