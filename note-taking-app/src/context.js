import React, { useState, useEffect, useContext, useReducer } from "react"
import reducer from "./reducer"

const context = React.createContext()

function getLocalStorage() {
  let note
  if (localStorage.getItem("note") === null) {
    note = []
  } else {
    note = JSON.parse(localStorage.getItem("note"))
  }
  return note
}

const defaultState = {
  note: getLocalStorage(),
  alert: { type: false, bg: "", content: "" },
  modal: [],
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [editFlag, setEditFlag] = useState(false)
  const [editID, setEditID] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // SUBMIT FORM
  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !note) {
      dispatch({ signal: "NOTHING WRITTEN" })
    }
    if (title && note && !editFlag) {
      dispatch({
        signal: "NEW NOTE",
        title: title,
        note: note,
        id: Math.random(),
      })
      setTitle("")
      setNote("")
    }
    if (title && note && editFlag) {
      dispatch({
        signal: "EDIT NOTE",
        editTitle: title,
        editNote: note,
        id: editID,
      })
      setEditFlag(false)
      setEditID(null)
      setTitle("")
      setNote("")
    }
  }

  // DELETE NOTE
  function deleteNote(id) {
    dispatch({ signal: "DELETE NOTE", id: id })
  }

  // EDIT NOTE
  function editNote(id) {
    const editNote = state.note.find((note) => note.id === id)
    setTitle(editNote.title)
    setNote(editNote.note)
    setEditFlag(true)
    setEditID(id)
    window.scrollTo({ top: 0, left: 0 })
  }

  // VIEW MODAL
  function viewModal(id) {
    dispatch({ signal: "VIEW MODAL", id: id })
    setShowModal(true)
  }
  // REMOVE ALERT
  function removeAlert() {
    dispatch({ signal: "REMOVE ALERT" })
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeAlert()
    }, 1500)
    return () => clearTimeout(timeoutId)
  }, [state.alert.type])

  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(state.note))
  }, [state.note])

  return (
    <context.Provider
      value={{
        title,
        note,
        handleSubmit,
        setTitle,
        setNote,
        state,
        deleteNote,
        editNote,
        editFlag,
        showModal,
        setShowModal,
        viewModal,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default AppProvider

export function useGlobalContext() {
  return useContext(context)
}
