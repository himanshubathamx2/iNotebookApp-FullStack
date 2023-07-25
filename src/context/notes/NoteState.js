import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial =
    [
      {
        "id": "11fd12e7-b7e1-430d-980e-b18aa2b78b75",
        "user": "shaitaniTunna@gmail.com",
        "title": "Tunna got love",
        "description": "Tunna got love",
        "tag": "love",
        "date": "2023-07-25T07:34:20.694+00:00"
      },
      {
        "id": "657e2869-6572-4987-abb1-47b0435c75e4",
        "user": "shaitaniTunna@gmail.com",
        "title": "Eating",
        "description": "Eating",
        "tag": "order something to eat",
        "date": "2023-07-25T07:35:59.252+00:00"
      },
      {
        "id": "a30bfecf-b38b-4773-8551-c4ff3baefb3e",
        "user": "shaitaniTunna@gmail.com",
        "title": "Completing api",
        "description": "Completing api",
        "tag": "work",
        "date": "2023-07-25T07:35:24.964+00:00"
      },
      {
        "id": "11fd12e7-b7e1-430d-980e-b18aa2b78b75",
        "user": "shaitaniTunna@gmail.com",
        "title": "Tunna got love",
        "description": "Tunna got love",
        "tag": "love",
        "date": "2023-07-25T07:34:20.694+00:00"
      },
      {
        "id": "657e2869-6572-4987-abb1-47b0435c75e4",
        "user": "shaitaniTunna@gmail.com",
        "title": "Eating",
        "description": "Eating",
        "tag": "order something to eat",
        "date": "2023-07-25T07:35:59.252+00:00"
      },
      {
        "id": "a30bfecf-b38b-4773-8551-c4ff3baefb3e",
        "user": "shaitaniTunna@gmail.com",
        "title": "Completing api",
        "description": "Completing api",
        "tag": "work",
        "date": "2023-07-25T07:35:24.964+00:00"
      },
      {
        "id": "11fd12e7-b7e1-430d-980e-b18aa2b78b75",
        "user": "shaitaniTunna@gmail.com",
        "title": "Tunna got love",
        "description": "Tunna got love",
        "tag": "love",
        "date": "2023-07-25T07:34:20.694+00:00"
      },
      {
        "id": "657e2869-6572-4987-abb1-47b0435c75e4",
        "user": "shaitaniTunna@gmail.com",
        "title": "Eating",
        "description": "Eating",
        "tag": "order something to eat",
        "date": "2023-07-25T07:35:59.252+00:00"
      },
      {
        "id": "a30bfecf-b38b-4773-8551-c4ff3baefb3e",
        "user": "shaitaniTunna@gmail.com",
        "title": "Completing api",
        "description": "Completing api",
        "tag": "work",
        "date": "2023-07-25T07:35:24.964+00:00"
      }
    ]

  const [notes, setnotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState