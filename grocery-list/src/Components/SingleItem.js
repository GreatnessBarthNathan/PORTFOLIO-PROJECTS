import React, { useRef, useEffect } from "react"
import { FaTrash, FaEdit } from "react-icons/fa"
import { useGlobalContext } from "../Actions/context"

const SingleItem = ({ id, name, checked }) => {
  const { toggleCheckList, deleteItem, edit } = useGlobalContext()

  return (
    <div className='single-item'>
      <p>{name}</p>
      <div>
        <input
          type='checkbox'
          id='checkbox'
          checked={checked}
          onChange={() => toggleCheckList(id)}
        />
        <button className='edit-btn' onClick={() => edit(id)}>
          Edit
        </button>
        <button className='delete-btn' onClick={() => deleteItem(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default SingleItem
