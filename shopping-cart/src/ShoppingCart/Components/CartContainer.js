import React, {useState, useEffect} from 'react';
import { useCartContext } from '../Store/context';
import SingleItem from './SingleItem';
import {Link} from 'react-router-dom';

const CartContainer = () => {
    const {category,items, filterItems, currentUser} = useCartContext();
    const [count, setCount] = useState(0);
   
  return (
    <section className='wrapper'>
        <h1>Our Products</h1>
        <hr />
        <div className="categories">
          <h3>Our Categories: </h3>
            {category.map((category, index)=> {
              return <button key={index} onClick={()=> {filterItems(category)
              setCount(index)}} className={`${(count === index)? 'active': 'category-btn'}`}>{category}</button>
            })}
        </div>
         <Link className='view-cart' to='/your-cart'>View Cart</Link>
        <main className="cart-container">
             {items.map((item)=> <SingleItem key={item.id} {...item}/>)}
        </main>
    </section>
  )
}

export default CartContainer