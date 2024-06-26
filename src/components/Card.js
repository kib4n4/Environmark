import React from "react";
import "./Card.css";

const Card = ({ imageUrl, description, cardText, cardTitle }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt="Card Thumbnail" className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-description">{description}</p>
        <div className="about-card">
          <h3 className="about-card-title">{cardTitle}</h3>
          <p className="card-text" style={{backgroundColor:"greenyellow"}}>{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

export function Imagecard({imageUrl}) {
  return <img src={imageUrl} alt="Card Thumbnail" className="image-card" />;
}
