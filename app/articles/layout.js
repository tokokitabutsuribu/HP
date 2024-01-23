import './article.css'
import './prism.css'
import {myprism} from './myprism.js'

export default function RootLayout({
  children,
}) {
  myprism();
  return (
    <div class="main line-numbers" style={{ textAlign: 'left' }}>
      {children}
    </div>
  );
}