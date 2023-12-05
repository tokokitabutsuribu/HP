var page;
const Initialize = () => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('page')) {
        page = parseInt(searchParams.get("page"));
        if (page == '') {
            page = 1;
        }
    } else {
        page = 1;
    }
    document.getElementById('pagenum').innerText = page;

    if (page <= 1) {
        document.getElementById('pageminus').style.visibility = 'hidden';
    }
}

const getArticledata = () => {

}

const updateDOM = () => {

}

const pageplus = () => {
    window.location.href = '/articles/index.html?page=' + (page + 1);
}

const pageminus = () => {
    if (page > 2) {
        window.location.href = '/articles/index.html?page=' + (page - 1);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    const header = fetch("https://tkbutsuribu.vercel.app/header.html")
        .then((response) => response.text())
        .then((data) => document.querySelector("#header").innerHTML = data);
    const footer = fetch("https://tkbutsuribu.vercel.app/footer.html")
        .then((response) => response.text())
        .then((data) => document.querySelector("#footer").innerHTML = data);
    const getArticle = getArticledata();
    const init = Initialize();
    await Promise.all([header, footer, getArticle, init]);
    await updateDOM();
});