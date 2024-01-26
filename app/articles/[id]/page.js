import NotFound from '../404.js'
import parse from 'html-react-parser';
import { Metadata } from 'next'

export async function generateMetadata({ params }) {
  let title = '';
  let description = '';
  let iserror = false;
  await fetch('https://tkbutsuribu.microcms.io/api/v1/articles/' + params.id, { headers: { 'X-MICROCMS-API-KEY': '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa' }, next: { revalidate: 10 } })
    .then(data => {
      if (!data.ok) {
        iserror = true;
      }
      return data.json();
    })
    .then((res) => {
      console.log(res);
      title = res.title;
      description = res.description;
    })
    .catch((e) => {
      iserror = true;
    });
  if (iserror) {
    return {
      title: '記事が見つかりませんでした',
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
      icons: {
        icon: '/favicon.ico'
      },
      manifest: 'https://tkbutsuribu.vercel.app/manifest.webmanifest',

    }
  } else {
    return {
      title: title + ' -所沢北高校物理部',
      description: description,
      openGraph: {
        title: title,
        description: description,
        siteName: '所沢北高校物理部',
        images: [
          {
            url: 'https://tkbutsuribu.vercel.app/iconBIG.jpg',
            width: 320,
            height: 320,
          }
        ],
        type: 'article',
      },
      icons: {
        icon: '/favicon.ico',
      },
      manifest: 'https://tkbutsuribu.verce.app/manifest.webmanifest',
      twitter:{
        card:'summary',
        title:title,
        description:description,
        site:'@TK_physics_club',
        image:['https://tkbutsuribu.vercel.app/iconBIG.jpg'],

      }
    }
  }
}

export default async function Page({ params }) {
  let category = "";
  let title = "title";
  let updated = "----/--/--";
  let index = "";
  let content = "";
  let description = "";

  const replacecontent = (input) => {
    const replacekeys = [
      { key: '<table>', replace: '<div class="table-wrapper"><table>' },
      { key: '</table>', replace: '</table></div>' },
      { key: '<iframe', replace: '<iframe loading="lazy"' },
    ]
    let ret = input;
    for (const replacekey of replacekeys) {
      ret = ret.replaceAll(replacekey.key, replacekey.replace);
    }
    return ret;
  }

  const addarray = (array, tag, key) => {
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
      if (key === undefined) {
        for (const elem of array) {
          add += starttag + replacecontent(elem) + endtag;
        }
      } else {
        for (const elem of array) {
          add += starttag + replacecontent(elem[key]) + endtag;
        }
      }
    }
    return add;
  }

  let iserror = false;
  await fetch('https://tkbutsuribu.microcms.io/api/v1/articles/' + params.id, { headers: { 'X-MICROCMS-API-KEY': '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa' }, next: { revalidate: 10 } })
    .then(data => {
      if (!data.ok) {
        iserror = true;
      }
      return data.json();
    })
    .then((res) => {
      title = res.title;
      description = res.description;
      updated = new Date(res.revisedAt).toISOString().split("T")[0].replaceAll("-", "/");
      content = addarray(res.contents, undefined, 'content');
      category = addarray(res.category, 'li', undefined);
      for (const elem of res.index) {
        index += '<li><a href="javascript:window.location.replace(\'#' + elem.link + '\')">' + elem.index + '</a></li>\n';
      }
    })
    .catch((e) => {
      iserror = true;
    });
  if (iserror) {
    console.log('404');
    return <NotFound />;
  }
  return (
    <div>
      <ul id="category">
        {parse(category)}
      </ul>
      <h1 id="title">{parse(title)}</h1>
      <p id="updated">{parse(updated)}</p>
      <ol id="index">
        {parse(index)}
      </ol>
      <div id="content">{parse(content)}</div>
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