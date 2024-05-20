import React from "react";

 function DisplayArea(props) {
    return(
        <div>
            <h1>Display Area</h1>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            
        </div>
    );
 }
export default DisplayArea;