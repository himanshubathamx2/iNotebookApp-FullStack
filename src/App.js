import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import NoteState from './context/notes/NoteState'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alert } from './components/Alert'

export default function App() {
  return (

    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is amazing react course" />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    </NoteState>

  )
}
