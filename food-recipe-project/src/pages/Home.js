import React from "react"
import Form from "../components/Form"
import MealContainer from "../components/MealContainer"

function Home() {
  return (
    <section className='home'>
      <h1>Find meals for your ingredients</h1>
      <Form />
      <MealContainer />
    </section>
  )
}

export default Home
