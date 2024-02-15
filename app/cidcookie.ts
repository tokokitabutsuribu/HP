"use client"

import { useEffect } from "react"


export default function(id:string){
    useEffect(()=>{
        document.cookie=`counterID=${id}`
      },[id])
}