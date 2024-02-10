import styles from './404.module.css';
export default function () {
    try {
        return (
            <>
                <title>ページないよ(泣)-所北物理部</title>
                <div style={{ backgroundColor: '#fed700', height: '100vh', width: '100vw', position: 'fixed', top: '0', bottom: '0', right: '0', left: '0', zIndex: '10000' }}>
                    <div style={{ height: '1em', textAlign: 'left', display: 'block' }}>404 Not Found</div>
                    <div className={styles.wrapper} style={{ height: 'calc(100vh-1em)' }}>
                        <div className={styles.content} style={{ height: 'fit-content', width: 'fit-content' }}>
                            <h1 className={styles.h1}>
                                <span style="white-space: nowrap;">ページないよ(泣)</span>
                            </h1>
                            <div className={styles.image}><img src="https://tkbutsuribu.vercel.app/ms404.JPG" alt="404姉さん" width="256" height="256" /></div>
                            <button type='button' id='back' onclick="window.history.back()">戻る</button>
                        </div>
                    </div>
                </div >
            </>
        );
    } catch (e) {
        console.log(e);
        console.log("at 404.js");
        return <><div /></>;
    }
}