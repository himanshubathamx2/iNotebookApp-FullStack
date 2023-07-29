import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "", about: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();//to stop page reload
    const response = await fetch(`http://localhost:7000/auth/create-user`, {
      method: "POST",
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, about: credentials.about }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const json = await response.json();
    if (json.id && response.status === 200) {
      localStorage.setItem('token', json.jwtToken);
      navigate("/");
      props.showAlert("Account created successfully", "success");

    }
    else {
      props.showAlert("Something is wrong", "danger");
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="cpassword" className="form-control" id="cpassword" name="cpassword" />
      </div>
      <div className="mb-3">
        <label htmlFor="about" className="form-label">About</label>
        <input type="text" className="form-control" id="about" name="about" onChange={onChange} aria-describedby="emailHelp" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
