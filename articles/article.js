
const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})

const updateArticle = (id) => {
    client
        .get({
            endpoint: 'articles',
            contentId: id,
        })
        .then((res) => {
            window.alert(res.title)
            document.querySelector('#title').textContent = res.title;
        })


}

//Prism.highlightAll();
//で読み込む
window.addEventListener('DOMContentLoaded',updateArticle("n39zOq9PAW"));
