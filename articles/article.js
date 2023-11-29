
const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})

const updateArticle = (id) => {
    try{
    client
        .get({
            endpoint: 'articles',
            contentId: 'pzazaa-hz8',
        })
        .then((res) => {
            window.alert(res.title)
            document.querySelector('#title').textContent = res.title;
        })
        .then((error)=>{
            window.alert("1"+error)
        })
    }catch(e){
        window.alert("2"+e);
    }

}

//Prism.highlightAll();
//で読み込む
window.addEventListener('DOMContentLoaded',updateArticle());
