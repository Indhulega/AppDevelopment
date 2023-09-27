import React, { useState } from 'react';
import "./Admindash.css"
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', userType: 'volunteer' },
    { id: 2, username: 'user2', email: 'user2@example.com', userType: 'npo' },
    // Add more users as needed
  ]);

  const getTotalUsers = (userType) => {
    return users.filter((user) => user.userType === userType).length;
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className='add'>
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="user-stats">
        <h2>User Statistics</h2>
        <p>Total Volunteers: {getTotalUsers('volunteer')}</p>
        <p>Total NPOs: {getTotalUsers('npo')}</p>
        <p>Total Users: {users.length}</p>
      </div>
      <div className="user-list">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.userType}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/"> 
        <button>Back</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AdminPanel;