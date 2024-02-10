const url = new URL(window.location.href);
const params = url.searchParams;

if (!/tkbutsurobu.vercel.app/.test(location.href)&&!params.has('notest')) {
    try {
        const script = document.createElement('script');
        script.dataset.projectId = 'cy4LiIr4fnVnIeHpS860b4iP9OxJkgyFFyYe6grP';
        script.dataset.isProductionEnvironment = false;
        script.src = "https://snippet.meticulous.ai/v1/meticulous.js";
        document.getElementById('main').after(script);
    } catch (e) {
        console.log(e)
    }
}


if (params.has('noeffect')) {

} else {
    window.addEventListener('DOMContentLoaded',() => {
        const today = new Date(/*2023, 7, 7, 1, 1, 1, 1*/);   //デバッグ用の日付指定の場合
        const start = new Date(today.getFullYear(), 7, 7, 0, 0, 0, 0);
        const end = new Date(today.getFullYear(), 7, 8, 0, 0, 0, 0);
        if ((start.getTime() <= today.getTime() && today.getTime() < end.getTime()) || params.has('sevenseven')) {
            document.getElementById('mainicon').src = 'iconBIG_7_7.GIF';
            document.getElementById("count1").innerHTML = 'ã‚ãªãŸã¯ ';
            document.getElementById("count2").innerHTML = ' äººç›®ã®æ¥è¨ªè€…ã§ã™';
            document.getElementById("title1").innerHTML = 'æ‰€åŒ—ç‰©ç†éƒ¨ã®ã‚µã‚¤ãƒˆã¸';
            document.getElementById("title2").innerHTML = ' ã‚ˆã†ã“ãï¼';
            document.getElementById('noeffect').style.display = 'block';
        }
    })
}


