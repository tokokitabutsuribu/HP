const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})

try{
let contentID = 'n39zOq9PAW'
client
    .get({
        endpoint: 'articles',
        contentId: contentID,
    })
    .then((res) => {
        window.alert(res.title)
        document.querySelector('#title').textContent = res.title;
    })



}catch(e){
    window.alert(e);
}

//Prism.highlightAll();
//で読み込む

