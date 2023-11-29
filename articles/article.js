
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

    const updateArticle = (id) => {
        client
            .get({
                endpoint: 'articles',
                contentId: 'pzazaa-hz8',
            })
            .then((res) => {
                addarray('#category', res.category, 'li',undefined)
                document.querySelector('#title').textContent = res.title;
                document.querySelector('#updated').textContent = new Date(res.revisedAt).toISOString().split("T")[0].replaceAll("-", "/");
                addarray('#content',res.contents,undefined,'content');
            })
            .catch((error) => {
                console.log(error)
            })

    }

    //Prism.highlightAll();
    //で読み込む
    window.addEventListener('DOMContentLoaded', updateArticle());
} catch (e) {
    window.alert(e);
}