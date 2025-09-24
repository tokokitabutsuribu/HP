import "./normalize.css";
import { Metadata, Viewport } from "next";

export default function RootLayout({ children }) {
  try {
    return (
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <meta name="google-site-verification" content="CyWfH7ucWBsHxufbfeQyPjWhibsPzME8tilxl7VTWdM" />
        </head>
        <body>
          {(process.env.NODE_ENV === "development" ||
            process.env.VERCEL_ENV === "preview") && (
            // eslint-disable-next-line @next/next/no-sync-scripts
            <script
              data-project-id="cy4LiIr4fnVnIeHpS860b4iP9OxJkgyFFyYe6grP"
              data-is-production-environment="false"
              src="https://snippet.meticulous.ai/v1/meticulous.js"
            />
          )}
          {children}
        </body>
      </html>
    );
  } catch (e) {
    console.log(e);
    console.log("at top layout");
    return { children };
  }
}
export const viewport: Viewport = {
  themeColor: "#1cf8fd",
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "所沢北高校物理部公式HP トップページ",
  description:
    "所沢北高校（通称所北）物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。無料で遊べるブラウザゲームも公開予定です。PWAとプッシュ通知にも対応しています。",
  openGraph: {
    type: "website",
    url: "https://tkbutsuribu.vercel.app/index.html",
    locale: "ja_JP",
    title: "所沢北高校物理部公式HP",
    description:
      "所沢北高校物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。無料で遊べるブラウザゲームも公開予定です。",
    siteName: "所沢北高校物理部",
    images: [
      {
        url: "https://tkbutsuribu.vercel.app/iconTwitter.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TK_physics_club",
    title: "所沢北高校物理部",
    description:
      "所沢北高校物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。",
    images: {
      url: "https://tkbutsuribu.vercel.app/iconTwitter.png",
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      "/favicon.ico",
      { url: "/images/iconmain.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    startupImage: [
      {
        url: "/splashscreens/iphone5_splash.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/iphone6_splash.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/iphoneplus_splash.png",
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splashscreens/iphonex_splash.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splashscreens/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splashscreens/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/ipadpro1_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/ipadpro3_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splashscreens/2732x2048.png",
        media: "(device-width: 2732px) and (device-height: 2048px)",
      },
      {
        url: "/splashscreens/2688x1242.png",
        media: "(device-width: 2688px) and (device-height: 1242px)",
      },
      {
        url: "/splashscreens/2436x1125.png",
        media: "(device-width: 2436px) and (device-height: 1125px)",
      },
      {
        url: "/splashscreens/2224x1668.png",
        media: "(device-width: 2224px) and (device-height: 1668px)",
      },
      {
        url: "/splashscreens/2208x1242.png",
        media: "(device-width: 2208px) and (device-height: 1242px)",
      },
      {
        url: "/splashscreens/2048x2732.png",
        media: "(device-width: 2048px) and (device-height: 2732px)",
      },
      {
        url: "/splashscreens/2048x1536.png",
        media: "(device-width: 2048px) and (device-height: 1536px)",
      },
      {
        url: "/splashscreens/2048x1496.png",
        media: "(device-width: 2048px) and (device-height: 1496px)",
      },
      {
        url: "/splashscreens/1792x828.png",
        media: "(device-width: 1792px) and (device-height: 828px)",
      },
      {
        url: "/splashscreens/1668x2224.png",
        media: "(device-width: 1668px) and (device-height: 2224px)",
      },
      {
        url: "/splashscreens/1536x2048.png",
        media: "(device-width: 1536px) and (device-height: 2048px)",
      },
      {
        url: "/splashscreens/1536x2008.png",
        media: "(device-width: 1536px) and (device-height: 2008px)",
      },
      {
        url: "/splashscreens/1334x750.png",
        media: "(device-width: 1334px) and (device-height: 750px)",
      },
      {
        url: "/splashscreens/1242x2688.png",
        media: "(device-width: 1242px) and (device-height: 2688px)",
      },
      {
        url: "/splashscreens/1242x2208.png",
        media: "(device-width: 1242px) and (device-height: 2208px)",
      },
      {
        url: "/splashscreens/1125x2436.png",
        media: "(device-width: 1125px) and (device-height: 2436px)",
      },
      {
        url: "/splashscreens/1024x768.png",
        media: "(device-width: 1024px) and (device-height: 768px)",
      },
      {
        url: "/splashscreens/1024x748.png",
        media: "(device-width: 1024px) and (device-height: 748px)",
      },
      {
        url: "/splashscreens/828x1792.png",
        media: "(device-width: 828px) and (device-height: 1792px)",
      },
      {
        url: "/splashscreens/768x1024.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
      {
        url: "/splashscreens/768x1004.png",
        media: "(device-width: 768px) and (device-height: 1004px)",
      },
      {
        url: "/splashscreens/750x1334.png",
        media: "(device-width: 750px) and (device-height: 1334px)",
      },
      {
        url: "/splashscreens/640x1136.png",
        media: "(device-width: 640px) and (device-height: 1136px)",
      },
      {
        url: "/splashscreens/640x960.png",
        media: "(device-width: 640px) and (device-height: 960px)",
      },
      {
        url: "/splashscreens/320x480.png",
        media: "(device-width: 320px) and (device-height: 480px)",
      },
      { url: "/iconBIG-512.png" },
      { url: "/images/iconmain.svg" },
    ],
  },
};
