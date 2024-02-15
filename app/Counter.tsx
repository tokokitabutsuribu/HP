import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import React, { useEffect } from "react";
import style from "./stylesheet.module.css";
import headers from "next/headers";
import crypto from "crypto";
// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
export default async function counter() {
  try {
    let id: string;
    if (cookies().has("counterID")) {
      id = cookies().get("counterID").value;
    } else {
      id=      crypto.randomUUID();
      useEffect(()=>{
        document.cookie=`counterID=${id}`
      },[])
    }
    console.log(`id:+${id}`);
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
      ret.push(<li className={style.number}>{getcount[i]}</li>);
    }
    for (; i < 6; i++) {
      ret.push(<li className={style.number}>0</li>);
    }
    console.log(ret);
    return <>{ret}</>;
  } catch (e) {
    console.log(`at counter.tsx\n\n${e}`);
    return (
      <>
        <li className={style.number}>x</li>
      </>
    );
  }
}
