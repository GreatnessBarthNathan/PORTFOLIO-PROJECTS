import React from 'react'
import {useGlobalContext} from './context'

function Note () {
    const {state, deleteNote, editNote, viewModal} = useGlobalContext()

    return <section className='note-container'>
        {state.note.map((each)=> {
            const {title, note, id, date} = each
            return <div className="note-content" key={id}>
                <h3>{title}</h3>
                <p className='paragraph'>{note}</p>
                <div className="buttons">
                    <button className='view' onClick={()=> viewModal(id)}>View </button>
                    <button className='edit' onClick={()=> editNote(id)}>Edit </button>
                    <button className='delete' onClick={()=>deleteNote(id)}>Delete </button>
                </div>
                <p>{date}</p>
            </div>
        })}
    </section>
}

export default Note