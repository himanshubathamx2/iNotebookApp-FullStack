import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import NoteState from './context/notes/NoteState'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from './components/Alert'
import { useState } from 'react'

export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (

    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
                <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
              </Routes>
            </div>
          </div>

        </div>
      </Router>
    </NoteState>

  )
}
