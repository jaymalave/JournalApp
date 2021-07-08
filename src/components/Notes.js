import React, {useContext} from 'react'
import { NoteContext } from './NoteContext'

const Notes = () => {
    const [notes, setNotes] = useContext(NoteContext)

    return (
        <div>
          {notes.map((note) => (
                 <h1>Date: {note.date} <br/>{note.note}</h1>
            ))}
            </div>
        
    )
}

export default Notes