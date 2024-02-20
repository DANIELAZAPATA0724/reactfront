import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageDisplay = ({ Url_image }) => {
  return <img src={Url_image} alt="Blog" />;
};

export default ImageDisplay;