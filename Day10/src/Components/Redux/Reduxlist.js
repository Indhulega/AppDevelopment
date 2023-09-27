import React from "react";
import { Link } from "react-router-dom";
import "./Reduxlist.css";

import { useSelector } from 'react-redux';

function Reduxlist() {

    const featuredProducts = useSelector((state) => state.featuredProducts.products);

  return (
    <div>
   
    <div className='hero'>

    <h2 className="hero-head">Carte!</h2>
    <div className="product-list">
      {featuredProducts.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.imageUrl} alt={product.name} className="st" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to="./volunteer">
          <Link to={`/product/${product.id}`}>View Details</Link>
          </Link>
        </div>
      ))}
    </div>
    </div>
    
    </div>
  )
}

export default Reduxlist