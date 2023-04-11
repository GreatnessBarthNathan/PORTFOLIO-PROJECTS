import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { navlinks } from "../nav-links/navlinks"

const SideBar = ({ closeSidebar, showSidebar }) => {
  return (
    <div
      className={`bg-blue-100 fixed h-screen w-full top-[0] left-[0] z-[20] flex flex-col items-center justify-center space-y-10 ${
        showSidebar ? "translate-x-[0]" : "translate-x-[100%]"
      } ease-in-out duration-500`}
    >
      {navlinks.map((link, index) => {
        return (
          <a
            key={index}
            href={link.href}
            className='font-bold p-2 text-2xl rounded-md hover:bg-red-400 hover:text-white ease-in-out duration-500 '
            onClick={closeSidebar}
          >
            {link.link}
          </a>
        )
      })}
      <button
        className='text-3xl block absolute top-[00px] right-[20px] border-2 border-blue-500 rounded-md p-1'
        onClick={closeSidebar}
      >
        <AiOutlineClose />
      </button>
    </div>
  )
}

// translate-x-[100%] ${ showSidebar && "translate-x-[0]"}
export default SideBar
