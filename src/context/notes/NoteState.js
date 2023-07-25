import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial =
    [
      {
        "id": "11fd5512e7-b7e1-430d-980e-b18aa2b78b75",
        "user": "shaitaniTunna@gmail.com",
        "title": "Tunna got love",
        "description": "Roaming everywhere",
        "tag": "love",
        "date": "2023-07-25T07:34:20.694+00:00"
      },
      {
        "id": "657e268869-6572-4987-abb1-47b0435c75e4",
        "user": "shaitaniTunna@gmail.com",
        "title": "Eating",
        "description": "Eating",
        "tag": "order something to eat",
        "date": "2023-07-25T07:35:59.252+00:00"
      },
      {
        "id": "a30bfecf-b38b-4773-8551-c4ff355baefb3e",
        "user": "shaitaniTunna@gmail.com",
        "title": "Completing api",
        "description": "Completing api",
        "tag": "work",
        "date": "2023-07-25T07:35:24.964+00:00"
      },
      {
        "id": "11fd12e7-b74553e1-430d-980e-b18aa2b78b75",
        "user": "shaitaniTunna@gmail.com",
        "title": "Tunna got love",
        "description": "Tunna got love",
        "tag": "love",
        "date": "2023-07-25T07:34:20.694+00:00"
      },
      {
        "id": "23657e2869-6572-4987-abb1-47b0435c75e4",
        "user": "shaitaniTunna@gmail.com",
        "title": "Eating",
        "description": "Eating",
        "tag": "order something to eat",
        "date": "2023-07-25T07:35:59.252+00:00"
      },
      {
        "id": "a39080bfecf-b38b-4773-8551-c4ff3baefb3e",
        "user": "shaitaniTunna@gmail.com",
        "title": "Completing api",
        "description": "Completing api",
        "tag": "work",
        "date": "2023-07-25T07:35:24.964+00:00"
      },
      {
        "id": "11fd134342e7-b7e1-430d-980e-b18aa2b78b75",
        "user": "shaitaniTunna@gmail.com",
        "title": "Tunna got love",
        "description": "Tunna got love",
        "tag": "love",
        "date": "2023-07-25T07:34:20.694+00:00"
      },
      {
        "id": "657e2869-6636572-4987-abb1-47b0435c75e4",
        "user": "shaitaniTunna@gmail.com",
        "title": "Eating",
        "description": "Eating",
        "tag": "order something to eat",
        "date": "2023-07-25T07:35:59.252+00:00"
      },
      {
        "id": "a30bfecf-b3863b-4773-8551-c4ff3baefb3e",
        "user": "shaitaniTunna@gmail.com",
        "title": "Completing api",
        "description": "Completing api",
        "tag": "work",
        "date": "2023-07-25T07:35:24.964+00:00"
      }
    ]

  const [notes, setnotes] = useState(notesInitial)

  //add a note
  const addNote = (title, description, tag) => {
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
  const deleteNote = () => {

  }

  //edit a note
  const editNote = () => {

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState