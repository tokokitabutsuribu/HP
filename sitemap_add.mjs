// xml 生成には xml2js というライブラリを使っています
import { Builder } from 'xml2js';
const { xpath } = await import('xpath');
const { dom } = await import('xmldom').DOMParser;
const { fs } = await import('fs');

try {

  const oldxml = fs.readFileSync('sitemap.xml', "utf-8");
  const doc = new dom().parseFromString(oldxml);
  const select = xpath.useNamespaces({
    "a": "http://www.sitemaps.org/schemas/sitemap/0.9"
  });

  // xml に記述する URL のリスト作成
  const urls = []

  const oldurls = select("/a:urlse/a:url", doc);

  for (const oldurl of oldurls) {
    console.log(oldurl)
    //const name = select("a:loc/text()", oldurl);
    urls.push(oldurl);
  }

  console.log(process.argv[2]);
  urls.push({ loc: "https://tkbutsuribu.vercel.app/articles/article.html?id=" + process.argv[2] })

  // xml 生成
  console.log(urls)
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

  fs.writeFile('sitemap.xml', xml);
} catch (e) {
  console.error(e);
  process.exit(1);
}

