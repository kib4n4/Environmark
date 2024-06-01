import React from "react";


function ImageCard(props) {
    return(
        <div className="image-card">
            <img src={props.imageUrl} alt="Card Thumbnail" className="image-card-image" />
        </div>
    );

};
export default ImageCard;