import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { BsCode, BsCodeSlash } from "react-icons/bs"
import { useGlobalContext } from "../Context/index"

function Navbar() {
  const { toggleLinks, showLinks } = useGlobalContext()
  const linksRef = useRef(null)
  const linksContainer = useRef(null)

  function show() {
    toggleLinks()
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainer.current.style.height = `${linksHeight}px`
    } else {
      linksContainer.current.style.height = `${0}px`
    }
  }
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-me'>About Me</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </div>

      <button className='nav-toggle' onClick={show}>
        <FaBars />
      </button>
    </div>
  )
}

export default Navbar
