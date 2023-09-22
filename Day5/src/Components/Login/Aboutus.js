import React from "react";
import "./Aboutus.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

function  Aboutus() {
  const nav=useNavigate(" ");
  const don=()=>{
    nav("/")
  }
  return (
    <div className="abou">
      <Navbar/>
      
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
         <div className="logo1">onClick={don} Donate!</div>

          <p className="text-wrapper">
            Welcome to Donate, a platform dedicated to reducing food waste and addressing hunger in our
            communities.
          </p>
          <div className="div">Our Mission</div>
          <div className="overlap">
            <p className="at-mealmiracle-we">
            The day hunger disappears, the world will see the greatest spiritual explosion humanity has ever seen.” 
            – Federico Garcia Lorca
            
            “There’s enough on this planet for everyone’s needs but not for everyone’s greed.” 
            – Mahatma Gandhi
            “Food is the moral right of all who are born into this world.” – Norman Borlaug
            </p>
            <div className="text-wrapper-2">What We Do</div>
          </div>
          <p className="facilitating-food">
            <span className="span">
              Facilitating Food Donations:
              <br />
            </span>
            <span className="text-wrapper-3">
              We provide a user-friendly platform for restaurants, cafes, and individuals to easily donate excess food
              that might otherwise go to waste. Our app connects donors with local organizations that can distribute the
              food to those who need it most.
            </span>
          </p>
          <div className="text-wrapper-4">About US</div>
          <p className="empowering">
            <span className="span">
              Empowering Communities:
              <br />
            </span>
            <span className="text-wrapper-3">
              We believe that local communities play a crucial role in addressing food insecurity. By partnering with
              local businesses and volunteers, we create a network of support that ensures no one in our community goes
              hungry.
              <br />
            </span>
          </p>
          <p className="our-team-behind">
            <span className="span">
              Our Team
              <br />
            </span>
            <span className="text-wrapper-3">
              Behind MealMiracle is a passionate team dedicated to making a positive impact. We come from diverse
              backgrounds, but we share a common goal: to create a world where everyone has access to nutritious meals.
            </span>
          </p>
          <p className="contact-us-have">
            <span className="span">
              Contact Us
              <br />
            </span>
            <span className="text-wrapper-3">
              Have questions or suggestions? We&#39;d love to hear from you! Reach out to us at
              9487423696 
              visit our [abc.xyz] page for more information.
              <br />
            </span>
          </p>
          <p className="p">Thank you for joining us in the fight against hunger!</p>
        </div>
      </div>
      <Footer/>

    </div>
  );
};
export default Aboutus;