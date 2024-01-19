import styles from './header.module.css'
export default async function Header() {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.global-navi}>
                <nobr><span className={styles.toplink}><a href="https://tkbutsuribu.vercel.app/">
                    <img src="/icon-48x48.png" width="48" height="48" /><span>所北物理部</span></a></span></nobr>
                <ul className={styles.menu}>
                    <li>
                        <nobr><a href="https://tkbutsuribu.vercel.app/about.html">概要</a></nobr>
                    </li>
                    <li>
                        <nobr><a href="https://tkbutsuribu.vercel.app/articles/index.html">記事</a></nobr>
                    </li>
                    <li>
                        <nobr><a href="https://tkbutsuribu.vercel.app/games/index.html">スタジオ</a></nobr>
                    </li>
                    <li>
                        <nobr><a href="https://tkbutsuribu.vercel.app/bbs/404.html">掲示板(未完成)</a></nobr>
                    </li>
                </ul>
            </nav>
        </div>
    )
}