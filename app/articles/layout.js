import './article.css'
import { useEffect } from 'react'
import Prism from './prism.js'
import './prism.css'

export default function RootLayout({
  children,
}) {
  useEffect(() => {
    Prism.highlightAll();
  })
  return (
    <div class="main line-numbers" style={{ textAlign: 'left' }}>
      {children}
    </div>
  );
}