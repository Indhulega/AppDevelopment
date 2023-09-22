
import React, { useState } from 'react';
import "./Dashboard.css";
import Navbar from './navbar';
import Sidebar from './Sidebar';
const Dashboard = () => {
  const [donations, setDonations] = useState([
    { id: 1, foodItem: 'naan', quantity: 10 },
    { id: 2, foodItem: 'Rice', quantity: 5 },
    { id: 3, foodItem: 'Chappathi', quantity: 8 },
    { id:4, foodItem:'Channa masala', quantity:10}
    
  ]);

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className='dahful'/>
      <h1>Food Donation Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {donations.map(donation => (
            <tr key={donation.id}>
              <td>{donation.foodItem}</td>
              <td>{donation.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Dashboard;
