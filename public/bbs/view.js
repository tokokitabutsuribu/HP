

window.addEventListener("click", () => {
	const menu = Array.from(document.getElementsByClassName("menuon"));
	for (const i in menu) {
		menu[i].classList.remove("menuon");
	}
});
//let id = 1;
// const reload = () => {
// 	const elem = document.createElement("div");
// 	id++;
// 	elem.id = id;
// 	elem.dataset.uuid = (() => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)))();
// 	elem.innerHTML = `<div class="menubutton" onclick="openmenu(this,arguments[0])"><img src="menu.svg" width="16px" height="16px"
// 	alt="menu">
// <div class="bbsmenu">
// 	<button onclick="copyuuid(this,arguments[0])">グローバルIDをコピー</button>
// 	<button onclick="this.parentNode.parentNode.parentNode.remove()">非表示にする</button>
// </div>
// </div>
// <span class="num">1.</span>
// <span class="username">風吹けば名無し</span>
// <span class="postdate">2024/3/7 01:23:45</span>
// <span class="id">ID:qawsedrftgyhujikolp</span>
// <p class="content">
// <pre><a href="#1">>>1</a>スレ立て乙</pre>
// </p>`;
// 	document.getElementById("view").appendChild(elem);
// };
const copyuuid = (elem, event) => {
	console.log(elem.parentNode.parentNode.parentNode.classList);
	navigator.clipboard.writeText(elem.parentNode.parentNode.parentNode.dataset.uuid);
	elem.parentNode.parentNode.parentNode.classList.remove("menuon");
	event.stopPropagation();
};
const openmenu = (elem, event) => {
	const menu = Array.from(document.getElementsByClassName("menuon"));
	for (const i in menu) {
		menu[i].classList.remove("menuon");
	}
	elem.parentElement.classList.toggle("menuon");
	event.stopPropagation();
};
const replacemessage = (message = "") => {
	let m = "";
	m = message.replace(
		/[&'"]/g,
		(m) =>
			({
				"&": "&amp;",
				"'": "&apos;",
				'"': "&quot;",
			})[m],
	);
	m = m.replaceAll("<", "&lt;");
	m = m.replaceAll(/>>([0-9]+)/g, "<$1");
	m = m.replaceAll(">", "&gt;");
	m = m.replaceAll(/<([0-9]+)/g, '<a href="#$1">&gt;&gt;$1</a>');
	return m;
};
