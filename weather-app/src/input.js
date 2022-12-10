import { BiSearch } from "react-icons/bi"

function Input() {
  return (
    <div id='input'>
      <input type='text' placeholder='Enter Location' />
      <button>
        <BiSearch />
      </button>
    </div>
  )
}

export default Input
