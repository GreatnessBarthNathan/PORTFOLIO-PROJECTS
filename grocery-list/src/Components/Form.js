import React, { useEffect } from "react"
import { useGlobalContext } from "../Actions/context"

function Form() {
  const { input, state, setInput, handleSubmit, editFlag } = useGlobalContext()
  const { items, alert } = state

  return (
    <form>
      {alert.show && <p className={alert.bg}>{alert.content}</p>}
      <div>
        <input
          type='text'
          placeholder='Enter Item'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>{editFlag ? "Edit" : "Save"}</button>
      </div>
    </form>
  )
}

export default Form
