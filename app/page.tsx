import React, { Suspense } from "react";
import styles from "./stylesheet.module.css";
import NotifyButton from "./NotifyButton";
import PwaToolBar from "./PwaToolBar";
import Counter from "./Counter";
import CounterLoading from "./CounterLoading";
import type { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-dynamic";

export default function page() {
  const jsonld = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "所沢北高校物理部",
    alternateName: ["所北物理部", "TK_physics_club", "TKPC"],
    url: "https://tkbutsuribu.vercel.app/",
    headline: "所沢北高校物理部公式HP",
    description:
      "所沢北高校（通称所北）物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。無料で遊べるブラウザゲームも公開予定です。",
    image: {
      "@type": "ImageObject",
      url: "/images/iconBIG.jpg",
    },
  };
  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" />
      <script
      src="/myonesignal.js"      />

      <PwaToolBar />
      <div id="wrapper" className={styles.wrapper}>
        <div className={styles.content1}>
          <div className={styles.main}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(0px,12vw,25px)",
              }}
            >
              <a
                href="/articles/osirase.html"
                style={{
                  height: "fit-content",
                  whiteSpace: "nowrap",
                  textAlign: "left",
                  backgroundColor: "darkblue",
                  color: "white",
                  textDecoration: "none",
                  padding: "5px",
                  marginRight: "10px",
                }}
              >
                お知らせ
              </a>
              <Suspense fallback={<CounterLoading />}>
                <Counter />
              </Suspense>
              <a
                href="/index.html?noeffect"
                className={styles.noeffect}
                style={{
                  display: "none",
                  textAlign: "left",
                  backgroundColor: "lightblue",
                  color: "darkgreen",
                  textDecoration: "none",
                  padding: "5px",
                  marginLeft: "10px",
                }}
              >
                エフェクトオフ
              </a>
            </div>
            <h1
              style={{
                marginBottom: "0px",
                fontSize: "clamp(10px, 7.6vw, 32px)",
                width: "100%",
                color: "red",
                marginTop: "25px",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                所沢北高校物理部のサイトへ
              </span>
              <span style={{ whiteSpace: "nowrap" }}>ようこそ！</span>
            </h1>
          </div>
          <img
            src="/public/images/logo.svg"
            height="320px"
            width="320px" />
          <div className={styles.links}>
            <div className={styles.twitter}>
              <a
                style={{ textDecoration: "none" }}
                href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span style={{ whiteSpace: "nowrap" }}>公式𝕏</span>
                </span>
              </a>
            </div>
            <div className={styles.bluesky}>
              <a
                style={{ textDecoration: "none" }}
                href="https://bsky.app/profile/tkbutsuribu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span style={{ whiteSpace: "nowrap" }}>公式BlueSky</span>
                </span>
              </a>
            </div>
            <div className={styles.youtube}>
              <a
                href="https://www.youtube.com/channel/UCMx0SnqChPhp4rapoqgan3g?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span style={{ whiteSpace: "nowrap" }}>公式YouTube</span>
                </span>
              </a>
            </div>
            <div className={styles.kaigyou} />

            <div className={styles.tokokitahp}>
              <a
                href="https://tokokita-h.spec.ed.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ whiteSpace: "nowrap" }}>所北HP</span>
              </a>
            </div>
            <div className={styles.github}>
              <a
                href="https://github.com/tokokitabutsuri/HP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ whiteSpace: "nowrap" }}>
                  <img
                    height="20px"
                    width="20px"
                    src="/images/github-mark-white.svg"
                    style={{ marginRight: "3px" }}
                    alt="Git"
                  />
                  <img
                    height="22px"
                    width="57px"
                    src="/images/github-logo-white.svg"
                    alt="hub"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.content2} style={{ width: "400px" }}>
          <div className={styles.sitemap}>
            <ul className={styles.sitemap}>
              <li>
                <a href="/about.html">
                  <div>概要</div>
                </a>
              </li>
              <li>
                <a href="/articles/">
                  <div>記事一覧</div>
                </a>
              </li>
              <li>
                <a href="/games/">
                  <div>ゲームスタジオ</div>
                </a>
              </li>
              <li>
                <a href="#.">
                  <div>掲示板(未完成)</div>
                </a>
              </li>
            </ul>
          </div>
          <div className='onesignal-customlink-container' />
        </div>
      </div>
    </>
  );
}

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

const a = (
  <>
    <link rel="manifest" href="./manifest.webmanifest" />

    {}
  </>
);
