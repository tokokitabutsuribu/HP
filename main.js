var url = new URL(window.location.href);
var params = url.searchParams;
if (params.has('noeffect')) {

} else {
    var today = new Date(/*2023, 7, 7, 1, 1, 1, 1*/);   //デバッグ用の日付指定の場合
    var start = new Date(today.getFullYear(), 7, 7, 0, 0, 0, 0); //2020年7月24日0時0分0秒0
    var end = new Date(today.getFullYear(), 7, 8, 0, 0, 0, 0); //2020年8月9日0時0分0秒0
    if ((start.getTime() <= today.getTime() && today.getTime() < end.getTime())||params.has('sevenseven')) {
        document.getElementById('mainicon').src = 'iconBIG_7_7.GIF';
        document.getElementById("count1").innerHTML='ã‚ãªãŸã¯ ';
        document.getElementById("count2").innerHTML=' äººç›®ã®æ¥è¨ªè€…ã§ã™';
        document.getElementById("title1").innerHTML='æ‰€åŒ—ç‰©ç†éƒ¨ã®ã‚µã‚¤ãƒˆã¸';
        document.getElementById("title2").innerHTML=' ã‚ˆã†ã“ãï¼';
        
    }
}

