import React from "react"
import { useGlobalContext } from "./context"

const Question = () => {
  const { questions, index, correct, nextQuestion, checkAnswer } =
    useGlobalContext()

  const { question, incorrect_answers, correct_answer } = questions[index]
  let answers = [...incorrect_answers, correct_answer]
  answers = answers.sort(() => 0.5 - Math.random())

  return (
    <section className='question-container'>
      <p>
        Correct Answers: {correct}/{index}
      </p>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <div className='answer-btns'>
        {answers.map((answer, index) => {
          return (
            <button
              key={index}
              onClick={() => checkAnswer(correct_answer === answer)}
            >
              {answer}
            </button>
          )
        })}
      </div>
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </section>
  )
}

export default Question
