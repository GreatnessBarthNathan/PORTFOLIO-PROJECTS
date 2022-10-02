import React from 'react'
import Income from './Income'
import Expense from './Expense'

function Wrapper () {
    return <section className='wrapper'>
        <Income/>
        <Expense/>
    </section>
}

export default Wrapper