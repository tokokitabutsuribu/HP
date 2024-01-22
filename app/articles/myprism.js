"use client"

import { useEffect } from 'react'
import Prism from './prism.js'

export default function(){
    useEffect(() => {
        Prism.highlightAll();
      })
    return <></>
}