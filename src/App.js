import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import NoteState from './context/notes/NoteState'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>

    </NoteState>

  )
}
