import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;// take whatever is needed from context api
  const { note, updateNote } = props
  return (

    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteNote(note.id); props.showAlert('Deleted successfully', 'danger'); }}></i>
          <i className="fa-regular fa-pen-to-square mx2" onClick={() => {
            updateNote(note);
          }}></i>
        </div>
      </div>
    </div>
  )
}
