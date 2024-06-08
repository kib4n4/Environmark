import React, { useState } from "react";
import './public/images';

function ImageLogo({image,title, description}) {
  const[activeIndex,setActiveIndex] = useState(0);
  activeIndex = (()=>{
    for(let i=0; i<activeIndex.length; i++){
      <div>
      <img src={setActiveIndex={'./public/images'}}/>  
      </div>
    }
    
  })

  return (
    <div className="image-logo">
     
    </div>
  );
}

export default ImageLogo;
