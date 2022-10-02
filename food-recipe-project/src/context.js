import React, {useState, useEffect, useContext} from 'react'
const url = 'https://themealdb.com/api/json/v1/1/filter.php?i='

const context = React.createContext()

function AppProvider ({children}) {
    const [input, setInput] = useState('pepper')
    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(false)
     
    // handle submit
    function handleSubmit (e) {
        e.preventDefault()
    }

    // fetch data
    async function fetchFood () {
        setLoading(true)
        try {
            const response = await fetch(`${url}${input}`)
            const data = await response.json()
            const {meals} = data
            if (meals) {
            const result = meals.map((meal)=> {
                const {strMeal, strMealThumb, idMeal} = meal
                return {name: strMeal, image: strMealThumb, id: idMeal}
            })
            setFood(result)
            setLoading(false)
            }
            else {
                setFood([])
                setLoading(false)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
   
    useEffect(()=> {
      fetchFood()
    }, [input])
    
    return <context.Provider value={{input, setInput, handleSubmit, food, loading, setLoading}}>
        {children}
    </context.Provider>
}

export default AppProvider

export function useGlobalContext () {
    return useContext(context)
}