import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import React from "react";
import style from "./stylesheet.module.css";

// const date = new Date();
// const currentTime = date.toLocaleString();
// await kv.set(request.body.token, currentTime, { ex: 5184000 });
// errormessage.push("kv success");
export default async function counter() {
  try {
    let ip: string =
      Math.round(Math.random() * 100).toString();

    console.log('ip:'+ip);
    const idindex = await kv.lpos("users", ip);
    console.log('index:'+idindex);
    if (!Number.isInteger(idindex)) {
      await kv.lpush("users", id);
      await kv.incr("count");
	  console.log('incr')
    }

    let ret: React.JSX.Element[] = [];
    const getcount: string = await kv.get("count");
    console.log('count:'+getcount);
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
    console.warn(e);
    console.warn("at counter.tsx");
    return (
      <>
        <li className={style.number}>x</li>
      </>
    );
  }
}
