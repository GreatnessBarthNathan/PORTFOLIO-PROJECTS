import React from "react"
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../../context"

const Navbar = () => {
  const {
    hoverLink,
    removeSubmenu,
    active,
    showSubmenu,
    toggleSidebar,
    showSidebar,
  } = useGlobalContext()

  return (
    <div className='navbar' onMouseOver={removeSubmenu}>
      <div className='logo'>
        <h2>Goal</h2>
        <h1 className='ball'>.</h1>
      </div>
      <div className='nav-btns'>
        <a href='#'>Live Scores</a>
        <a href='#'>Breaking News</a>
        <a href='#'>Transfers</a>
        <a href='#' onMouseOver={hoverLink} className='show'>
          Culture
          <FaCaretDown
            className={active === "Culture" ? "angle" : "no-angle"}
          />
        </a>
        <a href='#' onMouseOver={hoverLink} className='show'>
          Premier League
          <FaCaretDown
            className={active === "Premier League" ? "angle" : "no-angle"}
          />
        </a>
        <a href='#' onMouseOver={hoverLink} className='show'>
          Nigeria
          <FaCaretDown
            className={active === "Nigeria" ? "angle" : "no-angle"}
          />
        </a>
        <a href='#' onMouseOver={hoverLink} className='show'>
          Africa
          <FaCaretDown className={active === "Africa" ? "angle" : "no-angle"} />
        </a>
        <a href='#'>GOAL STUDIO</a>
        <a href='#' onMouseOver={hoverLink} className='show'>
          La Liga
          <FaCaretDown
            className={active === "La Liga" ? "angle" : "no-angle"}
          />
        </a>
        <a href='#' onMouseOver={hoverLink} className='show'>
          More
          <FaCaretDown className={active === "More" ? "angle" : "no-angle"} />
        </a>
      </div>
      <button className='toggle-btn' onClick={toggleSidebar}>
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  )
}

export default Navbar
