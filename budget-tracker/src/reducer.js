function reducer (state, action) {
    if (action.signal === 'NO DETAIL') {
        const newAlert = {type: true, bg: 'danger', content: 'Please Enter Detail and Value'}
        return {...state, alert: newAlert}
    }
    if (action.signal === 'REMOVE ALERT') {
        const newAlert = {type: false, bg: '', content: ''}
        return {...state, alert: newAlert}
    }
    if (action.signal === 'ENTER INCOME') {
        const newAlert = {type: true, bg: 'success', content: 'New Income Entered'}
        const date = new Date().toLocaleString()
        const newIncomeEntry = {detail: action.detail, value: action.value, id: action.id, date: date}
        const newIncome = [...state.income, newIncomeEntry]
        return {...state, income: newIncome, alert: newAlert}
    }
    if (action.signal === 'ENTER EXPENSE') {
        const newAlert = {type: true, bg: 'danger', content: 'New Expense Entered'}
        const date = new Date().toLocaleString()
        const newExpenseEntry = {detail: action.detail, value: action.value, id: action.id, date: date}
        const newExpense = [...state.expense, newExpenseEntry]
        return {...state, expense: newExpense, alert: newAlert}
    }
    if (action.signal === 'MONEY EARNED') {
        const money = state.income.reduce((total, value)=> {
             total += value.value
             return total
        }, 0)
        return {...state, moneyEarned: money}
    }
    if (action.signal === 'MONEY SPENT') {
        const money = state.expense.reduce((total, value)=> {
            total += value.value
            return total
        }, 0)
        return {...state, moneySpent: money}
    }
    if (action.signal === 'MONEY AVAILABLE') {
        const money = state.moneyEarned - state.moneySpent
        return {...state, moneyAvailable: money}
    }
    if (action.signal === 'DELETE EXPENSE') {
        const newExpense = state.expense.filter((expense)=> expense.id !== action.id)
        return {...state, expense: newExpense}
    }
    if (action.signal === 'DELETE INCOME') {
        const newIncome = state.income.filter((income)=> income.id !== action.id)
        return {...state, income: newIncome}
    }
    return state
}

export default reducer