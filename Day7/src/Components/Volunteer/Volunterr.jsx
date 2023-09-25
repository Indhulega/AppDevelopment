import React, { useState } from 'react';
import './Volunteer.css';


import LoadingPage from '../LoadingPage/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../state/index';

function Volunteer(){
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!foodType || !quantity || !pickupTime || !address) {
      alert('Please fill out all fields.');
      return;
    }

    // Add logic for form submission here

  }
  return(
    <>
    <div className='vol'>
    <div className="donorsta-container">
      <div className="register-container">
        <h1>REGISTER FOR FOOD DONATION</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Type of Food
            <input 
              type="text" 
              value={foodType} 
              onChange={(e) => setFoodType(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="foodType" 
              required 
              />
          </label>
          <label>
            Quantity (in kg)
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="quantity" 
              required 
            />
          </label>
          <label>
            Preferred Pickup Time
            <input 
              type="time" 
              value={pickupTime} 
              onChange={(e) => setPickupTime(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="pickupTime" 
              required 
              />
          </label>
          <label>
            Address
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="address" 
              required 
              />
          </label>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
    </div>
    
              </>
  )
}

export default Volunteer;
