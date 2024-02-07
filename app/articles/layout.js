import Header from '../header.js'
import Footer from '../footer.js'
import './article.css'
import './prism.css'
import MyPrism from './myprism.js'

export default function RootLayout({
  children,
}) {
  try{
  return (
    <>
    <Header />
    <div class="top main line-numbers" style={{ textAlign: 'left' }}>
      {children}
    </div>
    <MyPrism />
    <Footer />
    </>
  );
}catch(e){
  console.log(e)
  console.log("at article layout")
  return{children}
}
}