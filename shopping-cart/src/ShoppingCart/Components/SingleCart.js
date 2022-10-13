import React from "react"
import { FaAngleUp, FaAngleDown } from "react-icons/fa"
import { useCartContext } from "../Store/context"

const SingleCart = ({
  id,
  title,
  price,
  category,
  image,
  totalPrice,
  amount,
}) => {
  const { increment, decrement, remove } = useCartContext()
  return (
    <div className='single-cart'>
      <div className='details'>
        <img src={image} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4>{category}</h4>
          <p>${price}</p>
          <div className='button-container'>
            <p>Qty:</p>
            <div>
              <button onClick={() => increment(id)}>
                <FaAngleUp />
              </button>
              <p>{amount}</p>
              <button onClick={() => decrement(id)}>
                <FaAngleDown />
              </button>
            </div>
          </div>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className='remove' onClick={() => remove(id)}>
            remove item
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleCart
