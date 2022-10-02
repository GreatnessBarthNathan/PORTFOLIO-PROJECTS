import React from 'react'
import {useGlobalContext} from './context'

function Income () {
    const {state, displayIncomeModal} = useGlobalContext()
    const {income} = state
    return <main>
        <h2 id='income'>INCOME</h2>
        <div className="income-container">
            {income.map((entry)=> {
                const {id, detail, value, date} = entry
                return <div className="income" key={id}>
                    <div className="detail">
                    <p>{detail}</p>
                    <h4>${value}</h4>
                    </div>
                    <div className="buttons">
                        <button onClick={()=> displayIncomeModal(id)}>Delete</button>
                    </div>
                    <p className="date">{date}</p>
                </div>
            })}
        </div>
    </main>
}

export default Income