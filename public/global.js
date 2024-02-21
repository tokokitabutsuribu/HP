//<script src="/global.js" id="globaljs"></script>

if (!/tokokitabutsuri.vercel.app/.test(location.href)) {
	try {
		const script = document.createElement("script");
		script.dataset.projectId = "cy4LiIr4fnVnIeHpS860b4iP9OxJkgyFFyYe6grP";
		script.dataset.isProductionEnvironment = false;
		script.src = "https://snippet.meticulous.ai/v1/meticulous.js";
		document.getElementById("globaljs").after(script);
	} catch (e) {
		console.log(e);
	}
}

window.addEventListener("DOMContentLoaded", () => {
	try {
		document.getElementById("header").innerHTML = `<div id="wrapper" style="height: 88px">
<nav id="global-navi">
    <div id="pwatoolbar" style="display: none;">
        <button onclick="history.back()"><img src="/images/left.svg" width="16px"></button>
        <button onclick="location.reload()"><img src="/images/reload.svg" width="19px"></button>
    </div>
    <span style="white-space: nowrap;"><span class="toplink"><a href="https://tkbutsuribu.vercel.app/"><img src="/icon-48x48.png" width="48"
                    height="48" style="margin-top: 5px;" alt="トップページ"><span>所沢北高校物理部</span></a><a href="/settings.html"
                id="settings"><img src="/images/settings.svg" height="32" alt="設定"></a></span></span>
    <ul class="menu">
        <li>
            <span style="white-space: nowrap;"><a href="https://tkbutsuribu.vercel.app/about.html">概要</a></span>
        </li>
        <li>
            <span style="white-space: nowrap;"><a href="https://tkbutsuribu.vercel.app/articles/index.html">記事</a></span>
        </li>
        <li>
            <span style="white-space: nowrap;"><a href="https://tkbutsuribu.vercel.app/games/index.html">スタジオ</a></span>
        </li>
        <li>
            <span style="white-space: nowrap;"><a href="https://tkbutsuribu.vercel.app/bbs/404.html">掲示板(未完成)</a></span>
        </li>
    </ul>
</nav>
</div>
<style>
#pwatoolbar {
    background-color: #1cf8fd;
    height: 32px;
    align-items: center;
    display: flex;
}

#pwatoolbar button {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    border-width: 0;
    background-color: #fff0;
    margin-left: 10px;
}

#pwatoolbar button:hover {
    background-color: #0007;
}

#global-navi {
    display: block;
    height: fit-content;
    background: #333;
    position: fixed;
    top: 0;
    right: 0px;
    width: 100%;
    align-items: flex-end;
    flex-wrap: wrap;
    z-index: 1000;
}

#wrapper nav ul li {
    display: block;
    font-size: 16px;
    padding: 0px;
    margin: 0px;
    width: auto;
    justify-content: space-evenly;

}

#wrapper nav ul li a {
    color: #ddd;
    text-decoration: none;

}

.toplink {
    display: flex;
    margin-left: 20px;
    width: 300px;
    color: #ddd;
    text-decoration: none;
    font-size: 32px;
    text-align: left;
    align-items: center;
}

.toplink a {
    display: flex;
    text-align: end;
    align-items: center;
    text-decoration: none;
    color: white;
}

.toplink img {
    padding: auto;
}

.menu {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 0px;
    padding: 0px;
}

.main {
    flex: auto;
}
#settings{
    position: absolute;
    right:10px
}
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    font-family: monospace, sans-serif !important;
}
</style>`;
		document.getElementById("footer").innerHTML = `<footer>
<div class="links">
    <div class="twitter">
        <a style="text-decoration: none;"
            href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club"
            target="_blank" rel="noopener norefereer"><span>
                <span style="white-space: nowrap;">𝕏 フォローする</span>
            </span></a>
    </div>
    <div class="youtube">
        <a href="https://www.youtube.com/channel/UCMx0SnqChPhp4rapoqgan3g?sub_confirmation=1" target="_blank"
            rel="noopener norefereer"><span>
                <span style="white-space: nowrap;">公式YouTube</span>
            </span></a>
    </div>
    <div class="tokokitahp">
        <a href="https://tokokita-h.spec.ed.jp/" target="_blank" rel="noopener norefereer">
            <span style="white-space: nowrap;">所北HP</span>
        </a>
    </div>
    <div class="github">
        <a href="https://github.com/tokokitabutsuri/HP" target="_blank" rel="noopener norefereer">
            <span style="white-space: nowrap;"><img height="20px" src="/images/github-mark-white.svg" style="margin-right: 3px;" alt=""></img><img
                    height="22px" src="/images/github-logo-white.svg" alt="Github"></img></span>
        </a>
    </div>
</div>
<div class="footermap">
    <a href="https://tkbutsuribu.vercel.app/index.html">トップページ</a><br>
    <a href="https://tkbutsuribu.vercel.app/about.html">概要</a><br>
    <a href="https://tkbutsuribu.vercel.app/articles/index.html">記事一覧</a><br>
    <a href="https://tkbutsuribu.vercel.app/games/index.html">ゲームスタジオ</a><br>
    <a href="https://tkbutsuribu.vercel.app/bbs/404.html">掲示板(未完成)</a>
</div>
</div>
</footer>
<style>
.links {
    display: flex;
    flex-direction: column;
    width: -moz-fit-content;
    width: fit-content;
    gap: 6px;
    justify-content: left;
    text-align: left;
    margin-bottom: 10px;
}

.links div {
    width: 128px;
    height: 30px;
    border-radius: 9999px;
    display: grid;
    place-items: center;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
}

.tokokitahp {
    background-color: aquamarine;
    color: black;
}

.tokokitahp a {
    width: 100%;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

footer {
    width: 100%;
    background-color: hsl(0, 0%, 30%);
    color: white;
    padding: 15px;
}

.footermap a {
    display: inline-block;
    margin: 3px 0px;
    color: white;
}

.main {
    flex: auto;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    font-family: monospace, sans-serif !important;
}

.youtube {
    border-radius: 9999px;
    background-color: red;
}

.youtube a {
    width: 100%;
    text-decoration: none;
    color: white;
}

.twitter {
    background-color: black;
}

.twitter a {
    width: 100%;
    vertical-align: middle;
    color: white;
    text-align: center;
    width: 100%;
    line-height: 100%;
}

.github {
    background-color: black;
}

.github a {
    column-gap: 2px;
    margin-top: 3px;
}
</style>`;
		if (window.matchMedia("(display-mode: standalone)").matches) {
			document.getElementById("pwatoolbar").style.display = "block";
		}
	} catch (e) {
		console.log(e);
	}
});
