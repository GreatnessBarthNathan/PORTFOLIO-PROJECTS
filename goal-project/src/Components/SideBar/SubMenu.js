import React, { useState } from "react"
import Content from "./Content"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const SubMenu = ({ name, contents }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='side-submenu'>
      <h2 className='more-less'>
        <span>{name}</span>
        {contents.length > 0 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className='more-less-btn'
          >
            {showMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        )}
      </h2>
      {showMore && (
        <div>
          {contents.map((content, index) => (
            <Content key={index} {...content} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SubMenu
