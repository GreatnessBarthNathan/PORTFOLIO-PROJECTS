import React from "react"
import { transfers } from "../../data/Transfers"
import { BsClock } from "react-icons/bs"
import { BiMessageMinus } from "react-icons/bi"

const Third = () => {
  return (
    <div className='third'>
      {transfers.third.map((item, index) => {
        const { img, title, time, one, response } = item
        return (
          <div key={index}>
            <div className='img-container'>
              <img src={img} alt='' />
            </div>
            <div className='third-content'>
              <a href='#'>{one}</a>
              <h3>{title}</h3>
              <div className='third-base'>
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
    </div>
  )
}

export default Third
