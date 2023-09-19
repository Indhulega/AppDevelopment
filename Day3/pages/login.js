import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

function Login() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const nav = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Username.length === 0) {
      alert("Enter the email");
      
    }
    else if (Password.length === 0) {
      alert("Enter the Password");
      
    }
    else{
        nav("/home")
    }
    //nav("");
  }

  

  return (
    <div className="login-container">
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={Username} onChange={(e) => setUsername(e.target.value)} name='Username' required />
        </label>
        <label>
          Password
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} name='Password' required />
        </label>
       <button type='submit'>Submit</button>
      </form> 
      <Link to="/register"><p>Don't have an account?</p></Link>
    </div>
  )
}

export default Login;