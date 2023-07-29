import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const HOST = "http://localhost:7000";
  const notesInitial = [];


  const [notes, setnotes] = useState(notesInitial)

  //get all notes
  const getNotes = async () => {
    const response = await fetch(`${HOST}/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJlbmVAZ21haWwuY29tIiwiaWF0IjoxNjkwNjE5NDI5LCJleHAiOjE2OTA2Mzc0Mjl9.LUhYLQgNRZftWomHEdOFAxNv-1Dmyi3X1NSskz5WwDvlEHz5SPBOw0jtIGFFmAEUe-P4OEO_CCn5oTAM3zHVrg"
      }
    });
    const json = await response.json();
    setnotes(json);
  }


  //add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${HOST}/notes/addnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJlbmVAZ21haWwuY29tIiwiaWF0IjoxNjkwNjE5NDI5LCJleHAiOjE2OTA2Mzc0Mjl9.LUhYLQgNRZftWomHEdOFAxNv-1Dmyi3X1NSskz5WwDvlEHz5SPBOw0jtIGFFmAEUe-P4OEO_CCn5oTAM3zHVrg"
      }
    })
    const note = await response.json();
    setnotes(notes.concat(note));//concat returns an array whereas push updates an array
  }

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${HOST}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJlbmVAZ21haWwuY29tIiwiaWF0IjoxNjkwNjE5NDI5LCJleHAiOjE2OTA2Mzc0Mjl9.LUhYLQgNRZftWomHEdOFAxNv-1Dmyi3X1NSskz5WwDvlEHz5SPBOw0jtIGFFmAEUe-P4OEO_CCn5oTAM3zHVrg"
      }
    })
    const text = response.text();
    const newNotes = notes.filter((note) => { return note.id !== id });
    setnotes(newNotes);
  }

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${HOST}/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJlbmVAZ21haWwuY29tIiwiaWF0IjoxNjkwNjE5NDI5LCJleHAiOjE2OTA2Mzc0Mjl9.LUhYLQgNRZftWomHEdOFAxNv-1Dmyi3X1NSskz5WwDvlEHz5SPBOw0jtIGFFmAEUe-P4OEO_CCn5oTAM3zHVrg"
      }
    })
    //logic
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element.id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState