import React from 'react';
import {useCartContext} from '../Store/context';
import SingleCart from '../Components/SingleCart.js';
import '../styles/yourCart.css';
import { Link, useNavigate } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';


const YourCart = () => {
    const [showModal, setShowModal] = React.useState(false);
    const {state, getTotals, clearCart, logout, currentUser} = useCartContext();
    const {cart, cartTotal, cartAmount} = state;
    const navigate = useNavigate();
  React.useEffect(()=> {
    getTotals()
  }, [cart])

  React.useEffect(()=> {
   if(!currentUser) {
    navigate('/')
   }
  }, [currentUser])
    if (cart.length === 0) {
        return <div className='no-items'>
                  <h1 >Your cart has no Items</h1>
                  <Link to='/' className='back-to-store'>Back To Store</Link>
            </div>
    }

    return (
        <section className='your-cart'>
         {showModal && <div className="modal-container">
              <div className="modal">
                <p>Are you Sure you want to clear your cart?</p>
                <div>
                  <button className='confirm' onClick={()=> {clearCart()
                  setShowModal(false)}}>Confirm</button> <button className='decline' onClick={()=> setShowModal(false)}>Decline</button>
                </div>
              </div>
            </div>}
          
          <div className='home-div'>
            <Link className='back-to-store' to='/'>Back to Store</Link>
            <h1><FaShoppingCart className='your-cart-icon'/> {cartAmount} {cart.length > 1? 'Items' : 'Item'}</h1>
            <button className='logout' onClick={logout}>Logout</button>
          </div>

           <div className="cart">
             {cart.map((item)=> <SingleCart key={item.id} {...item}/>)}
           </div>
           <footer>
            <div>
                <h1 className='total'>Total Amount: ${cartTotal.toFixed(2)}</h1>
                <button className='pay'>Pay</button>
            </div>
            <button className='clear-cart' onClick={()=> setShowModal(true)}>Clear Cart</button>
           </footer>
        </section>
    )
}

export default YourCart