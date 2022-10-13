import "../../styles/AllStars.css"
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import { useGlobalContext } from "../../context"

import React from "react"

const Transfers = () => {
  const { removeSubmenu } = useGlobalContext()

  return (
    <div className='all-stars' onMouseOver={removeSubmenu}>
      <h1>Transfers</h1>
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

export default Transfers
