import React, { useState } from "react"
import Detail from "./Detail"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Content = ({ head, details }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='side-contents'>
      <h3 className='more-less'>
        <span>{head}</span>
        <button
          onClick={() => setShowMore(!showMore)}
          className='more-less-btn'
        >
          {showMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </h3>
      {showMore && (
        <li>
          {details.map((detail, index) => (
            <Detail key={index} {...detail} />
          ))}
        </li>
      )}
    </div>
  )
}

export default Content
