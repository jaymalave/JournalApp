import React, { useContext } from "react";
import Note from "./Note";
import { NoteContext } from "./NoteContext";
import "./Notes.css";

const Notes = () => {
  const [notes, setNotes] = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <Note date={note.date} note={note.note} />
      ))}
    </div>
  );
};

export default Notes;
