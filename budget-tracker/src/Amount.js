import React from "react"
import { useGlobalContext } from "./context"

function Amounts() {
  const { state } = useGlobalContext()
  const { moneyEarned, moneyAvailable, moneySpent } = state
  return (
    <header>
      <div>
        <h3>Total Income</h3>
        <h2 className='earned'>${moneyEarned.toLocaleString()}</h2>
      </div>
      <div>
        <h3>Money Available</h3>
        <h2 className='available'>${moneyAvailable.toLocaleString()}</h2>
      </div>
      <div>
        <h3>Total Expense</h3>
        <h2 className='spent'>${moneySpent.toLocaleString()}</h2>
      </div>
    </header>
  )
}

export default Amounts
