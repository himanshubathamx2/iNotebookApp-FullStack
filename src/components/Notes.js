import React, { useContext } from 'react'
import { Noteitem } from '../components/Noteitem';
import { AddNote } from '../components/AddNote';
import noteContext from '../context/notes/noteContext'
export const Notes = () => {

  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note.id} note={note} />
        })}
      </div>
    </>
  )
}
