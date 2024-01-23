"use client"

import { useEffect } from 'react'
import Prism from './prism.js'

export default function myprism(){
    useEffect(() => {
        Prism.highlightAll();
      })
    return <span></span>
}