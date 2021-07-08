import React, {useState, useContext} from 'react'
import { NoteContext } from './NoteContext'

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
       e.preventDefault();
       setNotes(prevNotes => [...prevNotes, {date: date, note: note}])
    }

    return (
        <div>
            <form onSubmit = {addNote}>
                <input type = "text" name="date" value={date} onChange={updateDate}/>
                <input type = "text" name="note" value={note} onChange={updateNote}/>
                 <button>Add</button>
            </form>
        </div>
    )
}

export default AddNote