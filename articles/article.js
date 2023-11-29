
const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})
try {
    const addarray = (id, array, tag) => {
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
            for (const elem of array) {
                add += starttag + elem + endtag;
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
                addarray('#category', res.category, 'li')
                document.querySelector('#title').textContent = res.title;
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