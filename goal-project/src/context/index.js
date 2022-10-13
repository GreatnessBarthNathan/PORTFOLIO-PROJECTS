import React, { useState, useReducer, useEffect, useContext } from "react"
import headings from "../data/submenuData"

const context = React.createContext()

function AppProvider({ children }) {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [submenu, setSubmenu] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [active, setActive] = useState("")

  // SHOW SUBMENU
  function hoverLink(e) {
    const target = e.target.innerText
    let sub = headings.filter((item) => item.name === target)
    sub = sub.map((item) => item.contents)
    if (sub[0]) {
      setSubmenu(sub[0])
    }
    setShowSubmenu(true)
    setActive(target)
  }

  // REMOVE SUBMENU
  function removeSubmenu(e) {
    if (!e.target.classList.contains("show")) {
      setShowSubmenu(false)
      setActive("")
    }
  }

  // TOGGLE SIDEBAR
  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  // SET SIDEBAR
  function displaySidebar(e) {}

  // SETUP VALUE
  const value = {
    showSubmenu,
    hoverLink,
    submenu,
    removeSubmenu,
    active,
    showSidebar,
    toggleSidebar,
    showMore,
  }
  return <context.Provider value={value}>{children}</context.Provider>
}

export default AppProvider

export function useGlobalContext() {
  return useContext(context)
}
