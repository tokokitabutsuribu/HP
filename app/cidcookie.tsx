"use client"
import React from 'react'
import { useEffect } from "react"


export default function(id:string){
    useEffect(()=>{
        document.cookie=`counterID=${id}`
      },[id])
    return <></>
}