"use client"
import React from 'react'
import { useEffect } from "react"


export default function({cid}){
    useEffect(()=>{
        document.cookie=`counterID=${cid}`
      },[cid])
    return <></>
}