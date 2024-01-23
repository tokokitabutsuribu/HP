"use client"

import { useEffect } from 'react'
//import Prism from './prism.js'

export default function myprism() {
  import Prism2 from '/articles/prism.js'
  useEffect(() => {
    try {
      Prism2.highlightAll();
      //Prism.highlightAll();
    } catch (e) {
      window.alert(e);
    }
  })
  return <span></span>
}