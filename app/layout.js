import Header from './header.js'
import Footer from './footer.js'
import './normalize.css'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="ja">
      <head>
        {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="cy4LiIr4fnVnIeHpS860b4iP9OxJkgyFFyYe6grP"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}