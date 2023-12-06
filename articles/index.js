import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabase = createClient('https://ojizjelrnhsxpmjtavhi.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaXpqZWxybmhzeHBtanRhdmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzUwNjcsImV4cCI6MjAxNDgxMTA2N30.7ElMMPF5I89Ec3-nwnLczykjM96ZxMubfwgMLF4LJ1k');
try {
    let page;
    let data;
    let maxofpage = 10;

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
        document.getElementById('pagenum').innerText = page;

        if (page <= 1) {
            document.getElementById('pageminus').style.visibility = 'hidden';
        } else {
            document.getElementById('pageminus').style.visibility = 'visible';
        }
    }
    init();
    const getArticledata = async () => {
        await supabase
            .from('articles')
            .select()
            .order('revisedAt', { ascending: false })
            .range((page - 1) * maxofpage - 1, page * maxofpage - 1)
            .then((res) => {
                data = res.data;
            })
            .catch((e) => {
                window.alert(e);
            })

    }

    const updateDOM = () => {
        let add = "";
        if (!data.lenth) {
            for (const elem of data) {
                add += '<li><a href="/articles/article.html?id=' + elem.id + '">' + elem.title + '</a></li>';
            }
        }
        document.querySelector('#article').innerHTML = add;
    }

    document.getElementById('pageplus').onclick = async function () {
        page++;
        init()
        await getArticledata();
        updateDOM();
        history.pushState(null, null, '/articles/index.html?page=' + (page + 1));
    }

    document.getElementById('pageminus').onclick = async function () {
        if (page >= 2) {
            page--;
            init();
            await getArticledata();
            updateDOM()
            history.pushState(null, null, '/articles/index.html?page=' + (page - 1));
        }
    }

    window.addEventListener('DOMContentLoaded', async () => {
        const header = fetch("https://tkbutsuribu.vercel.app/header.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#header").innerHTML = data);
        const footer = fetch("https://tkbutsuribu.vercel.app/footer.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#footer").innerHTML = data);
        const getArticle = getArticledata();
        await Promise.all([header, footer, getArticle]);
        await updateDOM();
    });
} catch (e) {
    window.alert(e);
}