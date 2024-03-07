





function post() {
	const data = {
		name: document.getElementById('name').value,
		message: document.getElementById('message').value
	};
	alert(JSON.stringify(data));
}

window.addEventListener('click', () => {
	const menu = Array.from(document.getElementsByClassName('menuon'));
	for (const i in menu) {
		menu[i].classList.remove('menuon');
	}

});
const reload = () => {

}


const openmenu = () => {
	menubuttonlist[i].parentElement.classList.toggle('menuon');
	e.stopPropagation();
}
const replacemessage = (message = '') => {
	let m = '';
	m = message.replace(/[&'"]/g, m => ({
		"&": "&amp;",
		"'": "&apos;",
		'"': '&quot;'
	})[m]);
	m = m.replaceAll('<', '&lt;');
	m = m.replaceAll(/>>([0-9]+)/g, '<$1');
	m = m.replaceAll('>', '&gt;');
	m = m.replaceAll(/<([0-9]+)/g, '<a href="#$1">&gt;&gt;$1</a>');
	return m;
};