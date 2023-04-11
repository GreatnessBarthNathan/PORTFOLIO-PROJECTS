import React, { useState, useEffect, useRef } from "react"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import AboutMe from "./Pages/AboutMe"
import Skills from "./Pages/Skills"
import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import StickyBar from "./Components/StickyBar"
import SideBar from "./Components/SideBar"

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  const openSidebar = () => {
    setShowSidebar(true)
  }

  const closeSidebar = () => {
    setShowSidebar(false)
    console.log("sidebar close", showSidebar)
  }

  const revealContent = () => {
    const scrollHeight = window.pageYOffset
    const elements = document.querySelectorAll(".reveal")

    elements.forEach((item) => {
      const top = item.getBoundingClientRect().top + 50
      if (scrollHeight > top) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", revealContent)

    return () => {
      window.removeEventListener("scroll", revealContent)
    }
  })

  return (
    <div>
      <Navbar openSidebar={openSidebar} />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <StickyBar />
      <SideBar closeSidebar={closeSidebar} showSidebar={showSidebar} />
    </div>
  )
}

export default App
