import React from "react"
import { Link } from "react-router-dom"

function Meal({ id, name, image }) {
  return (
    <div className='meal'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <Link to={`/meal/${id}`}>Get Recipe</Link>
    </div>
  )
}

export default Meal
