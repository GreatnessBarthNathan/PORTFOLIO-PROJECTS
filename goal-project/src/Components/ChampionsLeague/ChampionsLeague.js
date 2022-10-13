import React from "react"
import "../../styles/AllStars.css"
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import { useGlobalContext } from "../../context"

const ChampionsLeague = () => {
  const { removeSubmenu } = useGlobalContext()

  return (
    <div className='all-stars' onMouseOver={removeSubmenu}>
      <h1>Uefa Champions League</h1>
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

export default ChampionsLeague
