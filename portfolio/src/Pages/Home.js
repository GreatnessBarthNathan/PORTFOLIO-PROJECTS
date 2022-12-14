import React from "react"
import MyPicture from "../images/my-picture.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Home() {
  return (
    <section id='home'>
      <div className='content'>
        <img src={MyPicture} alt='my-image' className='my-picture' />
        <h1>Hi, My name is Bartholomew</h1>
        <p>
          A Modern Software Developer with a passion for learning, and building.
        </p>
        <div className='icons'>
          <a href='https://github.com/GreatnessBarthNathan' target='_blank'>
            <FaGithub />
          </a>
          <a
            href='https://linkedin.com/in/bartholomew-ekemezie-b7873691'
            target='_blank'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
