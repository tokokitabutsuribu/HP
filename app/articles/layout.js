import './article.css'
//import './prism.css'
import MyPrism from './myprism.js'

export default function RootLayout({
  children,
}) {
  return (
    <>
    <div class="main line-numbers" style={{ textAlign: 'left' }}>
      {children}
    </div>
    <MyPrism />
    </>
  );
}