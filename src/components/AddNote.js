import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export const AddNote = () => {
  const context = useContext(noteContext)
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" })
  const handleClick = (e) => {
    e.preventDefault();// to stop page reloading
    addNote(note.title, note.description, note.tag)
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className="container my-3">
      <h2>Add a note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" autoComplete='on' id="title" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" name="description" autoComplete='off' id="description" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" name="tag" autoComplete='off' id="tag" onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
      </form>
    </div>
  )
}
