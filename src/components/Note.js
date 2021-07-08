import React from 'react'
import './Note.css'

const Note = (props) => {
    return (
     <div className = "note">
     <div className = "date">{props.date}</div>
     <div className = "content">{props.note}</div>
    </div>
    )
}

export default Note