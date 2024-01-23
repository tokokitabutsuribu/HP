"use client"

import { useEffect } from 'react'
import Prism from 'prismjs'

export default function myprism() {
  useEffect(() => {
    try {
      Prism.highlightAll();
    } catch (e) {
      window.alert(e);
    }
  })
  return (<span>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://tkbutsuribu.vercel.app/jquery.arbitrary-anchor.js"></script>    
  </span>)
}