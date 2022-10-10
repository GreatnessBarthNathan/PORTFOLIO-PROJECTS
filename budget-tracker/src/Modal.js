import React from "react"
import { useGlobalContext } from "./context"

function Modal() {
  const {
    incomeModal,
    setIncomeModal,
    expenseModal,
    setExpenseModal,
    deleteExpense,
    entryID,
    deleteIncome,
  } = useGlobalContext()
  return (
    <>
      {incomeModal && (
        <div className='modal-container'>
          <div className='modal'>
            <p>Are you sure you want to delete this income entry?</p>
            <div className='yes-no'>
              <button className='yes' onClick={() => deleteIncome(entryID)}>
                Yes
              </button>
              <button className='no' onClick={() => setIncomeModal(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {expenseModal && (
        <div className='modal-container'>
          <div className='modal'>
            <p>Are you sure you want to delete this expense entry?</p>
            <div className='yes-no'>
              <button className='yes' onClick={() => deleteExpense(entryID)}>
                Yes
              </button>
              <button className='no' onClick={() => setExpenseModal(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
