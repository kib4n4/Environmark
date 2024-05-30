import React from "react";

function ImageLogo({ src, alt, width, height }) {
  return (
    <div className="image-logo">
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}

export default ImageLogo;
