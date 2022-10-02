import React from 'react'
import {Link} from 'react-router-dom';
import {useCartContext} from '../../Store/context';

const ForgotPassword = () => {
   const {person, currentUser, changeInput, resetPassword} = useCartContext();
  return (
     <section className="auth-wrapper">
               <h2 className='welcome'>Password Reset</h2>
             <form>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required placeholder='please enter your email' value={person.email} onChange={changeInput}/>
                <button className='sign-in' onClick={resetPassword}>Reset Password</button>
             </form>
             <p><Link to='/sign-in'>Sign In</Link></p><br />
             <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
        </section>
  )
}

export default ForgotPassword