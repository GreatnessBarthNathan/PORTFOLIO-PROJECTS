import React, { useRef, useState } from "react"
import { FaBars, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

function Navbar({ actions }) {
  const linksRef = useRef(null)
  const linksContainer = useRef(null)
  const { shownav } = actions

  function setNavigation(e) {
    e.preventDefault()
    const scrollheight = window.scrollY
    const navbar = document.getElementById("navbar")
    const navHeight = navbar.getBoundingClientRect().height
    const id = e.target.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop - navHeight
    if (!shownav) {
      position = position - navHeight
      window.scrollTo({
        left: 0,
        top: position,
      })
    } else {
      window.scrollTo({
        left: 0,
        top: position,
      })
    }
  }
  return (
    <div id='navbar' className={shownav ? "fixed-nav" : "navbar"}>
      <div className='logo'>
        <FaAngleDoubleLeft />
        <span>GBN</span>
        <FaAngleDoubleRight />
      </div>
      <div className='links-container' ref={linksContainer}>
        <ul className='links' ref={linksRef}>
          <li>
            <a href='#home' onClick={setNavigation}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' onClick={setNavigation}>
              About Me
            </a>
          </li>
          <li>
            <a href='#skills' onClick={setNavigation}>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' onClick={setNavigation}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
