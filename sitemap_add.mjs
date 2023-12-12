// xml 生成には xml2js というライブラリを使っています
import { Builder } from 'xml2js';

try {

  

  // xml に記述する URL のリスト作成
  const urls = []

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

