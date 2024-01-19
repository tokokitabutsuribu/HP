export default async function Page({ params }) {
  let category=[];
  let title="title";
  let updated="----/--/--";
  let index=[];
  let content=[]

  await fetch('https://tkbutsuribu.microcms.io/api/v1/articles/c9uqfteg5yg', { headers: { 'X-MICROCMS-API-KEY': '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa' }, next: { revalidate: 10 } })
    .then(data => data.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e)=>{
    return { notFound: true };
  })
  return (
    <div>
      <ul id="category">
      </ul>
      <h1 id="title"></h1>
      <p id="updated"></p>
      <ol id="index">
      </ol>
      <div id="content"></div>
      <br />
      <div id="top-wrapper">
        <a id="top" href="javascript:window.location.replace('#.top')">
          <div>
            <span>
              ↑<br />TOP</span>
          </div>
        </a>
      </div>
    </div>
  );
}