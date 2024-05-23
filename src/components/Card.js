import React from 'react';

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Thumbnail" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
      </div>
      <div className="aboutCard">
      <p style={{fontFamily:'sans-serif',fontSize:20}}>
      About us
Environmark Limited is a private limited consulting company incorporated in Kenya in
December 2017 under the Companies Act, 2015. We offer consultancy services in environmental
management, environmental impact and audit assessment, occupational safety and health and
climate change. Our staff are highly qualified, experienced and client focused in delivering
innovative, efficient and cost effective solutions. We partner and work together with other like-
minded firms in promoting the sustainable development agenda.
         
      </p>   
   </div> 
    </div>
  );
};

export default Card;
