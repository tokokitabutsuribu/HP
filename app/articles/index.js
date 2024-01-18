import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabase = createClient('https://ojizjelrnhsxpmjtavhi.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaXpqZWxybmhzeHBtanRhdmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzUwNjcsImV4cCI6MjAxNDgxMTA2N30.7ElMMPF5I89Ec3-nwnLczykjM96ZxMubfwgMLF4LJ1k');

let page;
let data;
let maxofpage = 10;
let maxpage = 1;

try {
    const getmax = async () => {
        await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true })
            .then((data) => {
                maxpage = Math.ceil(data.count / maxofpage);
            })
    }
    const init = () => {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('page')) {
            page = parseInt(searchParams.get("page"));
            if (page == '') {
                page = 1;
            }
        } else {
            page = 1;
        }
        history.replaceState(null,'',window.location.origin + '/articles/index.html?page=' + page);
        document.getElementById('pagenum').innerText = page;

        if (page <= 1) {
            document.getElementById('pageminus').style.visibility = 'hidden';
        } else {
            document.getElementById('pageminus').style.visibility = 'visible';
        }
        if (page < maxpage) {
            document.getElementById('pageplus').style.visibility = 'visible';
        } else {
            document.getElementById('pageplus').style.visibility = 'hidden';
        }
    }
    var getArticledata = async () => {
        await supabase
            .from('articles')
            .select()
            .order('revisedAt', {
                ascending: false
            })
            .range((page - 1) * maxofpage, page * maxofpage - 1)
            .then((res) => {
                data = res.data;
            })
            .catch((e) => {
                window.alert(e);
            })

    }

    var updateDOM = () => {
        let add = "";
        if (!data.lenth) {
            for (const elem of data) {
                console.log(elem);
                add += '<li><a href="/articles/article.html?id=' + elem.id + '"><h4>' + elem.title + '</h4><p>' + elem.description + '</p></a></li>';
            }
        }
        document.querySelector('#article').innerHTML = add;
    }

    document.getElementById('pageplus').onclick = async function () {
        history.pushState(null, null, '/articles/index.html?page=' + (page + 1));
        init()
        await getArticledata();
        updateDOM();
        window.scrollTo(0, 0);
    }

    document.getElementById('pageminus').onclick = async function () {
        if (page >= 2) {
            history.pushState(null, null, '/articles/index.html?page=' + (page - 1));
            init();
            await getArticledata();
            updateDOM();
            window.scrollTo(0, 0);
        }
    }

    window.addEventListener('DOMContentLoaded', async () => {
        await getmax();
        init();
        const header = fetch("/header.html")
            .then(res => res.text())
            .then(text => new DOMParser().parseFromString(text, "text/html").body.innerHTML)
            .then((data) => { document.querySelector("#header").innerHTML = data });
        const footer = fetch("/footer.html")
            .then(res => res.text())
            .then(text => new DOMParser().parseFromString(text, "text/html").body.innerHTML)
            .then((data) => { document.querySelector("#footer").innerHTML = data });
        const getArticle = getArticledata();
        await Promise.all([header, footer, getArticle]);
        await updateDOM();
    });
} catch (e) {
    window.alert(e);
}