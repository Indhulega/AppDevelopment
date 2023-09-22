import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Home from './Components/Login/Register/Home';
import Aboutus from './Components/Login/Aboutus';
import { Provider } from 'react-redux';
import store from './Components/Login/Store';
import Reduxlist from './Components/Login/Register/Reduxlist';
import Dashboard from './Components/Login/Dashboard';
import Navbar from './Components/Login/navbar';

const App = () => {
    return (
      <Provider store={store}>
        
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/list" element={<Reduxlist/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    );
};

export default App;
