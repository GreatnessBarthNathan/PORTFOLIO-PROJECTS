import React, { useState, useEffect, useRef } from "react"
import AppProvider from "./Actions/context"
import Form from "./Components/Form"
import ItemContainer from "./Components/ItemContainer"
import Modal from "./Components/Modal"

function App() {
  return (
    <AppProvider>
      <main className='wrapper'>
        <h1>Smart Grocery/To Do App</h1>
        <Form />
        <ItemContainer />
        <Modal />
      </main>
    </AppProvider>
  )
}

export default App
