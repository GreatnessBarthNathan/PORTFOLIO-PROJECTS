import React, {useState, useEffect, useReducer, useContext} from 'react'
import reducer from './reducer'
const context = React.createContext()


function getLocalStorage() {
    let values;
    if (localStorage.getItem('budget') === null) {
        values = {income: [], expense: []}
    } else {
        values = JSON.parse(localStorage.getItem('budget'))
    }
    return values
}
const {income, expense} = getLocalStorage()

const defaultState = {
    income: income,
    expense: expense,
    alert: {type: false, bg: '', content: ''},
    moneyEarned: '',
    moneySpent: '',
    moneyAvailable: '',
}

function AppProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const [detail, setDetail] = useState('')
    const [value, setValue] = useState('')
    const [incomeModal, setIncomeModal] = useState(false)
    const [expenseModal, setExpenseModal] = useState(false)
    const [entryID, setEntryID] = useState(null)

    // INCOME
    function handleIncome (e) {
        e.preventDefault()
        if (!detail && !value) {
            dispatch({signal: 'NO DETAIL'})
        }
        if (detail && value) {
            dispatch({signal: 'ENTER INCOME', detail: detail, value: parseFloat(value), id: Math.random()})
        }
        setDetail('')
        setValue('')
    }

    // EXPENSE
    function handleExpense (e) {
        e.preventDefault()
        if (!detail && !value) {
            dispatch({signal: 'NO DETAIL'})
        }
        if (detail && value) {
            dispatch({signal: 'ENTER EXPENSE', detail: detail, value: parseFloat(value), id: Math.random()})
        }
        setDetail('')
        setValue('')
    }

    // REMOVE ALERT
    function removeAlert () {
        dispatch({signal: 'REMOVE ALERT'})
    }

    useEffect(()=> {
    const timeoutId = setTimeout(()=> {
     removeAlert()
    }, 1500)
    return ()=> clearTimeout(timeoutId)
    }, [state.alert.type])

    // MONEY EARNED
function moneyEarned () {
    dispatch({signal: 'MONEY EARNED'})
}

useEffect(()=> {
     moneyEarned()
}, [state.income])

// MONEY SPENT
function moneySpent () {
    dispatch({signal: 'MONEY SPENT'})
}

useEffect(()=> {
   moneySpent()
}, [state.expense])

// MONEY AVAILABLE
function moneyAvailable () {
    dispatch({signal: 'MONEY AVAILABLE'})
}

useEffect (()=> {
    moneyAvailable()
}, [state.moneyEarned, state.moneySpent])

// LOCAL STORAGE
useEffect(()=> {
   localStorage.setItem('budget', JSON.stringify({income: state.income, expense: state.expense}))
}, [state.income, state.expense])

// MODAL 
function displayIncomeModal(id) {
setEntryID(id)
setIncomeModal(true)
}
function displayExpenseModal(id) {
setEntryID(id)
setExpenseModal(true)
}

// DELETE EXPENSE
function deleteExpense (id) {
    dispatch({signal: 'DELETE EXPENSE', id: id})
    setExpenseModal(false)
}

// DELETE INCOME
function deleteIncome (id) {
    dispatch({signal: 'DELETE INCOME', id : id})
    setIncomeModal(false)
}
    return <context.Provider value={{state, detail, value, setDetail, setValue, handleIncome, handleExpense, incomeModal, setIncomeModal, displayIncomeModal, expenseModal, setExpenseModal, displayExpenseModal, deleteExpense, entryID, setIncomeModal, deleteIncome}}>
        {children}
    </context.Provider>
}

export default AppProvider

export function useGlobalContext () {
    return useContext(context)
}
