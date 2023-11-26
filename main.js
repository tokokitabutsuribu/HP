window.onload = function () {

    var url = new URL(window.location.href);
    var params = url.searchParams;
    if (params.has('noeffect')) {

    } else {
        var today = new Date(/*2023, 7, 7, 1, 1, 1, 1*/);   //デバッグ用の日付指定の場合
        var start = new Date(today.getFullYear(), 7, 7, 0, 0, 0, 0); //2020年7月24日0時0分0秒0
        var end = new Date(today.getFullYear(), 7, 8, 0, 0, 0, 0); //2020年8月9日0時0分0秒0
        if (start.getTime() <= today.getTime() && today.getTime() < end.getTime()) {
            document.getElementById('mainicon').src = 'iconBIG_7_7.GIF';
            document.getElementById("main").innerHTML = '<table class="counter" border="0" cellspacing="0" cellpadding="0"><tr align = "center"><span>ã‚ãªãŸã¯ </span><img src="https://www.f-counter.net/ani1/62/1695203110/" alt="アクセスカウンター" border="0" width="75" height="20" style="margin:0px; padding:0px; border:0px; vertical-align:bottom"><img src="https://www.f-counter.net/ani2/62/1695203110/" alt="表示されない場合は広告ブロックを切ってください" border="0" width="15" height="20" style="margin:0px; padding:0px; border:0px; vertical-align:bottom"><span> <nobr> äººç›®ã®æ¥è¨ªè€…ã§ã™</nobr> </span> </tr> </table> <div class="title"> <h1>æ‰€åŒ—ç‰©ç†éƒ¨ã®ã‚µã‚¤ãƒˆã¸ ã‚ˆã†ã“ãï¼</h1> </div>';
        }
    }
}
