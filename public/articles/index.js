import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const supabase = createClient(
  "https://ojizjelrnhsxpmjtavhi.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaXpqZWxybmhzeHBtanRhdmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzUwNjcsImV4cCI6MjAxNDgxMTA2N30.7ElMMPF5I89Ec3-nwnLczykjM96ZxMubfwgMLF4LJ1k"
);

let page;
let data;
const maxofpage = 10;
let maxpage = 1;

try {
  const getmax = async () => {
    await supabase
      .from("articles")
      .select("*", { count: "exact", head: true })
      .then((data) => {
        maxpage = Math.ceil(data.count / maxofpage);
      });
  };
  const init = () => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("page")) {
      page = Number.parseInt(searchParams.get("page"));
      if (!page) {
        page = 1;
      }
    } else {
      page = 1;
    }
    history.replaceState(
      null,
      "",
      `${window.location.origin}/articles/index.html?page=${page}`
    );
    document.getElementById("pagenum").innerText = page;

    if (page <= 1) {
      document.getElementById("pageminus").style.visibility = "hidden";
    } else {
      document.getElementById("pageminus").style.visibility = "visible";
    }
    if (page < maxpage) {
      document.getElementById("pageplus").style.visibility = "visible";
    } else {
      document.getElementById("pageplus").style.visibility = "hidden";
    }
  };
  const getArticledata = async () => {
    await supabase
      .from("articles")
      .select()
      .order("revisedAt", {
        ascending: false,
      })
      .range((page - 1) * maxofpage, page * maxofpage - 1)
      .then((res) => {
        data = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateDOM = () => {
    let add = "";
    if (!data.lenth) {
      for (const elem of data) {
        console.log(elem);
        add += `<li><a href="/articles/${elem.id}"><h4>${elem.title}</h4><p>${elem.description}</p></a></li>`;
      }
    }
    document.querySelector("#article").innerHTML = add;
  };

  document.getElementById("pageplus").onclick = async () => {
    history.pushState(null, null, `/articles/index.html?page=${page + 1}`);
    init();
    await getArticledata();
    updateDOM();
    window.scrollTo(0, 0);
  };

  document.getElementById("pageminus").onclick = async () => {
    if (page >= 2) {
      history.pushState(null, null, `/articles/index.html?page="${page - 1}`);
      init();
      await getArticledata();
      updateDOM();
      window.scrollTo(0, 0);
    }
  };

  window.addEventListener("DOMContentLoaded", async () => {
    await getmax();
    init();
    const getArticle = await getArticledata();
    await updateDOM();
  });
} catch (e) {
  console.log(e);
}
