import Header from '../header'
import Footer from '../footer'
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
    <div className="top main line-numbers" style={{ textAlign: 'left' }}>
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