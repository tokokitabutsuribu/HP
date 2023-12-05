
const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})
try {
    const addarray = (id, array, tag, key) => {
        let add = "";
        let starttag;
        let endtag;
        if (tag !== undefined) {
            starttag = '<' + tag + '>'
            endtag = '</' + tag + '>\n'
        } else {
            starttag = ''
            endtag = ''
        }
        if (!array.lenth) {
            if (key === undefined) {
                for (const elem of array) {
                    add += starttag + elem.replaceAll('<table>','<div class="table-wrapper"><table>').replaceAll('</table>','</table></div>') + endtag;
                }
            } else {
                for (const elem of array) {
                    add += starttag + elem[key].replaceAll('<table>','<div class="table-wrapper"><table>').replaceAll('</table>','</table></div>') + endtag;
                }
            }
        }
        document.querySelector(id).innerHTML = add;
    }
    let id;
    var articledata;
    var is404 = false;
    const getArticledata = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        id = searchParams.get("id")
        if (id == null) {
            is404 = true;
            return
        }
        await client
            .get({
                endpoint: 'articles',
                contentId: id,
            })
            .then((res) => {
                articledata = res;
            })
            .catch((error) => {
                is404 = true;
                console.log(error)
            })
    }
    const updateDOM = async () => {
        if (is404) {
            await fetch("https://tkbutsuribu.vercel.app/404forarticle.html")
                .then((response) => response.text())
                .then((data) => document.querySelector("body").innerHTML = data);
            return
        }
        const res = articledata;
        addarray('#category', res.category, 'li', undefined)
        document.querySelector('#title').textContent = res.title;
        document.querySelector('#updated').textContent = new Date(res.revisedAt).toISOString().split("T")[0].replaceAll("-", "/");
        try{
        addarray('#content', res.contents, undefined, 'content');
    }catch(e){
        console.log(e);
    }
        let add = ""
        for (const elem of res.index) {
            add += '<li><a href="javascript:window.location.replace(\'#' + elem.link + '\')">' + elem.index + '</a></li>\n';
        }
        document.querySelector('#index').innerHTML = add
        document.title = res.title + "  -所北物理部";
        document.querySelector('meta[name="description"]').setAttribute("content", res.description);
        document.querySelector('meta[property="og:url"]').setAttribute("content", "https://tkbutsuribu.vercel.app/articles/article.html?id=" + id);
        document.querySelector('meta[property="og:title"]').setAttribute("content", res.title);
        document.querySelector('meta[property="og:description"]').setAttribute("content", res.description);

        Prism.highlightAll();
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
    console.log(e);
}