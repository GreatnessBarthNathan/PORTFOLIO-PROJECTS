import React, {useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { useCartContext } from '../Store/context';
import {Link, useNavigate} from 'react-router-dom';

const SingleItem = ({id, category, image, price, title, description}) => {
    const [showDesc, setShowDesc] = useState(false);
    const {addToCart, currentUser} = useCartContext();
    const navigate = useNavigate();

    function addItems() {
      addToCart(id, category, image, price, title);
      if(!currentUser) {
        navigate('/sign-in')
      }
    }
  return (
    <div className='single-item'>
        <img src={image} alt={title} />
        <div className="content">
            <h3>{title}</h3>
            <h4>Category: {category}</h4>
            <p className='price'>Price: <span>${price}</span></p>
             <p className='desc'>{`${showDesc ? description: description.substring(0, 50)}...`} <button onClick={()=> setShowDesc(!showDesc)} className='toggle-btn'>{`${showDesc ? 'Show Less' : 'Show More'}`}</button></p>
             <button className='add-cart' onClick={()=> addItems()}>Add To Cart<FaShoppingCart className='cart-icon'/> </button>
        </div>
    </div>
  )
}

export default SingleItem