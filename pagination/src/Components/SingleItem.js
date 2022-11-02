import React from "react"

const SingleItem = ({ name, image, current_price, total_volume }) => {
  return (
    <div className='single-item'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>Current Price: ${current_price}</h4>
      <h4>Total Volume: {total_volume}</h4>
    </div>
  )
}

export default SingleItem
