import React from "react"
import { useGlobalContext } from "./context"

const Modal = () => {
  const { correct, questions, closeModal } = useGlobalContext()
  return (
    <div className='modal-container'>
      <div className='modal'>
        <h1>Welldone!</h1>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button onClick={closeModal}>Play Again</button>
      </div>
    </div>
  )
}

export default Modal
