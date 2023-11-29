const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})


let contentID = ''
client.get({ endpoint: 'articles',contentID: contentIDup}).then((res) => {
    document.querySelector('#text').textContent = res.text
})





//Prism.highlightAll();
//で読み込む

