import React from 'react';

const Card = ({ imageUrl, description, aboutText }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt="Card Thumbnail" className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-description">{description}</p>
        <div className="about-card">
          <h3 className="about-card-title">About Us</h3>
          <p className="about-card-text">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
