import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'

function Modal () {
    const {showModal, state, setShowModal} = useGlobalContext()
    return <> {showModal && <div className='modal-container'>
        {
            state.modal.map((content)=> {
                const {title, note, id} = content
                return  <div className="modal-content" key={id}>
                            <h2><span>{title}</span> <button onClick={()=> setShowModal(false)}><FaTimes/></button></h2>
                            <p>{note}</p>
                         </div>
            })
        }
       
    </div>}
    </>
}

export default Modal