import React, {useState, useContext} from 'react'
import { NoteContext } from './NoteContext'
import './AddNote.css'

const AddNote = () => {
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [notes, setNotes] = useContext(NoteContext)

    const updateDate = (e) => {
        setDate(e.target.value)
    }
    const updateNote = (e) => {
        setNote(e.target.value)
    }

    const addNote = (e) => {
       //POST REQUEST
       e.preventDefault();
       setNotes(prevNotes => [...prevNotes, {date: date, note: note}])
    }

    return (
        <div className = "add-note">
            <form onSubmit = {addNote}>
                <div className = "note-form">
                <input 
                 type = "text" 
                 name="date" 
                 value={date} 
                 onChange={updateDate} 
                 className = "date-input"
                />
                <br/>
                <textarea 
                 type = "text" 
                 name="note" 
                 value={note} 
                 onChange={updateNote} 
                 className = "note-input"
                 />
                 <button class = "add-btn">Add</button>
                 </div>
                 
            </form>
        </div>
    )
}

export default AddNote