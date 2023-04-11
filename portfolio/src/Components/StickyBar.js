import React from "react"
import { BsGithub } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { RiArrowUpFill } from "react-icons/ri"
import { FiLinkedin } from "react-icons/fi"

const StickyBar = () => {
  return (
    <div className='fixed hidden bottom-10 px-4 md:flex justify-between w-full items-end'>
      {/* icons */}
      <div className='flex flex-col space-y-5'>
        <a href='www.linkedin.com/in/bartholomew-ekemezie' target='_blank'>
          <div className='bg-red-900 p-2 text-2xl text-white rounded-full border-2 border-red-900 hover:bg-transparent hover:text-red-900 ease-in-out duration-500'>
            <FiLinkedin />
          </div>
        </a>
        <a
          href='https://github.com/GreatnessBarthNathan/PORTFOLIO-PROJECTS'
          className='text-3xl text-red-900'
        >
          <div className='bg-red-900 p-2 text-2xl text-white rounded-full border-2 border-red-900 hover:bg-transparent hover:text-red-900 ease-in-out duration-500'>
            <BsGithub />
          </div>
        </a>
        <a href='https://gmail.com' className='text-3xl text-red-900'>
          <div className='bg-red-900 p-2 text-2xl text-white rounded-full border-2 border-red-900 hover:bg-transparent hover:text-red-900 ease-in-out duration-500'>
            <AiOutlineMail />
          </div>
        </a>
      </div>

      {/* back to top */}

      <a href='#home'>
        <div className='bg-red-900 p-2 text-2xl text-white rounded-full border-2 border-red-900 hover:bg-transparent hover:text-red-900 ease-in-out duration-500 '>
          <RiArrowUpFill />
        </div>
      </a>
    </div>
  )
}

export default StickyBar
