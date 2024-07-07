import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"


function App() {

  return (
      <div>

          {/* <Home/> */}
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
          

      </div>
     
  
  )
}

export default App
