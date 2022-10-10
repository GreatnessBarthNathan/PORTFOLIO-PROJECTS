import React, { useContext, useState, useEffect, useReducer } from "react"
import reducer from "./reducer"

const context = React.createContext()

function getStorage() {
  let items
  if (localStorage.getItem("grocery-list") === null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem("grocery-list"))
  }
  return items
}

const initialState = {
  items: getStorage(),
  alert: { show: false, bg: "", content: "" },
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState("")
  const [editFlag, setEditFlag] = useState(false)
  const [editID, setEditID] = useState(null)

  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault()
    if (!input) {
      dispatch({ type: "NO_INPUT" })
    }
    if (input && !editFlag) {
      const newItem = { name: input, id: Math.random(), checked: "" }
      dispatch({ type: "ENTER_ITEM", payload: newItem })
      setInput("")
    }
    if (input && editFlag) {
      const editItem = { name: input, id: editID }
      dispatch({ type: "EDIT", payload: editItem })
      setEditFlag(false)
      setEditID(null)
      setInput("")
    }
  }

  // REMOVE ALERT
  function removeAlert() {
    dispatch({ type: "REMOVE_ALERT" })
  }
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      removeAlert()
    }, 1500)
    return () => clearTimeout(timeoutId)
  }, [state.alert.show])

  // TOGGLE CHECKLIST
  function toggleCheckList(id) {
    dispatch({ type: "TOGGLE_CHECKLIST", payload: id })
  }

  // DELETE ITEMS
  function deleteItem(id) {
    dispatch({ type: "DELETE", payload: id })
  }

  // CLEAR LIST
  function clear() {
    dispatch({ type: "CLEAR" })
    setShowModal(false)
  }

  // EDIT ITEM
  function edit(id) {
    const editItem = state.items.find((item) => item.id === id)
    setEditID(editItem.id)
    setEditFlag(true)
    setInput(editItem.name)
  }
  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("grocery-list", JSON.stringify(state.items))
  }, [state.items])
  // SETUP VALUES
  const value = {
    input,
    state,
    setInput,
    handleSubmit,
    toggleCheckList,
    deleteItem,
    showModal,
    setShowModal,
    clear,
    editFlag,
    edit,
  }
  return <context.Provider value={value}>{children}</context.Provider>
}

export default AppProvider

export function useGlobalContext() {
  return useContext(context)
}
