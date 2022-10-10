import React from "react"
import SingleItem from "../Components/SingleItem"
import { useGlobalContext } from "../Actions/context"

function ItemContainer() {
  const { state, setShowModal } = useGlobalContext()

  if (state.items.length === 0) {
    return <h2 className='empty-list'>Your list is currently empty...</h2>
  }

  return (
    <section className='item-container'>
      {state.items.map((item) => (
        <SingleItem key={item.id} {...item} />
      ))}
      {state.items.length > 0 && (
        <button id='clearBtn' onClick={() => setShowModal(true)}>
          Clear List
        </button>
      )}
    </section>
  )
}

export default ItemContainer
