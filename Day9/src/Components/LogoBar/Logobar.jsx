import React from 'react';
import './LogoBar.css';
import Image from './logo.svg';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useNavigate,useLocation } from 'react-router-dom';


function Logobar() {
  const navigate = useNavigate();
  const location = useLocation();

  let navbarClass = 'navbar-dashboard';
  if(location.pathname === '/' ){
    navbarClass = 'navbar'
  }

  return (
    <nav className={navbarClass}>
      <div className='left-bar bars'>¸
        
        <div className='boxs'>
          <p  onClick={() => {navigate('/projects')}}>PROJECTS</p>
        </div>
        
        <div className='boxs'>
          <p  onClick={() =>{ navigate('./list')}}>NGO</p>
        </div>
        <div className='boxs'>
          <p  onClick={() => { navigate('/volunteer')}}>VOLUNTEER</p>
        </div>
      </div>
      <div className="center-logo">
        <img onClick={() => {navigate('/')}}src={Image} alt="Logo" />
      </div>
      <div className='right-bar bars'>
        <div className='boxs'>
          <p onClick={() => {navigate ('/community')}}>FAQ</p>
        </div>
        <div className='boxs'>
          <p onClick={() => {navigate('/dashboard/myaccount')}}>MY ACCOUNT</p>
        </div>
        <div className='boxs'>
          <p onClick={() => {navigate('/login')}}>LOG IN</p>
        </div>
      </div>
    </nav>
  );
}

export default LoadingPage(Logobar);
