import React from "react";
import "./preview-image.styles.scss";

import PreviewImageFooter from "../preview-image-footer/preview-image-footer.component";

const PreviewImage = ({ image }) => {
  const { webformatURL, id } = image;

  const unusableImages = [384178, 2534484]// images where resolution is too low
  
  if(unusableImages.includes(id)){ 
    return null
  }

  return (
    <div className="preview-image-wrapper">
      <img src={webformatURL} alt="" />
      <PreviewImageFooter image={image}/>
    </div>
  );
};

export default PreviewImage;
