import React from "react";
import "../Home.css";
import "../navbar";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";


function Home ()  {
  return (
   <>
   <Navbar/>
   <Sidebar/>

  <div className= "homm"/>    
  <Footer/>
   </>
  );
};
export default Home;