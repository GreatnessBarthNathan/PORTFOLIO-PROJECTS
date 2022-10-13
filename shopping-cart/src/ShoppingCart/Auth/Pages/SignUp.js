import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../Store/context"

function Form() {
  const { person, currentUser, changeInput, createAccount } = useCartContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/")
    }
  }, [currentUser])
  return (
    <section className='auth-wrapper'>
      <h1>Create an Account</h1>
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
        <label htmlFor='confirm'>Confirm Password</label>
        <input
          type='password'
          name='confirm'
          required
          placeholder='confirm password'
          value={person.confirm}
          onChange={changeInput}
        />
        <button className='create-account' onClick={createAccount}>
          Create Account
        </button>
      </form>
      <p>
        Already have an account? <Link to='/sign-in'>Sign In</Link>
      </p>
      <p className='redirect'>
        <Link to='/'>Back To Store</Link>
      </p>
    </section>
  )
}

export default Form
