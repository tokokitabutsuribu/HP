
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
                    add += starttag + elem + endtag;
                }
            } else {
                for (const elem of array) {
                    add += starttag + elem[key] + endtag;
                }
            }
        }
        document.querySelector(id).innerHTML = add;
    }

    var articledata;
    var is404 = false;
    const getArticledata = () => {
        const searchParams = new URLSearchParams( window.location.search );
        const id = searchParams.get("a")
        if(id=""){
            is404=true;
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
                is404=true;
                console.log(error)
            })
    }
    const updateDOM = () => {
        if(is404){
            await fetch("https://tkbutsuribu.vercel.app/404forarticle.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("body").innerHTML = data);
            return
        }
        const res = articledata;
        addarray('#category', res.category, 'li', undefined)
        document.querySelector('#title').textContent = res.title;
        document.querySelector('#updated').textContent = new Date(res.revisedAt).toISOString().split("T")[0].replaceAll("-", "/");
        addarray('#content', res.contents, undefined, 'content');

        let add=""
        for (const elem of res.index) {
            add += '<li><a href="#' + elem.link+'">'+elem.index + '</a></li>\n';
        }
        document.querySelector('#index').innerHTML=add
        


        Prism.highlightAll();
    }
    // window.addEventListener('DOMContentLoaded', updateArticle());
} catch (e) {
    window.alert(e);
}