export default async function Header() {
    return (
        <div id="wrapper">
            <nav id="global-navi">
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

            <style jsx>{`
            #wrapper{
                height:88px;
            }

            .toplink a img{
                margin-top:5px;
            }

            #global-navi {
                display: block;
                height: fit-content;
                background: #333;
                position: fixed;
                top: 0;
                right: 0px;
                width: 100%;
                align-items: flex-end;
                flex-wrap: wrap;
                z-index:2147483647
            }
    
            #wrapper nav ul li {
                display: block;
                font-size: 16px;
                padding: 0px;
                margin: 0px;
                width: auto;
                justify-content: space-evenly;
    
            }
    
            #wrapper nav ul li a {
                color: #ddd;
                text-decoration: none;
    
            }
    
            .toplink {
                display: flex;
                margin-left: 20px;
                width: 300px;
                color: #ddd;
                text-decoration: none;
                font-size: 32px;
                text-align: left;
                align-items: center;
            }
    
            .toplink a {
                display: flex;
                text-align: end;
                align-items: center;
                text-decoration: none;
                color: white;
            }
    
            .toplink img {
                padding: auto;
            }
    
            .menu {
                display: flex;
                width: 100%;
                justify-content: space-evenly;
                margin: 0px;
                padding: 0px;
            }
    
            .main {
                flex: auto;
            }
    
            body {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                margin: 0;
                font-family: monospace, sans-serif !important;
            }
            `}</style>
        </div>
    )
}