"use client";

import React from "react";
import { useEffect } from "react";
import style from "./stylesheet.module.css";

export default function () {
  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      document.getElementById("pwatoolbar").style.display = "block";
      document.getElementById("wrapper").style.marginTop = "32px";
    }
  });

  return (
    <div id="pwatoolbar" style={{ display: "none" }}>
      <button
        type="button"
        onClick={() => {
          history.back();
        }}
      >
        <img src="/images/left.svg" width="16px" alt="back" />
      </button>
      <button
        type="button"
        onClick={() => {
          location.reload();
        }}
      >
        <img src="/images/reload.svg" width="19px" alt="reload" />
      </button>
    </div>
  );
}
