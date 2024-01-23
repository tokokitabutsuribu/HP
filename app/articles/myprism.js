"use client"

import { useEffect } from 'react'
import Prism from '/articles/prism.js'

export default function myprism() {
  useEffect(() => {
    try {
      Prism.highlightAll();
    } catch (e) {
      window.alert(e);
    }
  })
  return <span></span>
}