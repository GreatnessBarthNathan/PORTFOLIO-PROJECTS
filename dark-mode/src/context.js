import React, { useContext, createContext, useState, useEffect } from "react"

const ThemeContext = createContext()
function getLocalStorage() {
  let result
  if (localStorage.getItem("theme") === null) {
    result = "light"
  } else {
    result = localStorage.getItem("theme")
  }
  return result
}

function AppProvider({ children }) {
  const [theme, setTheme] = useState(getLocalStorage())

  //TOGGLE THEME
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  // SET VALUES
  const value = { theme, toggleTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default AppProvider

export function useGlobalContext() {
  return useContext(ThemeContext)
}
