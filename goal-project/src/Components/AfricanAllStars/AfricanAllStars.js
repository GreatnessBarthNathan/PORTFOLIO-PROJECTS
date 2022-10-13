import React from "react"
import "../../styles/AllStars.css"
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import { useGlobalContext } from "../../context"

const AfricanAllStars = () => {
  const { removeSubmenu } = useGlobalContext()

  return (
    <div className='all-stars' onMouseOver={removeSubmenu}>
      <h1>African All Stars</h1>
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

export default AfricanAllStars
