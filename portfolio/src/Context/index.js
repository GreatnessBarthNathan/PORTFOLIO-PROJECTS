import React, { useState, useEffect, useContext } from "react"

const context = React.createContext()

function AppProvider({ children }) {
  const [showLinks, setShowLinks] = useState(false)

  function toggleLinks() {
    setShowLinks(!showLinks)
  }
  return (
    <context.Provider value={{ toggleLinks, showLinks }}>
      {children}
    </context.Provider>
  )
}

export default AppProvider

export function useGlobalContext() {
  return useContext(context)
}
