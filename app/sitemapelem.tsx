import React from "react";
import styles from './sitemapelem.module.css'

export default function ({ url, name }) {
  return (
    <li className={styles.li}>
      <a href={url} className={styles.a}>
        <div className={styles.div}>{name}</div>
      </a>
    </li>
  );
}
