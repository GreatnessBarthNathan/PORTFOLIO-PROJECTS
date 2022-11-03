import React, { useState, useEffect, useRef } from "react"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import AboutMe from "./Pages/AboutMe"
import Skills from "./Pages/Skills"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  const [shownav, setShownav] = useState(false)
  const wrapRef = useRef(null)
  function setFixedNav() {
    const navbar = document.getElementById("navbar")
    const navHeight = navbar.getBoundingClientRect().height
    const scrollHeight = window.scrollY
    if (scrollHeight > navHeight) {
      setShownav(true)
    } else {
      setShownav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixedNav)
    return () => window.removeEventListener("scroll", setFixedNav)
  })
  return (
    <div id='wrapper' ref={wrapRef}>
      <Navbar actions={{ shownav }} />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
