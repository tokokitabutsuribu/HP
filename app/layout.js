import './normalize.css'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="ja">
      <head>

      </head>
      <body>
        <script dangerouslySetInnerHTML={{
          __html: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVKWHB4T');</script>
<!-- End Google Tag Manager -->`,
        }} />

        {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="cy4LiIr4fnVnIeHpS860b4iP9OxJkgyFFyYe6grP"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SBGM4VKQL"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0SBGM4VKQL');
    `,
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVKWHB4T"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
        }} />
        {children}
      </body>
    </html>
  );
}