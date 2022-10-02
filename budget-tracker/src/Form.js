import React from 'react'
import {useGlobalContext} from './context'


function Form () {
  const {state,detail, setDetail, value, setValue, handleIncome, handleExpense} = useGlobalContext()
  return <form>
           {state.alert.type && <p className={`alert ${state.alert.bg}`}>{state.alert.content}</p>}
           <div className="input-container">
            <input type="text" id='text' value={detail} placeholder='Enter detail' onChange={(e)=>setDetail(e.target.value)} />
            <input type="number" id='number' value={value} placeholder='value' onChange={(e)=>setValue(e.target.value)}/>
           </div>
           <div className="input-buttons">
            <button className="income-btn" onClick={handleIncome}>Income</button>
            <button className="expense-btn" onClick={handleExpense}>Expense</button>
           </div>
  </form>
}

export default Form
