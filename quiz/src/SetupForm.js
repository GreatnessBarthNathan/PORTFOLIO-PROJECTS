import React from "react"
import { useGlobalContext } from "./context"

const SetupForm = () => {
  const { quizInput, handleChange, handleSubmit } = useGlobalContext()

  return (
    <section className='form-container'>
      <h1>Quiz Setup</h1>
      <form>
        <div className='number'>
          <label htmlFor='number'>Number Of Questions</label>
          <input
            type='number'
            name='amount'
            value={quizInput.amount}
            onChange={handleChange}
          />
        </div>
        <div className='category'>
          <label htmlFor='category'>Category</label>
          <select
            name='category'
            id='category'
            value={quizInput.category}
            onChange={handleChange}
          >
            <option value='sports'>sports</option>
            <option value='history'>history</option>
            <option value='politics'>politics</option>
          </select>
        </div>
        <div className='difficulty'>
          <label htmlFor='difficulty'>Select Difficulty</label>
          <select
            name='difficulty'
            id='difficulty'
            value={quizInput.difficulty}
            onChange={handleChange}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        <button className='start' onClick={handleSubmit}>
          Start Quiz
        </button>
      </form>
    </section>
  )
}

export default SetupForm
