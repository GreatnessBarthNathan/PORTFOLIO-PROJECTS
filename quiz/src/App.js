import React from "react"
import { useGlobalContext } from "./context"
import SetupForm from "./SetupForm"
import Modal from "./Modal"
import Loading from "./Loading"
import Question from "./Question"

function App() {
  const { showForm, loading, showModal } = useGlobalContext()
  if (showForm) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }
  if (showModal) {
    return <Modal />
  }
  return <Question />
}

export default App
