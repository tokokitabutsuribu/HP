
const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})

const updateArticle = (id) => {
    client
        .get({
            endpoint: 'articles',
            contentId: 'pzazaa-hz8',
        })
        .then((res) => {
            let addCategory="";
            for(const elem of res.category){
                addCategory+='<li>'+elem+'</li>\n'
            }
            document.querySelector('#category').innerHTML=addCategory;
            document.querySelector('#title').textContent = res.title;
        })
        .catch((error)=>{
            console.log(error)
        })

}

//Prism.highlightAll();
//で読み込む
window.addEventListener('DOMContentLoaded',updateArticle());
