import React from "react"
import { useParams, Link } from "react-router-dom"
import { useGlobalContext } from "../context"
const url = "https://themealdb.com/api/json/v1/1/lookup.php?i="

function SingleMeal() {
  const { loading, setLoading } = useGlobalContext()
  const [singleMeal, setSingleMeal] = React.useState([])
  const { id } = useParams()

  async function fetchSingleMeal() {
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      const { meals } = data

      if (meals) {
        const singleMeal = meals.map((meal) => {
          const {
            idMeal,
            strMeal,
            strCategory,
            strYoutube,
            strMealThumb,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          } = meal
          return {
            id: idMeal,
            name: strMeal,
            category: strCategory,
            url: strYoutube,
            image: strMealThumb,
            inst: strInstructions,
            ingredients: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              strIngredient10,
            ],
          }
        })
        setSingleMeal(singleMeal)
        setLoading(false)
      } else {
        setSingleMeal([])
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    fetchSingleMeal()
  }, [])

  if (loading) {
    return <h1 className='loading'> Loading... </h1>
  }
  return (
    <div className='container'>
      {singleMeal.map((meal) => {
        const { id, name, category, url, image, inst, ingredients } = meal
        return (
          <div className='single-meal' key={id}>
            <img src={image} alt={name} />
            <div className='details'>
              <h3>Name: {name}</h3>
              <h4>Category: {category}</h4>
              <div>
                Ingredients:
                {ingredients.map((ingredient, index) => {
                  if (!ingredient) {
                    return ""
                  }
                  return <p key={index}>{`${ingredient},`}</p>
                })}
              </div>
              <h5>Instructions:</h5>
              <p>{inst}</p>
              <a href={url} target='_blank'>
                Watch Video
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SingleMeal
