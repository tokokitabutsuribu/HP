"use client"
import { useEffect } from 'react';

export default function () {
    useEffect(()=>{
        document.getElementById('top').addEventListener('click',()=>{
            window.location.replace("#.top")
        })
    },[])
    return (
        <div id="top-wrapper">
            <button type="button" id="top">
                <div>
                    <span>
                        ↑<br />
                        TOP
                    </span>
                </div>
            </button>
        </div>
    )
}