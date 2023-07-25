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
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGFpdGFuaVR1bm5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MDMwNTg4OCwiZXhwIjoxNjkwMzIzODg4fQ.cIVE0mNjn0e2zi8JzhgfVRCJRdVaz31f-A4v5_8WNvsInGdu1cgRvJu8eIk1ciZwxdzElP0y9_JOVHHomkF79w"
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
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGFpdGFuaVR1bm5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MDMwNTg4OCwiZXhwIjoxNjkwMzIzODg4fQ.cIVE0mNjn0e2zi8JzhgfVRCJRdVaz31f-A4v5_8WNvsInGdu1cgRvJu8eIk1ciZwxdzElP0y9_JOVHHomkF79w"
      }
    })
    console.log("Adding a new note")
    const note = {
      "id": "a30bfecf-b3863b-4773-8551-c4ff3baefb3e",
      "user": "shaitaniTunna@gmail.com",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-25T07:35:24.964+00:00"
    };
    setnotes(notes.concat(note));//concat returns an array whereas push updates an array
  }

  //delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => { return note.id !== id });
    setnotes(newNotes);
  }

  //edit a note
  const editNote = async (id, title, description, tag) => { }
  //   //api call
  //   const response = await fetch(`${HOST}/notes/updatenote/${id}`, {
  //     method: "POST",
  //     body: JSON.stringify({ title, description, tag }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGFpdGFuaVR1bm5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MDMwNTg4OCwiZXhwIjoxNjkwMzIzODg4fQ.cIVE0mNjn0e2zi8JzhgfVRCJRdVaz31f-A4v5_8WNvsInGdu1cgRvJu8eIk1ciZwxdzElP0y9_JOVHHomkF79w"
  //     }
  //   })
  //   const json = response.json();

  //   //logic
  //   for (let index = 0; index < notes.length; index++) {
  //     const element = notes[index];
  //     if (element.id === id) {
  //       element.title = title;
  //       element.description = description;
  //       element.tag = tag;
  //     }

  //   }
  // }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState