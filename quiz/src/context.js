import React, { useState, useEffect, useContext, createContext } from "react"

const context = createContext()

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const url =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [questions, setQuestions] = useState([])
  const [correct, setCorrect] = useState(0)
  const [index, setIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [quizInput, setQuizInput] = useState({
    amount: 10,
    category: "history",
    difficulty: "easy",
  })

  // HANDLE CHANGE
  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setQuizInput({ ...quizInput, [name]: value })
  }

  // HANDLE SUBMIT
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setShowForm(false)
    const { amount, category, difficulty } = quizInput
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
      )
      let data = await response.json()
      data = data.results
      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setShowForm(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // NEXT QUESTION
  function nextQuestion() {
    if (index === questions.length - 1) {
      setIndex(0)
      setShowModal(true)
    } else {
      setIndex(index + 1)
    }
  }

  // CHECK ANSWER
  function checkAnswer(value) {
    if (value) {
      setCorrect(correct + 1)
    }
    nextQuestion()
  }

  // CLOSE MODAL
  function closeModal() {
    setShowModal(false)
    setShowForm(true)
    setCorrect(0)
    setIndex(0)
  }

  //SETUP VALUE
  const value = {
    loading,
    showForm,
    quizInput,
    handleChange,
    handleSubmit,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    showModal,
    closeModal,
  }
  return <context.Provider value={value}>{children}</context.Provider>
}

export default AppProvider

export function useGlobalContext() {
  return useContext(context)
}
