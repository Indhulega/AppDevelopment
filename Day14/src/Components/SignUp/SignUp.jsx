import React, { useState } from 'react';
import './SignUp.css';

import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../state/index';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    const { firstname, lastname, email, password } = formData;
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('Email already exists. Please use a different email.');
      return; 
    }
    dispatch(
      addUser({
        username: email,
        password, 
      })
    );
    try {
       axios.post('http://localhost:8080/postUserRegister', {
        firstname,
        lastname,
        email,
        password,
      });

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-image-container">
        <img src={'https://images.pexels.com/photos/6995212/pexels-photo-6995212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="Signup" />
      </div>
      <div className="signup-main-box">
        <div className="signup-container">
          <h1>SIGN UP</h1>
          <div className="signup-box">
            <div className="signup-username-box">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
              <label>First Name</label>
            </div>
            <div className="signup-username-box">
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
              <label>Last Name</label>
            </div>
            <div className="signup-username-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="signup-username-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <p className="error-message">{errorMessage}</p>
            <div className="signup-button-box-outer">
              <div className="signup-button-box">
                <input
                  onClick={handleSignUp}
                  type="button"
                  value="Sign Up"
                ></input>
              </div>
              <div className="already">
                <p>Already have an account?</p>
                <p onClick={() => navigate('/Vlogin')} className="link">
                  Log in
                </p>
                <p onClick={() => navigate('/Vsignup')} className='link'>
                    Donar?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage(SignUp);
