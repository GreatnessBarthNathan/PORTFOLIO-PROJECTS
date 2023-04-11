import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const Contact = () => {
  return (
    <div id='contact' className='bg-blue-100 pt-10 pb-5 reveal'>
      <h2 className='text-2xl pt-20 text-center font-bold md:text-5xl'>
        Hello, <span className='text-red-500'>Reach out</span>
      </h2>
      <div className='mt-10 w-full mx-auto flex flex-col sm:w-4/5 md:flex-row px-2 sm:px-0 md:space-x-10 items-center'>
        {/* DETAILS */}
        <div className='w-full md:w-1/2 reveal'>
          <img
            src='https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d9eb59b1a0436a05f0006c5_reading-side.svg'
            alt=''
          />
        </div>
        {/* FORM */}
        <div className=' w-full md:w-1/2 z-10 reveal'>
          {/* Social Links */}
          <div className='flex justify-between space-x-2 md:space-x-4'>
            <a
              href='www.linkedin.com/in/bartholomew-ekemezie'
              className='bg-blue-600 py-2 px-4 text-white rounded-md flex items-center justify-center space-x-2 w-1/3 hover:bg-blue-800 ease-in-out duration-300'
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href='https://github.com/GreatnessBarthNathan/PORTFOLIO-PROJECTS'
              className='bg-black py-2 px-4 text-white rounded-md flex items-center justify-center space-x-2 w-1/3 hover:bg-slate-800 ease-in-out duration-300'
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              href='https://gmail.com'
              className='bg-red-500 py-2 px-4 text-white rounded-md flex items-center justify-center space-x-2 w-1/3 hover:bg-red-700 ease-in-out duration-300'
            >
              <SiGmail />
              <span>Gmail</span>
            </a>
          </div>
          <form action='' className='flex flex-col space-y-5 mt-10'>
            <input
              type='text'
              required
              placeholder='Full Name'
              className='p-2 rounded-md border-2 focus:outline-none focus:border-sky-500'
            />
            <input
              type='email'
              required
              placeholder='Email'
              className='p-2 rounded-md border-2 focus:outline-none focus:border-sky-500'
            />
            <input
              type='number'
              required
              placeholder='Tel'
              className='p-2 rounded-md border-2 focus:outline-none focus:border-sky-500'
            />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Your message'
              className='rounded-md p-2 border-2 focus:outline-none focus:border-sky-500'
            ></textarea>
            <button className='bg-red-500 py-2 px-4 text-white rounded-md hover:bg-red-700 ease-in-out duration-300'>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <p className='text-xs text-center mt-20 text-slate-600 sm:text-base'>
        Designed and built by Bartholomew Ekemezie, 2022 All rights reserved
      </p>
    </div>
  )
}

export default Contact
