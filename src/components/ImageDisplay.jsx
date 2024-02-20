import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageDisplay = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Blog" />;
};

export default ImageDisplay;