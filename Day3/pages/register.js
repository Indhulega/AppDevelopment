import React, { useState } from 'react';
import '../assets/css/register.css';
import { Link } from 'react-router-dom';
function Register() {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <h1>Create a new account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" value={Firstname} onChange={(e) => setFirstname(e.target.value)} name="Firstname" required />
        </label>
        <label>
          Last Name
          <input type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)} name="Lastname" required />
        </label>
        <label>
          Mobile No
          <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} name="MobileNo" required />
        </label>
        <label>
          Address
          <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} name="Address" required />
        </label>
        <label>
          Password
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} name="Password" required />
        </label>
        <label>
          Confirm Password
          <input type="password" value={ConformPassword} onChange={(e) => setConformPassword(e.target.value)} name="ConformPassword" required />
        </label>
        <Link to="/home"><button type="submit">Submit</button></Link>
      </form>
    </div>
  )
}

export default Register;