import React from "react"
import { useGlobalContext } from "../Actions/context"

const Modal = () => {
  const { showModal, setShowModal, clear } = useGlobalContext()
  if (showModal) {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <p>All items will be deleted. Continue?</p>
          <div className='modal-btns'>
            <button onClick={clear}>Continue</button>
            <button onClick={() => setShowModal(false)}>Decline</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
