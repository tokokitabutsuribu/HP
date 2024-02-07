import styles from './footer.module.css';
export default async function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.twitter}>
                    <a href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club"
                        target="_blank" rel="noreferrer noopener"><span>
                            <nobr>𝕏 フォローする</nobr>
                        </span></a>
                </div>
                <div className={styles.youtube}>
                    <a href="https://www.youtube.com/channel/UCMx0SnqChPhp4rapoqgan3g?sub_confirmation=1" target="_blank"
                        rel="noreferrer noopener"><span>
                            <nobr>公式YouTube</nobr>
                        </span></a>
                </div>
                <div className={styles.tokokitahp}>
                    <a href="https://tokokita-h.spec.ed.jp/" target="_blank" rel="noreferrer noopener">
                        <nobr>所北HP</nobr>
                    </a>
                </div>
                <div className={styles.github}>
                    <a href="https://github.com/tokokitabutsuri/HP" target="_blank" rel="noreferrer noopener">
                        <nobr><img height="20px" src="/github-mark-white.svg" alt="" /><img
                            className={styles.githubImage} height="22px" src="/GitHub_Logo_White.png" alt="Github" /></nobr>
                    </a>
                </div>
            </div>
            <div className={styles.footermap}>
                <a href="https://tkbutsuribu.vercel.app/index.html">トップページ</a><br />
                <a href="https://tkbutsuribu.vercel.app/about.html">概要</a><br />
                <a href="https://tkbutsuribu.vercel.app/articles/index.html">記事一覧</a><br />
                <a href="https://tkbutsuribu.vercel.app/games/index.html">ゲームスタジオ</a><br />
                <a href="https://tkbutsuribu.vercel.app/bbs/404.html">掲示板(未完成)</a>
            </div>
        </div>
    );
}