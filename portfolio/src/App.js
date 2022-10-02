import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import AboutMe from "./Pages/AboutMe"
import Skills from "./Pages/Skills"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar"

// import App-provider
import AppProvider from "./Context"

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route exact path='/*' element={<Error />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
