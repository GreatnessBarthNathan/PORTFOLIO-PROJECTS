import React from "react"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import AboutMe from "./Pages/AboutMe"
import Skills from "./Pages/Skills"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div id='wrapper'>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />

      <Projects />
    </div>
  )
}

export default App
