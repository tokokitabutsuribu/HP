import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import React from "react";
import styles from "./Counter.module.css";
import crypto from "crypto";
import Cidcookie from "./cidcookie";
// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
export default async function counter() {
  let cidc
  try {
    let id: string;
    cidc = <></>
    if (cookies().has("counterID")&&cookies().get("counterID").value!=="aaa") {
      id = cookies().get("counterID").value;
    } else {
      id = crypto.randomUUID();
      cidcookie(id);
      cidc=<Cidcookie />
    }
    console.log(`id:${id}`);
    const idindex = await kv.lpos("users", id);
    console.log(`index:${idindex}`);
    if (!Number.isInteger(idindex)) {
      await kv.lpush("users", id);
      await kv.incr("count");
      console.log("incr");
    }

    const ret: React.JSX.Element[] = [];
    const getcount: string = await kv.get("count");
    console.log(`count:${getcount}`);
    let i = 0;
    for (i = 0; i < getcount.length; i++) {
      ret.push(<li className={styles.number}>{getcount[i]}</li>);
    }
    for (; i < 6; i++) {
      ret.push(<li className={styles.number}>0</li>);
    }
    console.log(ret);
    return <>{ret}{cidc}</>;
  } catch (e) {
    console.warn(`at counter.tsx\n\n${e}`);
    return (
      <>
        <li className={styles.number}>x</li>{cidc}
      </>
    );
  }
}
