import React, { useRef } from "react"
import { FaBars, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

function Navbar() {
  const linksRef = useRef(null)
  const linksContainer = useRef(null)

  return (
    <div className='navbar'>
      <div className='logo'>
        <FaAngleDoubleLeft />
        <span>GBN</span>
        <FaAngleDoubleRight />
      </div>
      <div className='links-container' ref={linksContainer}>
        <ul className='links' ref={linksRef}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
