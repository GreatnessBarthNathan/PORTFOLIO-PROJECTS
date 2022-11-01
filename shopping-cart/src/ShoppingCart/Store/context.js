import React, { useState, useReducer, useContext, useEffect } from "react"
import reducer from "./reducer"
import app from "../Auth/Components/firebase"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth"

const url = "https://fakestoreapi.com/products"
const cartContext = React.createContext()
function getLocalStorage() {
  let cart
  if (localStorage.getItem("cart") === null) {
    cart = []
  } else {
    cart = JSON.parse(localStorage.getItem("cart"))
  }
  return cart
}

const initialState = {
  cart: getLocalStorage(),
  cartTotal: 0,
  cartAmount: 0,
}

function AppProvider({ children }) {
  // CART
  const [state, dispatch] = useReducer(reducer, initialState)
  const [page, setPage] = useState([])
  const [category, setCategory] = useState([])
  const [items, setItems] = useState([])

  // fetchProducts
  async function fetchProducts() {
    const response = await fetch(url)
    const data = await response.json()
    setPage(data)
    setItems(data)
    let categories = ["all", ...new Set(data.map((item) => item.category))]
    setCategory(categories)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  // filter items
  function filterItems(category) {
    if (category === "all") {
      setItems(page)
      return
    }
    const newItems = page.filter((item) => item.category === category)
    setItems(newItems)
  }

  // ADD TO CART
  function addToCart(id, category, image, price, title) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, category, image, price, title },
    })
  }

  //INCREMENT
  function increment(id) {
    dispatch({ type: "INCREMENT", payload: id })
  }

  //DECREMENT
  function decrement(id) {
    dispatch({ type: "DECREMENT", payload: id })
  }
  //CALCULATE TOTALS
  function getTotals() {
    dispatch({ type: "GET_TOTALS" })
  }
  // CLEAR CART
  function clearCart() {
    dispatch({ type: "CLEAR_CART" })
  }
  //REMOVE ITEMS
  function remove(id) {
    dispatch({ type: "REMOVE", payload: id })
  }
  // SAVE TO STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
    console.log("saved to local storage")
  }, [state.cart])

  // AUTHENTICATION
  const [currentUser, setCurrentUser] = useState("")
  const [person, setPerson] = useState({ email: "", password: "", confirm: "" })
  const auth = getAuth(app)

  // handle input
  function changeInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  // create account
  function createAccount(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, person.email, person.password)
      .then((userCredential) => {
        const user = userCredential.user
        alert("Account created... you can view cart now")
        setCurrentUser(user)
        setPerson({ email: "", password: "", confirm: "" })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  // sign in
  function signIn(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, person.email, person.password)
      .then((userCredential) => {
        const user = userCredential.user
        setCurrentUser(user)
        setPerson({ ...person, email: "", password: "" })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage)
      })
  }

  // reset password
  function resetPassword(e) {
    e.preventDefault()
    sendPasswordResetEmail(auth, person.email)
      .then(() => {
        alert("check your spam mail for instructions")
        setPerson({ ...person, email: "" })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  // log out
  function logout() {
    signOut(auth)
      .then(() => {
        setCurrentUser("")
      })
      .catch((error) => {})
  }
  const value = {
    state,
    category,
    page,
    items,
    filterItems,
    addToCart,
    increment,
    decrement,
    getTotals,
    clearCart,
    remove,
    currentUser,
    person,
    changeInput,
    createAccount,
    signIn,
    resetPassword,
    logout,
  }
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

export default AppProvider

export function useCartContext() {
  return useContext(cartContext)
}
