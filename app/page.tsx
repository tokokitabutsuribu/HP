import React, { Suspense } from "react";
import styles from "./stylesheet.module.css";
import NotifyButton from "./NotifyButton";
import PwaToolBar from "./PwaToolBar";
import Counter from "./Counter";
import CounterLoading from "./CounterLoading";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export default function page() {
	const jsonld = {
		"@context": "http://schema.org",
		"@type": "WebSite",
		name: "所沢北高校物理部",
		alternateName: ["所北物理部", "TK_physics_club", "TKPC"],
		url: "https://tkbutsuribu.vercel.app/",
		headline: "所沢北高校物理部公式HP",
		description: "所沢北高校（通称所北）物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。無料で遊べるブラウザゲームも公開予定です。",
		image: {
			"@type": "ImageObject",
			url: "/images/iconBIG.jpg",
		},
	};
	return (
		<>
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }} />

			<PwaToolBar />
			<div id="wrapper" className={styles.wrapper}>
				<div className={styles.content1}>
					<div className={styles.main}>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0px,12vw,25px)" }}>
							<a href="/articles/osirase.html" style={{ height: "fit-content", whiteSpace: "nowrap", textAlign: "left", backgroundColor: "darkblue", color: "white", textDecoration: "none", padding: "5px", marginRight: "10px" }}>
								お知らせ
							</a>
							<Suspense fallback={<CounterLoading />}>
								<Counter />
							</Suspense>
							<a href="/index.html?noeffect" className={styles.noeffect} style={{ display: "none", textAlign: "left", backgroundColor: "lightblue", color: "darkgreen", textDecoration: "none", padding: "5px", marginLeft: "10px" }}>
								エフェクトオフ
							</a>
						</div>
						<h1 style={{ marginBottom: "0px", fontSize: "clamp(10px, 7.6vw, 32px)", width: "100%", color: "red", marginTop: "25px" }}>
							<span style={{ whiteSpace: "nowrap" }}>所沢北高校物理部のサイトへ</span>
							<span style={{ whiteSpace: "nowrap" }}>ようこそ！</span>
						</h1>
					</div>
					<svg role="img" aria-label="ロゴ" width="320px" height="320px" viewBox="0 0 1280 1280" xmlns="http://www.w3.org/2000/svg">
						<circle fill="#1cf8fd" cx="750.309" cy="591.251" r="15.885" />
						<path
							fill="#1cf8fd"
							d="M668.439 970.06c-6.147 10.234-9.78 11.63-24.996 9.33 8.76-8.78 15.638-18.672 25.337-25.759l1.64.741c-.576 5.126-1.152 10.252-1.981 15.688zM382.025 475.411l-.084 114.973c.559 4.787 3.984 12.914 10.617 15.001.613 1.104 9.728 1.992 9.391 1.716-.161-.966 223.711-1.488 223.789-1.021l7.154.041c4.107.123 5.252 2.985 5.191 7.092-.228 0-.186 212.355-.184 212.355.085.085 3.419-1.535 3.419-1.535s26.298-29.919 25.674-30.543c.91 0 3.565-8.725 3.024-8.725.719.262-.743-181.979.174-181.69-.455 0 1.018-8.522 1.288-8.522.131.393 50.982-100.395 50.868-100.737-.631-.541 5.755-5.896 6.816-4.986 0-.732 15.533.355 15.533 1.994 1.245 0 2.844 4.466 2.166 4.466l-.818 74.002c-.176-2.587 1.127 4.978-3.629 8.278l16.781.645c-3.037.119-5.878-6.727-5.253-9.637l.236-32.435c-.137.203.182-27.013-.092-37.605-.248-1.526-.494-6.052 1.614-8.152-.36-1.841 10.908-1.364 25.182-1.43 24.775-.115 58.789.049 57.62.129 2.578.277 4.857 2.982 4.857 2.982-.284 0 1.173 4.284.764 6.908.568-.116 2.812-2.161 2.716-2.257-.974.585 14.366-37.591 11.691-38.969 0 0-34.636.233-205.273.191-87.64-.022-252.342-.097-252.342-.097-15.534.202-19.055 11.431-18.89 17.568z"
						/>
						<path
							fill="#ffffff"
							d="M414.05 494.656l.001 75.38c.128 3.802.415 5.022 5.61 4.835-.091-.242 220.731.382 221.102-.785 4.545.233 6.567-1.344 7.816-4.365.595-.028 40.385-79.121 39.355-79.656l-149.445-.045-.997 6.08 12.28 1.179c-.346-.524-52.728 67.095-52.387 67.457-1.841 2.448-4.796 4.292-8.534 4.367l-10.901-.258c-.162-.242 50.44-68.165 50.567-67.974.936-1.913 5.924-5.227 8.98-4.798l2.714-6.081c0-.109-121.119-.019-121.119.013-4.473.012-5.219 1.973-5.042 4.651z"
						/>
						<path
							fill="#1cf8fd"
							d="M745.969 687.646c.034.193-10.451 15.171-11.633 16.065-1.011 1.405-3.659 2.181-7.041 2.194l-52.433-.954c-2.585.026-4.847 1.928-4.819 5.43l-.142-16.08c.291 3.218 1.55 4.483 4.074 4.587l53.122.147c5.913.018 7.754-3.851 8.28-5.991.463-1.256 1.581-2.825 2.775-3.462 1.974-1.334 5.073-1.778 7.799-1.965 0-.029-.001.03.012.025M684.99 330.193c132.663-132.353 256.401-172.361 299.259-141.2 90.61 55.918-.014 314.893-133.298 515.871l.29-197.236c33.087-87.468 43.929-149.158 13.51-191.488-24.663-21.203-58.445-29.793-130.845 13.838"
						/>
						<path
							fill="#1cf8fd"
							d="M441.407 980.733c-36.998.225-389.497.505-389.497.505-7.486.249-14.576-4.08-9.933-12.341 0 0 62.143-125.297 70.407-140.206 4.054-7.314 11.492-10.693 20.168-10.708 125.062-.213 249.385-.713 373.608.236 11.006.084 9.962-1.965 9.94-9.149-.078-24.833-.024-49.666-.032-74.499-.002-6.636-.83-7.475-7.194-7.495-76.349-.243-218.019.454-229.654-.214-4.091 1.681-18.253-5.48-18.227-18.24.237-117.998.176-235.996.08-353.994-.01-12.719 9.503-18.784 16.496-17.041-1.037-3.11 580.177-1.772 580.178-1.771 10.727.366 11.482-.076 13.843 11.923.123 0 2.647 17.522 2.441 17.522.626 4.215-3.089 5.264-9.1 5.056 0 0-375.42-.198-562.74-.243-9.404-.002-8.101-.304-8.121 8.572-.514-.094.725 317.473 1.145 311.923 1.151 2.796 5.118 4.018 7.914 3.36l222.495-.854c13.148-.945 24.134 4 24.42 17.985.17 0-.379 102.206-.953 122.31-.306 10.729-5.014 16.302-15.76 16.373-117.515.778-390.01-.605-389.63 1.515-4.325-.814-7.217 2.992-8.045 4.627 0 0-36.298 71.209-43.983 86.651-2.766 5.557-1.872 5.367 4.307 5.368 52.166.009 397.991-1.008 409.283.498-2.119 4.12-4.525 5.76-45.858 29.113-5.771 2.54-11.747 3.18-17.998 3.218z"
						/>
						<path
							fill="#1cf8fd"
							d="M843.738 528.566l.406 177.129c.07 3.494-1.128 11.759-4.226 16.365-9.01 23.133-100.321 139.166-125.309 167.209-7.427 19.33-299.729 346.117-422.144 269.008-49.106-30.932-35.303-112.254-24.753-168.014.568-2.347 3.124-3.798 6.467-3.493l61.618.172c16.367-.234 16.977-.248 24.196 5.313 3.579 5.069 26.445 12.729 41.19 11.167 60.473-6.408 126.337-57.838 152.44-83.066 76.606-62.959 148.673-158.93 180.994-203.228.809-1.472 3.567-4.936 7.059-3.765 11.599 5.554 19.79-3.157 21.055-6.543 1.988-5.321 2.751-12.334-4.899-19.865-.657-1.384-.601-3.631.27-4.869 3.52-5.085 85.381-149.238 82.708-151.485 0 0 3.057-1.992 2.928-2.035z"
						/>
						<path
							fill="#1cf8fd"
							d="M281.555 941.04c-.078-3.913 23.708-68.47 28.369-78.733 2.029-4.468 4.699-6.607 9.857-6.225 8.475.629 26.132.635 26.132.635-8.665 36.494-10.016 48.14-9.923 80.151.114 0 .147 4.327-3.207 4.32-16.771-.035-33.806-.148-51.228-.148zM335.04 806c4.538-8.924 29.036-55.047 36.379-68.965 1.917-3.633 4.351-5.432 8.612-5.11 4.305.326 8.655.072 13.944.072-2.434 5.696-23.694 55.284-31.859 74.896-1.53 3.675-4.123 4.937-7.541 5.052-5.327.18-10.669.178-15.996.009-4.615-.147-5.631-1.839-3.539-5.954zM463.332 613.756c-2.098 2.182-38.9 63.537-40.836 67.3-2.742 5.328-6.754 8.061-13.066 6.989-2.745-.466-5.636-.078-9.338-.078 2.083-5.182 30.273-50.669 42.281-68.443 4.9-7.252 11.927-9.448 20.959-5.768zM598.273 444.224c-7.867 9.055-17.853 8.303-29.23 7.344 5.473-6.238 57.389-63.438 65.453-72.599 2.598-2.952 5.614-4.177 9.595-4.061 8.073.236 16.157.07 25.589.07-.256 2.201-64.946 61.756-71.407 69.246zM1042.167 338.557c5.153 3.436 5.113 4.332 11.22 12.347 34.933 67.599 53.151 106.84 98.736 198.131 5.619 11.253 4.567 10.335 6.858 23.059l-.054 387.19c-.7 12.342-7.121 21.559-18.254 21.623.629.21-393.026.183-393.906-.11-8.829-.97-14.299-6.913-15.819-16.191 0 0-.678-74.84.051-81.729.449-4.244 28.505-37.717 28.706-38.029.328-.509 3.643-2.749 3.643-2.749s1.474 3.467 1.624 4.446c.121.787-.819 92.21-.819 92.21-.606 6.914.468 8.019 5.981 8.255-.872-.872 66.759-.015 67.763.989 4.921-.341 4.954-1.414 5.067-6.244l-.031-205.239c.88-7.223 3.396-12.053 8.295-17.86l.592 4.851.2 219.412c.094 4.07 2.061 4.163 4.509 4.056 17.087-.725 74.849.83 74.849.831 6.294.534 8.341-1.656 8.567-7.232l.025-208.945c.741-7.424-12.074-15.599-9.6-14.882l25.868-.615c3.138-2.339-10.821 9.856-10.161 15.59l-.034 213.073c-.006.511.045 1.556.575 1.646 27.68 2.89 91.768 1.355 91.96.393 2.811-.411 3.511-.551 3.36-3.384l-.018-214.427c.438-7.034-10.437-11.146-9.67-12.743l23.895.83c3.7-2.108-7.213 4.159-6.994 11.847l-.191 213.73c.432 2.725 2.446 4.547 5.776 4.223l65.42.171c4.898-1.41 5.11-1.45 5.075-5.96 0-15.865-.201-332.597-.201-332.597.461-7.049-.993-8.632-6.913-8.58 0 0-175.363.027-177.546-.033-6.136.6-15.988-4.054-12.006-15.079-.009.055 28.348-55.145 28.99-54.719.602 0 .392 32.363.392 32.363.112 3.796 1.854 4.376 4.198 4.405l154.638.903c4.827-1.257 8.51-2.303 6.361-7.607l-95.864-187.794c-.57-.799-3.017-2.153-4.476-2.339-2.848-.364-4.571.252-6.185-.428-.633-.063-1.691-1.63-1.675-3.703l5.622-25.356c1.145-2.28 2.422-3.203 4.368-3.496 8.38-1.126 16.979.797 17.233 1.496z"
						/>
						<circle fill="#1cf8fd" cx="1044.094" cy="707.154" r="15.885" />
						<circle fill="#1cf8fd" cx="942.987" cy="707.735" r="15.885" />
					</svg>
					<div className={styles.links}>
						<div className={styles.twitter}>
							<a style={{ textDecoration: "none" }} href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club" target="_blank" rel="noopener noreferrer">
								<span>
									<span style={{ whiteSpace: "nowrap" }}>公式𝕏</span>
								</span>
							</a>
						</div>
						<div className={styles.youtube}>
							<a href="https://www.youtube.com/channel/UCMx0SnqChPhp4rapoqgan3g?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
								<span>
									<span style={{ whiteSpace: "nowrap" }}>公式YouTube</span>
								</span>
							</a>
						</div>
						<div className={styles.kaigyou} />

						<div className={styles.tokokitahp}>
							<a href="https://tokokita-h.spec.ed.jp/" target="_blank" rel="noopener noreferrer">
								<span style={{ whiteSpace: "nowrap" }}>所北HP</span>
							</a>
						</div>
						<div className={styles.github}>
							<a href="https://github.com/tokokitabutsuri/HP" target="_blank" rel="noopener noreferrer">
								<span style={{ whiteSpace: "nowrap" }}>
									<img height="20px" width="20px" src="/images/github-mark-white.svg" style={{ marginRight: "3px" }} alt="Git" />
									<img height="22px" width="57px" src="/images/github-logo-white.svg" alt="hub" />
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
					<NotifyButton />
				</div>
			</div>
		</>
	);
}

export const metadata: Metadata = {
	title: "所沢北高校物理部公式HP トップページ",
	description: "所沢北高校（通称所北）物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。無料で遊べるブラウザゲームも公開予定です。PWAとプッシュ通知にも対応しています。",
	openGraph: {
		type: "website",
		url: "https://tkbutsuribu.vercel.app/index.html",
		locale: "ja_JP",
		title: "所沢北高校物理部公式HP",
		description: "所沢北高校物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。無料で遊べるブラウザゲームも公開予定です。",
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
		description: "所沢北高校物理部の公式HPです。役立つ情報や日常のつぶやきなどを発信していきます。",
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
		icon: ["/favicon.ico", { url: "/images/iconmain.svg", type: "image/svg+xml" }],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.webmanifest",
	appleWebApp: {
		startupImage: [
			{ url: "/splashscreens/iphone5_splash.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/iphone6_splash.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/iphoneplus_splash.png", media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" },
			{ url: "/splashscreens/iphonex_splash.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" },
			{ url: "/splashscreens/iphonexr_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/iphonexsmax_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" },
			{ url: "/splashscreens/ipad_splash.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/ipadpro1_splash.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/ipadpro3_splash.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/ipadpro2_splash.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" },
			{ url: "/splashscreens/2732x2048.png", media: "(device-width: 2732px) and (device-height: 2048px)" },
			{ url: "/splashscreens/2688x1242.png", media: "(device-width: 2688px) and (device-height: 1242px)" },
			{ url: "/splashscreens/2436x1125.png", media: "(device-width: 2436px) and (device-height: 1125px)" },
			{ url: "/splashscreens/2224x1668.png", media: "(device-width: 2224px) and (device-height: 1668px)" },
			{ url: "/splashscreens/2208x1242.png", media: "(device-width: 2208px) and (device-height: 1242px)" },
			{ url: "/splashscreens/2048x2732.png", media: "(device-width: 2048px) and (device-height: 2732px)" },
			{ url: "/splashscreens/2048x1536.png", media: "(device-width: 2048px) and (device-height: 1536px)" },
			{ url: "/splashscreens/2048x1496.png", media: "(device-width: 2048px) and (device-height: 1496px)" },
			{ url: "/splashscreens/1792x828.png", media: "(device-width: 1792px) and (device-height: 828px)" },
			{ url: "/splashscreens/1668x2224.png", media: "(device-width: 1668px) and (device-height: 2224px)" },
			{ url: "/splashscreens/1536x2048.png", media: "(device-width: 1536px) and (device-height: 2048px)" },
			{ url: "/splashscreens/1536x2008.png", media: "(device-width: 1536px) and (device-height: 2008px)" },
			{ url: "/splashscreens/1334x750.png", media: "(device-width: 1334px) and (device-height: 750px)" },
			{ url: "/splashscreens/1242x2688.png", media: "(device-width: 1242px) and (device-height: 2688px)" },
			{ url: "/splashscreens/1242x2208.png", media: "(device-width: 1242px) and (device-height: 2208px)" },
			{ url: "/splashscreens/1125x2436.png", media: "(device-width: 1125px) and (device-height: 2436px)" },
			{ url: "/splashscreens/1024x768.png", media: "(device-width: 1024px) and (device-height: 768px)" },
			{ url: "/splashscreens/1024x748.png", media: "(device-width: 1024px) and (device-height: 748px)" },
			{ url: "/splashscreens/828x1792.png", media: "(device-width: 828px) and (device-height: 1792px)" },
			{ url: "/splashscreens/768x1024.png", media: "(device-width: 768px) and (device-height: 1024px)" },
			{ url: "/splashscreens/768x1004.png", media: "(device-width: 768px) and (device-height: 1004px)" },
			{ url: "/splashscreens/750x1334.png", media: "(device-width: 750px) and (device-height: 1334px)" },
			{ url: "/splashscreens/640x1136.png", media: "(device-width: 640px) and (device-height: 1136px)" },
			{ url: "/splashscreens/640x960.png", media: "(device-width: 640px) and (device-height: 960px)" },
			{ url: "/splashscreens/320x480.png", media: "(device-width: 320px) and (device-height: 480px)" },
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
