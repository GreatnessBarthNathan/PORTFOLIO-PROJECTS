import React from "react"
import { Link } from "react-router-dom"

function Error() {
  return (
    <div className='error'>
      <h1>Oops! This is a wrong page...</h1>
      <Link to='/'>Back To Home</Link>
    </div>
  )
}

export default Error
