import React from "react";
import styles from "./stylesheet.module.css";
import NotifyButton from "./NotifyButton";
import PwaToolBar from "./PwaToolBar";
import Counter from "./Counter";

export default function page() {
  return (
    <>
      <PwaToolBar />
      <div className={styles.wrapper}>
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
              <Counter />
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
            <div className={styles.title}>
              <h1>
                <span
                  style={{ whiteSpace: "nowrap" }}
                  className={styles.title1}
                >
                  所沢北高校物理部のサイトへ
                </span>
                <span
                  style={{ whiteSpace: "nowrap" }}
                  className={styles.title2}
                >
                  ようこそ！
                </span>
              </h1>
            </div>
          </div>
          <img
            className={styles.mainicon}
            src="/images/iconmain.svg"
            width="320"
            height="320"
            alt="物理部ロゴ"
          />
          <div className={styles.links}>
            <div className={styles.twitter}>
              <a
                style={{ textDecoration: "none" }}
                href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETK_physics_club&region=follow_link&screen_name=TK_physics_club"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span style={{ whiteSpace: "nowrap" }}>𝕏 フォローする</span>
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
            <table>
              <tr>
                <td>
                  <a href="https://tkbutsuribu.vercel.app/about.html">概要</a>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <a href="https://tkbutsuribu.vercel.app/articles/index.html">
                    記事一覧
                  </a>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <a href="https://tkbutsuribu.vercel.app/games/index.html">
                    ゲームスタジオ
                  </a>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <a href="#.">掲示板(未完成)</a>
                </td>
              </tr>
              <br />
            </table>
          </div>
          <NotifyButton />
        </div>
      </div>
    </>
  );
}
