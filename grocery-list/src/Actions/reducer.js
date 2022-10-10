function reducer(state, action) {
  if (action.type === "NO_INPUT") {
    const newAlert = {
      ...state.alert,
      show: true,
      bg: "danger",
      content: "Please Enter Item",
    }
    return { ...state, alert: newAlert }
  }
  if (action.type === "REMOVE_ALERT") {
    const newAlert = { ...state.alert, show: false, bg: "", content: "" }
    return { ...state, alert: newAlert }
  }
  if (action.type === "ENTER_ITEM") {
    const newArray = [...state.items, action.payload]
    const newAlert = {
      ...state.alert,
      show: true,
      bg: "success",
      content: "New Item Added",
    }
    return { ...state, items: newArray, alert: newAlert }
  }
  if (action.type === "TOGGLE_CHECKLIST") {
    const newArray = state.items.map((item) => {
      if (item.id === action.payload) {
        if (item.checked === "") {
          item.checked = "checked"
        } else {
          item.checked = ""
        }
      }
      return item
    })
    return { ...state, items: newArray }
  }
  if (action.type === "DELETE") {
    const newArray = state.items.filter((item) => item.id !== action.payload)
    const newAlert = {
      ...state.alert,
      show: true,
      bg: "danger",
      content: "Item Deleted From List",
    }
    return { ...state, items: newArray, alert: newAlert }
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      items: [],
      alert: { show: true, bg: "danger", content: "List Cleared" },
    }
  }
  if (action.type === "EDIT") {
    const newArray = state.items.map((item) => {
      if (item.id === action.payload.id) {
        item.name = action.payload.name
      }
      return item
    })
    return {
      ...state,
      items: newArray,
      alert: { show: true, bg: "success", content: "Item Edited" },
    }
  }
  return state
}

export default reducer
