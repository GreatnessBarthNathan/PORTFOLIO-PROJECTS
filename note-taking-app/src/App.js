import React from "react"

// components
import Note from "./Note"
import Modal from "./Modal"
import Form from "./Form"

function App() {
  return (
    <>
      <header>
        <h1>Note Taker</h1>
        <h3>Add A New Note</h3>
      </header>
      <Form />
      <Note />
      <Modal />
    </>
  )
}

export default App
