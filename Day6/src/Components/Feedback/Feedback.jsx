import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0); 

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <>
    <div className='feed'>
    <div className="feedback-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`}
            onClick={() => handleRatingClick(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>Your Rating: {rating} Stars</p>
      
    </div>
    </div>
    </>
  );
};

export default Feedback;
