import React from "react"
import style from './stylesheet.module.css'


export default function page() {
    return (<><div id="pwatoolbar" style={{display:"none",}}>
    <button type="button" onClick={()=>{history.back()}}><img src="/images/left.svg" width="16px" alt="back" /></button>
    <button type="button" onClick={()=>{location.reload()}}><img src="/images/reload.svg" width="19px" alt="reload" /></button>
</div>
<div id="wrapper">
    <div id="content1">
        <div id="main">
            <div style={{display: "flex",alignItems: "center",justifyContent: "center",gap: "clamp(0px,12vw,25px)"}}>
                <a href="/articles/osirase.html"
                    style={{height: "fit-content", whiteSpace: "nowrap", textAlign: "left",backgroundColor: "darkblue",color: "white",textDecoration: "none",padding:"5px",marginRight: "10px",}}>お知らせ</a>
                <ul className={style.accessCount} id="access-counter" style={{fontSize: "0px",}}>
                    <li style={{marginRight:"5px"}} id="count1">あなたは</li>
                    <li style={{marginLeft: "5px"}} id="count2">人目の来訪者です</li>
                </ul>
                <style>
                    
                </style>
                <a href="/index.html?noeffect" id="noeffect"
                    style={{display: "none", textAlign: "left",backgroundColor: "lightblue",color: "darkgreen",textDecoration: "none",padding:"5px",marginLeft: "10px",}}>エフェクトオフ</a>
            </div>
            <div className={style.title}>
                <h1>
                    <span style={{whiteSpace:'nowrap'}} id="title1">所沢北高校物理部のサイトへ</span>
                    <span style={{whiteSpace:'nowrap'}} id="title2">ようこそ！</span>
                </h1>
            </div>
        </div>
        <img id="mainicon" src="/images/iconmain.svg" width="320" height="320" alt="物理部ロゴ" />
        <div className={style.links}>
            <div className={style.twitter}>
                <a style={{textDecoration: "none"}}
                    href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club"
                    target="_blank" rel="noopener noreferrer"><span>
                        <span style={{whiteSpace:'nowrap'}}>𝕏 フォローする</span>
                    </span></a>
            </div>
            <div className={style.youtube}>
                <a href="https://www.youtube.com/channel/UCMx0SnqChPhp4rapoqgan3g?sub_confirmation=1"
                    target="_blank" rel="noopener noreferrer"><span>
                        <span style={{whiteSpace:'nowrap'}}>公式YouTube</span>
                    </span></a>
            </div>
            <div id="kaigyou"></div>

            <div className={style.tokokitahp}>
                <a href="https://tokokita-h.spec.ed.jp/" target="_blank" rel="noopener noreferrer">
                    <span style={{whiteSpace:'nowrap'}}>所北HP</span>
                </a>
            </div>
            <div className={style.github}>
                <a href="https://github.com/tokokitabutsuri/HP" target="_blank" rel="noopener noreferrer">
                    <span style={{whiteSpace:'nowrap'}}><img height="20px" width="20px" src="/images/github-mark-white.svg"
                            style={{marginRight: "3px"}} alt="Git" /><img height="22px" width="57px"
                            src="/images/github-logo-white.svg" alt="hub" /></span>
                </a>
            </div>
        </div>
    </div>
    <div id="content2" style={{width:"400px"}}>
        <div id="sitemap">
            <table>
                <tr>
                    <td><a href="https://tkbutsuribu.vercel.app/about.html">概要</a></td>
                </tr><br />
                <tr>
                    <td><a href="https://tkbutsuribu.vercel.app/articles/index.html">記事一覧</a></td>
                </tr><br />
                <tr>
                    <td><a href="https://tkbutsuribu.vercel.app/games/index.html">ゲームスタジオ</a></td>
                </tr><br />
                <tr>
                    <td><a href="#.">掲示板(未完成)</a></td>
                </tr><br />
            </table>
        </div>
        <div id="buttons">
            <div id="InstallBtnForiOS" style={{width: "fit-content",}}>
                <label className={`${style.open} ${style.button}`} htmlFor="pop-up"><img height="16px" width="16px"
                        src="/images/installicon.svg" alt="install"
                        style={{maxHeight: "100%",width: "auto",margin:"0 5px 0 2px"}} />インストールする</label>
                <input type="checkbox" id="pop-up" />
                <div className={style.overlay}>
                    <label className={style.close2} htmlFor="pop-up" />
                    <div className={style.window}>
                        <label className={style.close} htmlFor="pop-up">閉じる</label>
                        <div className={style.popUpContent}>
                            <h4>インストール方法</h4>
                            <p>このサイトはPWAに対応しています。詳しくは<a href="https://tkbutsuribu.vercel.app/about.html#pwa">こちら</a>
                            </p>
                            <h5>iPhone、iPad、その他Apple製モバイル端末の場合</h5>
                            <p>共有メニューから「ホーム画面に追加」を押してください</p>
                            <h5>Mac、その他Apple製パソコンの場合</h5>
                            <p>メニューから「PWAのインストール」とかいうやつを押してください。</p>
                            <h5>アプリ内ブラウザの場合</h5>
                            <p>標準ブラウザで開いてください</p>
                            <h5>Android、Windowsの場合</h5>
                            <p>メニューから「このアプリをインストール」みたいなのを押してください。一度閉じてもう一度このボタンを押すとポップアップが出るかもしれないのでそちらからもできます。</p>
                            <h5>どれにも当てはまらない場合、上に書いてある通りにできない場合</h5>
                            <p>以下の方法をお試しください
                            <ul>
                                <li>ブラウザを最新版にする</li>
                                <li>別のブラウザでやってみる</li>
                                <li>再読み込みしてみる</li>
                                <li>既にインストールしてないか確かめる</li>
                            </ul>
                            それでも解決しない場合、お問い合わせください</p>
                        </div>
                    </div>
                </div>
            </div>
            <button id="InstallBtn" className={style.button} type="button" style={{display:"none"}}><img height="16px" width="16px"
                    src="/images/installicon.svg" alt="install"
                    style={{maxHeight: "100%",width: "auto",margin: "0 5px 0 2px"}} />インストールする</button>
            <button id="requestpermission" className={style.button} type="button" value="通知" style={{display: "block",}}><img
                    height="16px" width="16px" src="./images/notification.png" alt="notification"
                    style={{maxHeight: "100%",width: "auto",margin: "0 5px 0 2px"}} />通知を許可する</button>
        </div>
    </div>
</div></>)

}
