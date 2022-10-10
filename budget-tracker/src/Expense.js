import React from "react"
import { useGlobalContext } from "./context"

function Expense() {
  const { state, displayExpenseModal } = useGlobalContext()
  const { expense } = state
  return (
    <main>
      <h2 id='expense'>EXPENSE</h2>
      <div className='expense-container'>
        {expense.map((entry) => {
          const { id, detail, value, date } = entry
          return (
            <div className='expense' key={id}>
              <div className='detail'>
                <p>{detail}</p>
                <h4>${value.toLocaleString()}</h4>
              </div>
              <div className='buttons'>
                <button onClick={() => displayExpenseModal(id)}>Delete</button>
              </div>
              <p className='date'>{date}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Expense
