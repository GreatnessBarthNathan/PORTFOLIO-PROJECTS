import React from 'react'
import Meal from './Meal'
import {useGlobalContext} from '../context'

function MealContainer () {
    const {food, loading} = useGlobalContext()

    if (loading) {
        return <h1 className='loading'>Loading...</h1>
    }

    if (food.length === 0) {
        return <h2 className='no-results'>No meals for your search category</h2>
    }

return <main className='meal-wrapper'>
          <h1>your results:</h1>
          <div className="meal-container">
            {food.map((each)=> {
                return <Meal key={each.id} {...each}/>
            })}
          </div>
    </main>
}

export default MealContainer