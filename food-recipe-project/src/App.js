import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

// COMPONENTS
import Navbar from './components/Navbar.js'
import Home from './pages/Home'
import About from './pages/About'
import SingleMeal from './pages/SingleMeal'
import Error from './pages/Error'

function App() {
 return <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/meal/:id' element={<SingleMeal/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </Router>
}

export default App;
