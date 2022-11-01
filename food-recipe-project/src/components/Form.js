import React from "react"
import { FaSearch } from "react-icons/fa"
import { useGlobalContext } from "../context"

function Form() {
  const { setInput, handleSubmit } = useGlobalContext()
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    inputRef.current.focus()
  })
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        placeholder='e.g pepper'
      />
    </form>
  )
}

export default Form
