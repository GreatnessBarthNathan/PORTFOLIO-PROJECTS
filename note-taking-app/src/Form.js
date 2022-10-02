import React, {useRef, useEffect} from 'react'
import {useGlobalContext} from './context'

function Form () {
    const {title, note, setTitle, setNote, handleSubmit, state, editFlag} = useGlobalContext()
    const inputRef = useRef(null)

    useEffect(()=> {
      inputRef.current.focus()
    }, [editFlag])
    return <form>
             {state.alert.type && <p className={`alert ${state.alert.bg}`}>{state.alert.content}</p>}
            <div className="title">
                <label htmlFor="title">Title</label>
                <input type="text" ref={inputRef} placeholder='Enter a note title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="note">
                <label htmlFor="note">Note</label>
                <textarea name="" id=""  rows="12" value={note} onChange={(e)=> setNote(e.target.value)} placeholder='Enter note here'/>
            </div>
            <button onClick={handleSubmit}>{`${editFlag ? 'Edit Note' : 'Save Note'}`}</button>
        </form>
}

export default Form