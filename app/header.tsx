import styles from "./header.module.css";
export default async function Header() {
	return (
		<div className={styles.wrapper}>
			<nav className={styles.globalNavi}>
				<span style={{whiteSpace:'nowrap'}}>
					<span className={styles.toplink}>
						<a href="https://tkbutsuribu.vercel.app/">
							<img className={styles.topimg} src="/icon-48x48.png" width="48" height="48" alt="logo" />
							<span>所沢北高校物理部</span>
						</a>
					</span>
				</span>
				<ul className={styles.menu}>
					<li>
						<span style={{whiteSpace:'nowrap'}}>
							<a href="https://tkbutsuribu.vercel.app/about.html">概要</a>
						</span>
					</li>
					<li>
						<span style={{whiteSpace:'nowrap'}}>
							<a href="https://tkbutsuribu.vercel.app/articles/index.html">記事</a>
						</span>
					</li>
					<li>
						<span style={{whiteSpace:'nowrap'}}>
							<a href="https://tkbutsuribu.vercel.app/games/index.html">スタジオ</a>
						</span>
					</li>
					<li>
						<span style={{whiteSpace:'nowrap'}}>
							<a href="https://tkbutsuribu.vercel.app/bbs/404.html">掲示板(未完成)</a>
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
}
