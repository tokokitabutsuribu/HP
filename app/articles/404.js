import styles from './404.module.css'
export default function(){
    return(
        <>
        <title>ページないよ(泣)-所北物理部</title>
        <div style={{backgroundColor:'#fed700',height:'100vh',width:'100vw',position:'static',top:'0',bottom:'0',right:'0',left:'0',zIndex:'10000'}}>
        <div style={{height: '1em', textAlign: 'left',display: 'block'}}>404 Not Found</div>
    <div className={styles.wrapper} style={{height: 'calc(100vh-1em)'}}>
        <div className={styles.content} style={{height: 'fit-content',width: 'fit-content'}}>
            <h1 className={styles.h1}>
                <nobr>ページないよ(泣)</nobr>
            </h1>
            <div className={styles.image}><img src="https://tkbutsuribu.vercel.app/ms404.JPG" alt="404姉さん" width="256" height="256" /></div>
            <a href="#" onclick="window.history.back(); return false;">戻る</a>
        </div>
    </div>
    </div>
    </>
    )
}