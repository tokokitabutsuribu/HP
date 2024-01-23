"use client"

import { useEffect } from 'react'
import Prism from './prism.js'

export function myprism(){
    useEffect(() => {
        Prism.highlightAll();
      })
}