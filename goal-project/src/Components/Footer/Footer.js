import React from "react"
import "../../styles/Footer.css"
import { useGlobalContext } from "../../context"

const Footer = () => {
  const { removeSubmenu } = useGlobalContext()
  return (
    <footer className='footer' onMouseOver={removeSubmenu}>
      <div className='footer-logo'>
        <h2>Goal</h2>
        <h1 className='footer-ball'>.</h1>
      </div>
      <div className='footer-links'>
        <a href='#'>Contact Us</a>
        <a href='#'>Terms of Service</a>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Privacy Settings</a>
        <a href='#'>Careers</a>
        <a href='#'>Goal App(Android)</a>
        <a href='#'>Goal App(iOS)</a>
        <a href='#'>Goal Live</a>
      </div>
      <div className='naija'>
        <img src='https://www.goal.com/img/flags/flag-ng.png' alt='' />
        <a href='#'>Nigeria</a>
      </div>
      <p>
        Copyright © 2022 GBN goal.com clone. This is not the original website
        but a clone designed by me @ekemeziebartholomew@gmail.com
      </p>
    </footer>
  )
}

export default Footer
