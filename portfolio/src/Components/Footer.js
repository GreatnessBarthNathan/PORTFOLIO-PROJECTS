import React from "react"
import { FaGithub, FaLinkedin, FaGmail } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const Footer = () => {
  return (
    <div id='footer'>
      <div>
        <a href='https://github.com/GreatnessBarthNathan'>
          <FaGithub />
        </a>
        <a href='https://linkedin.com/in/bartholomew-ekemezie-b7873691'>
          <FaLinkedin />
        </a>
      </div>

      <div>
        <h3>Contact</h3>
        <p>Telephone: +234 816 270 0336</p>
        <p>Email: ekemeziebartholomew@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
