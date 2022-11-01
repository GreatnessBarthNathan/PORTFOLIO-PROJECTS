import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../Store/context"
import "../../styles/auth.css"

function SignIn() {
  const navigate = useNavigate()
  const { person, currentUser, changeInput, signIn } = useCartContext()

  useEffect(() => {
    if (currentUser) {
      navigate("/")
    }
  }, [currentUser])
  return (
    <section className='auth-wrapper'>
      <h2 className='welcome'>Sign In</h2>
      <form>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          required
          placeholder='please enter your email'
          value={person.email}
          onChange={changeInput}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          required
          placeholder='please enter your password'
          value={person.password}
          onChange={changeInput}
        />
        <button className='sign-in' onClick={signIn}>
          Sign In
        </button>
      </form>
      <p>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </p>
      <br />
      <p>
        Don't have an account? <Link to='/sign-up'>Sign Up</Link>
      </p>
      <p className='redirect'>
        <Link to='/'>Back To Store</Link>
      </p>
    </section>
  )
}

export default SignIn
