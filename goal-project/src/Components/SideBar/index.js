import React from "react"
import { useGlobalContext } from "../../context"
import "../../styles/SideBar.css"
import { sidebar } from "../../data/SidebarData"
import SubMenu from "./SubMenu"

const SideBar = () => {
  const { showSidebar } = useGlobalContext()

  return (
    <div className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <div className='sidebar-container'>
        {sidebar.map((heading) => (
          <SubMenu key={heading.id} {...heading} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
