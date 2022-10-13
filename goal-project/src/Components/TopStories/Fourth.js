import React from "react"
import { topStories } from "../../data/topStories"
import { FaArrowRight } from "react-icons/fa"

const Fourth = () => {
  return (
    <div className='fourth'>
      <h2>Breaking News</h2>
      {topStories.fourth.map((item, index) => {
        const { time, title } = item
        return (
          <div key={index}>
            <p>{time}</p>
            <h3>{title}</h3>
          </div>
        )
      })}
      <h3>
        See All Breaking News <FaArrowRight id='right' />
      </h3>
    </div>
  )
}

export default Fourth
