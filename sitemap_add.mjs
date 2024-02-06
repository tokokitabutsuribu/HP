import fs from 'fs/promises';
import { Builder } from 'xml2js';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
    serviceDomain: 'tkbutsuribu', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '41k5Ew3OXIRepVdY8CgIXiAwTNwJiS5mQFpa',
})

let IDs=[];
await client
  .getAllContentIds({
    endpoint: 'articles',
  })
  .then((res) => IDs=res)
  .catch((err) => console.error(err));

// xml に記述する URL のリスト作成
const urls = []

for(const id of IDs){
  urls.push({loc:'https://tkbutsuribu.vercel.app/articles/'+id});
}
// xml 生成
const builder = new Builder();
const sitemap = {
  urlset: {
    $: {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    },
    url: urls,
  },
};
const xml = builder.buildObject(sitemap);
fs.writeFile('/public/sitemap_article.xml', xml);

