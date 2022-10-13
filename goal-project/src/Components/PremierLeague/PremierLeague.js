import React from "react"
import { useGlobalContext } from "../../context"
import "../../styles/topStories.css"
import First from "./First"
import Second from "./Second"
import Third from "./Third"

const PremierLeague = () => {
  const { removeSubmenu } = useGlobalContext()

  return (
    <div className='top-stories' onMouseOver={removeSubmenu}>
      <h1>Premier League</h1>
      <section>
        <First />
        <Second />
      </section>
      <Third />
      <div className='more'>
        <button>More</button>
      </div>
    </div>
  )
}

export default PremierLeague
