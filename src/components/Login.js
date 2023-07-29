import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();//to stop page reload
    const response = await fetch(`http://localhost:7000/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const json = await response.json();
    if (json.jwtToken && response.status === 200) {
      localStorage.setItem('token', json.jwtToken);
      navigate("/");
    }
    else {
      alert("invcalid");
    }


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChange} value={credentials.email} name="email" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" autoComplete='off' onChange={onChange} value={credentials.password} className="form-control" name="password" id="password" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}
