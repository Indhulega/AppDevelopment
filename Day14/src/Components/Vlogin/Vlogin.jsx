import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Vlogin.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      alert("Enter the email");
      return;
    }
    if (password.length === 0) {
      alert("Enter the Password");
      return;
    }
    nav("/list");
  }

  const handleSignUpClick = () => {
    nav("/register");
  }

  return (
    <>
    <div className='unique-login-container'>
      <form className="unique-form" onSubmit={handleSubmit}>
        <h1 className="unique-form-title">NGO</h1>
        <div className="unique-input-container">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="unique-input-container">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit" className="unique-submit-button">Sign In</button>
        <p className="unique-signup-link">
          Don't have an account?
          <Link to="/register">Sign Up?</Link>
          <Link to="/dolo">
          Donor Login
          </Link>
        </p>
      </form>
    </div>
    </>
  )
}

export default Login;