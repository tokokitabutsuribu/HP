//<script src="/global.js" id="globaljs"></script>

//meticulous
//本番環境では実行しない
if (!/tkbutsuribu.vercel.app/.test(location.href) && !/notest/.test(location.search)&& !/nogtm/.test(location.search)) {
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

//Google tag manager
const GTM = async () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'gtm.start': new Date().getTime(), event: 'gtm.js'
    });
    const f = document.getElementsByTagName('script')[0];
    const j = document.createElement('script');
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TVKWHB4T&l=dataLayer";
    f.parentNode.insertBefore(j, f);
};


const addheader = async () => {
    document.getElementById('header').innerHTML = `<div id="wrapper" style="height: 88px">
<nav id="global-navi">
<div id="pwatoolbar" style="display: none;">
    <button onclick="history.back()"><img src="/images/left.svg" width="16px"></button>
    <button onclick="location.reload()"><img src="/images/reload.svg" width="19px"></button>
</div>
<span style="white-space: nowrap;"><span class="toplink"><a href="https://tkbutsuribu.vercel.app/"><img src="/icon-72x72.png" width="48"
                height="48" style="margin-top: 5px;" alt="トップページ"><span>所沢北高校物理部</span></a><a href="/settings.html"
            id="settings"><img src="/images/settings.svg" height="32px" width="32px" alt="設定"></a></span></span>
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
<noscript>JavaScript切らないで</noscript>`;
};
const addfooter = async () => {
    document.getElementById("footer").innerHTML = `<footer>
<div class="links">
<div class="twitter">
    <a style="text-decoration: none;"
        href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club"
        target="_blank" rel="noopener norefereer"><span>
            <span style="white-space: nowrap;">公式𝕏</span>
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
        <span style="white-space: nowrap;"><img height="20px" width="20px" src="/images/github-mark-white.svg" style="margin-right: 3px;" alt=""></img><img
                height="22px" width="54px" src="/images/github-logo-white.svg" alt="Github"></img></span>
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
</footer>`;
};
const addpwatoolbar = async () => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
        document.getElementById("pwatoolbar").style.display = "block";
    }
};
const addstyle = async () => {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/global.css';
    document.getElementById("globaljs").after(style);
};
//ヘッダーフッターツールバー
addstyle();
window.addEventListener('DOMContentLoaded', () => {
    if (!/nogtm/.test(location.search)){
        GTM();
    }
    addheader();
    addfooter();
    addpwatoolbar();
});
