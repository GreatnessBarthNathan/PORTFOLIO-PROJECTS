import React from 'react'

function reducer (state, action) {
    if (action.signal === 'NOTHING WRITTEN') {
        const newAlert = {type: true, bg: 'danger', content: 'please enter title and text'}
        return {...state, alert: newAlert}
    }

    if (action.signal === 'REMOVE ALERT') {
        const newAlert = {type: false, bg: '', content: ''}
        return {...state, alert: newAlert}
    }

    if (action.signal === 'NEW NOTE') {
        const date = new Date().toLocaleString()
        const newAlert = {type: true, bg: 'success', content: 'New Note Added'}
        const newEntry = {title: action.title, note: action.note, id: action.id, date: date}
        const newNote = [...state.note, newEntry]
        return {...state, note: newNote, alert: newAlert}
    }

    if (action.signal === 'DELETE NOTE') {
        const newAlert = {type: true, bg: 'danger', content: 'Note Deleted'}
        const newNote = state.note.filter((each)=> each.id !== action.id)
        return {...state, note: newNote, alert: newAlert}
    }

    if (action.signal === 'EDIT NOTE') {
        const newAlert = {type: true, bg: 'success', content: 'Note Edited'}
        const newNote = state.note.map((each)=> {
            if (each.id === action.id) {
                each.title = action.editTitle
                each.note = action.editNote
            }
            return each
        })
        return {...state, note: newNote, alert: newAlert}
    }

    if (action.signal === 'VIEW MODAL') {
        const newModal = state.note.filter((each)=> each.id === action.id)
        return{...state, modal: newModal}
    }
    return state
}

export default reducer