"use client";

import React from "react";
import style from './NotifyButton.module.css'

export default function () {
  return (
    <div id="buttons">
      <div id="InstallBtnForiOS" style={{ width: "fit-content" }}>
        <label className={`${style.open} ${style.button}`} htmlFor="pop-up">
          <img
            height="16px"
            width="16px"
            src="/images/installicon.svg"
            alt="install"
            style={{ maxHeight: "100%", width: "auto", margin: "0 5px 0 2px" }}
          />
          インストールする
        </label>
        <input type="checkbox" className={style.popUp} id="pop-up" />
        <div className={style.overlay}>
          <label className={style.close2} htmlFor="pop-up" />
          <div className={style.window}>
            <label className={style.close} htmlFor="pop-up">
              閉じる
            </label>
            <div className={style.popUpContent}>
              <h4>インストール方法</h4>
              <p>
                このサイトはPWAに対応しています。詳しくは
                <a href="https://tkbutsuribu.vercel.app/about.html#pwa">
                  こちら
                </a>
              </p>
              <h5>iPhone、iPad、その他Apple製モバイル端末の場合</h5>
              <p>共有メニューから「ホーム画面に追加」を押してください</p>
              <h5>Mac、その他Apple製パソコンの場合</h5>
              <p>
                メニューから「PWAのインストール」とかいうやつを押してください。
              </p>
              <h5>アプリ内ブラウザの場合</h5>
              <p>標準ブラウザで開いてください</p>
              <h5>Android、Windowsの場合</h5>
              <p>
                メニューから「このアプリをインストール」みたいなのを押してください。一度閉じてもう一度このボタンを押すとポップアップが出るかもしれないのでそちらからもできます。
              </p>
              <h5>
                どれにも当てはまらない場合、上に書いてある通りにできない場合
              </h5>
              <p>
                以下の方法をお試しください
                <ul>
                  <li>ブラウザを最新版にする</li>
                  <li>別のブラウザでやってみる</li>
                  <li>再読み込みしてみる</li>
                  <li>既にインストールしてないか確かめる</li>
                </ul>
                それでも解決しない場合、お問い合わせください
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        id="InstallBtn"
        className={style.button}
        type="button"
        style={{ display: "none" }}
      >
        <img
          height="16px"
          width="16px"
          src="/images/installicon.svg"
          alt="install"
          style={{ maxHeight: "100%", width: "auto", margin: "0 5px 0 2px" }}
        />
        インストールする
      </button>
      <button
        id="requestpermission"
        className={style.button}
        type="button"
        value="通知"
        style={{ display: "block" }}
      >
        <img
          height="16px"
          width="16px"
          src="./images/notification.png"
          alt="notification"
          style={{ maxHeight: "100%", width: "auto", margin: "0 5px 0 2px" }}
        />
        通知を許可する
      </button>
      <script src="/pwa.js" />
    </div>
  );
}
