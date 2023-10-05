import React, { useState } from 'react';
import './Login.css';
import backgroundImage from './login-background.jpg';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
  });

  console.log(users);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { Username, Password } = formData;

    
    if (Username === 'admin' && Password === 'adminpassword') {
      console.log("Admin login successful");
      
      navigate('/admin');
      return;
    }

    const userExists = users.some((user) => user.email === Username);
    const user = users.find((user) => user.email === Username);

    //if (!userExists || user.password !== password) {
      //alert("Invalid credentials");
      //return;
    //}

    console.log("User login successful");
    navigate('/list');
  };

  return (
    <div className="login-page">
      <div className='login-main-box'>
        <div className="login-container">
          <h1>LOG IN</h1>
          <div className='login-box'>
            <div className="login-username-box">
              <input type="text"
                name="username"
                value={formData.Username}
                onChange={handleInputChange}
                required/>
              <label>Email</label>
            </div>
            <div className="login-password-box">
              <input type="password" 
                name="password"
                value={formData.Password}
                onChange={handleInputChange}
                required/>
              <label>Password</label>
            </div>
            <div className='login-bottom'>
              <div className='login-inner-bottom-1'>
                <div className='login-button-box'>
                  <input type='button' onClick={handleLogin} value='Login' />
                </div>
                <Link to='/Vlogin'>
                <div className='login-forgot-pass'>
                  Donar Login?
                  <p></p>
                </div>
                </Link>
              </div>
              <div className='login-inner-bottom-2'>
                <div className='login-Dont'>
                  <p>Don't have an account?</p>
                </div>
                <div className='login-button-box-reg'>
                  <input type='button' onClick={() => navigate('/signup')} value='Register Now' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-image-container">
        <img src={'https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="Login" />
      </div>
    </div>
  );
}

export default LoadingPage(Login);
