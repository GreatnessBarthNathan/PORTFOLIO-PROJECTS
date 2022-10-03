import React from "react"
import articles from "./data"
import Article from "./Article"
import { useGlobalContext } from "./context"
import ReactSwitch from "react-switch"
import { MdLightMode, MdDarkMode } from "react-icons/md"

function App() {
  const { theme, toggleTheme } = useGlobalContext()

  return (
    <main className={theme}>
      <nav>
        <h1>UEFA Champions League</h1>
        <div className='toggle'>
          <MdLightMode id='light-toggle' />
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <MdDarkMode id='dark-toggle' />
        </div>
      </nav>
      <section>
        <h2>Highest Winners</h2>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  )
}

export default App
