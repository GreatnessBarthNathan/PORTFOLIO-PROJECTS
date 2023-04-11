import React, { useRef, useState } from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { BiMenuAltRight } from "react-icons/bi"
import { navlinks } from "../nav-links/navlinks"

function Navbar({ openSidebar }) {
  // const linksRef = useRef(null)
  // const linksContainer = useRef(null)
  // const { shownav } = actions

  // function setNavigation(e) {
  //   e.preventDefault()
  //   const navbar = document.getElementById("navbar")
  //   const navHeight = navbar.getBoundingClientRect().height
  //   const id = e.target.getAttribute("href").slice(1)
  //   const element = document.getElementById(id)
  //   let position = element.offsetTop - navHeight
  //   if (!shownav) {
  //     position = position - navHeight
  //     window.scrollTo({
  //       left: 0,
  //       top: position,
  //     })
  //   } else {
  //     window.scrollTo({
  //       left: 0,
  //       top: position,
  //     })
  //   }
  // }
  return (
    <div className='fixed w-full left-0 top-0 bg-blue-100 flex justify-between h-16 px-4 z-20'>
      <div className='flex items-center text-red-900 font-bold text-3xl'>
        <FaAngleDoubleLeft />
        <span className='text-blue-900'>GBN</span>
        <FaAngleDoubleRight />
      </div>
      <div className='hidden flex items-center space-x-10 md:flex'>
        {navlinks.map((link, index) => {
          return (
            <a
              key={index}
              href={link.href}
              className='font-bold p-2 rounded-md hover:bg-red-400 hover:text-white  ease-in-out duration-500'
            >
              {link.link}
            </a>
          )
        })}
      </div>
      <button className='text-3xl block md:hidden' onClick={openSidebar}>
        <BiMenuAltRight />
      </button>
    </div>
  )
}

export default Navbar
