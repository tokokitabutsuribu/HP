const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})


let contentID = 'n39zOq9PAW'
client.get({ endpoint: 'articles',contentID: contentID}).then((res) => {
    document.querySelector('#title').textContent = res.title;
})





//Prism.highlightAll();
//で読み込む

