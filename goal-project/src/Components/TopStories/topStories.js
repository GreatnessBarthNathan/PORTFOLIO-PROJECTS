import React from "react"
import { useGlobalContext } from "../../context"
import "../../styles/topStories.css"
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import Fourth from "./Fourth"
import Fifth from "./Fifth"

const TopStories = () => {
  const { removeSubmenu } = useGlobalContext()

  return (
    <div className='top-stories' onMouseOver={removeSubmenu}>
      <h1>Top Stories</h1>
      <section>
        <First />
        <Second />
      </section>
      <Third />
      <div className='fourth-fifth'>
        <Fourth />
        <Fifth />
      </div>
    </div>
  )
}

export default TopStories
