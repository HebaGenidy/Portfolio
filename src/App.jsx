import 'react'
import Navbar from '../Components/Nav'
import Header from '../Components/Header'
import About from '../Components/About'
import Services from '../Components/Services'
import MyWork from '../Components/MyWork'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}
