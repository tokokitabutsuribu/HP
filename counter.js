import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabase = createClient('https://ojizjelrnhsxpmjtavhi.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaXpqZWxybmhzeHBtanRhdmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzUwNjcsImV4cCI6MjAxNDgxMTA2N30.7ElMMPF5I89Ec3-nwnLczykjM96ZxMubfwgMLF4LJ1k')
try {
    let counterID = localStorage.getItem('counterID');
    //カウントを取得
    let count;
    let iserror = false;
    const today = new Date().toLocaleDateString('sv-SE');
    let date = "";
    let hasID = false;
    let ifPlusCount = false;
    const insertHTML = (accesscount) => {
        //htmlに入れる
        let add = '<li style="margin-right:5px" id="count1">あなたは</li>';
        const countstr = accesscount.toString().padStart(Math.max(accesscount.toString().length,6),0)
        for (let i = 0; i < countstr.length; i++) {
            add += '<li class="num">' + countstr.substr(i, 1) + '</li>';
        }
        add+='<li style="margin-left: 5px;" id="count2">人目の来訪者です</li>'
        document.querySelector("#access-counter").innerHTML = add;
    }

    await supabase
        .from('pageviews')
        .select()
        .then((data) => {
            count = data.data[0].pageview;
        })
        .catch((error) => {
            count = 0;
            iserror=true;
        })

    if (counterID) {
        //supabaseから取得
        await supabase
            .from('pageviews_details')
            .select()
            .eq('id', counterID)
            .then((data) => {
                try {
                    date = data.data[0].date;
                    hasID = true;
                } catch (error) {
                    hasID = false;
                }
            })
        if (hasID) {
            //キーが存在する
            if (date != today) {
                //その日まだアクセスしていない
                ifPlusCount = true;
                //日付をアップデートする
                supabase
                    .from('pageviews_details')
                    .update({ date: today })
                    .eq('id', counterID)
                    .then((data)=>{})
            } else {
                ifPlusCount = false;
            }
        } else {
            //キーが存在しない
            //insertする
            supabase
                .from('pageviews_details')
                .insert({ date: today })
                .select()
                .then((data) => {
                    localStorage.counterID = data.data[0].id;
                })
            ifPlusCount = true;
        }
    } else {
        //localstrageにIDがまだない
        //insertする
        supabase
            .from('pageviews_details')
            .insert({ date: today })
            .select()
            .then((data) => {
                localStorage.counterID = data.data[0].id;
            })
        ifPlusCount = true;
    }
    if (ifPlusCount&&!iserror) {
        insertHTML(count + 1)
        //カウンターを増やす
        await supabase
            .from('pageviews')
            .update({ pageview: count + 1 })
            .eq('id', 1);
    } else {
        insertHTML(count)
    }
} catch (e) {
    console.log(e);
}
