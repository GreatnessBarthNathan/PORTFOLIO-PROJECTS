import React from 'react'
import {Link} from 'react-router-dom'

function Navbar () {
  return  <header className='navbar'>
       <div className="logo">
        <h1>special<span>meals</span></h1>
       </div>
       <ul>
        <li>
           <Link to='/'>Home</Link>
        </li>
        <li>
           <Link to='about'>About</Link>
        </li>
       </ul>
  </header>
}

export default Navbar