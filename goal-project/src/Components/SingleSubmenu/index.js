import React from "react"

const SingleSubmenu = ({ head, details }) => {
  return (
    <div className='single-submenu show'>
      <h3>{head}</h3>
      <div>
        {details.map((detail, index) => {
          const { item, img } = detail
          return (
            <a href='#' key={index} className='single-links'>
              {img && <img src={img} alt='' />} <p id='item'>{item}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SingleSubmenu
