import React from "react"
import { topStories } from "../../data/topStories"
import { BsClock } from "react-icons/bs"
import { BiMessageMinus } from "react-icons/bi"

const Fifth = () => {
  return (
    <aside className='fifth'>
      {topStories.fifth.map((item, index) => {
        const { img, title, time, one, response } = item
        return (
          <div key={index}>
            <div className='img-container'>
              <img src={img} alt='' />
            </div>
            <div className='fifth-content'>
              <a href='#'>{one}</a>
              <h3>{title}</h3>
              <div className='fifth-base'>
                <p>
                  <BsClock />
                  {time}
                </p>
                <p>
                  <BiMessageMinus />
                  {response}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </aside>
  )
}

export default Fifth
