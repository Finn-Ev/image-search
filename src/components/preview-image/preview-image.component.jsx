import React from "react";
import "./preview-image.styles.scss";

import ImageModal from "../modal/modal.component";

const PreviewImage = ({ image }) => {
  const { webformatURL, user, id } = image;

  if(id ===  2534484){ // resolution too low
    return null
  }

  return (
    <div className="preview-image-wrapper">
      <img src={webformatURL} alt="" />
      <span className="image-footer">
        <p>&copy; {user}</p>
        <ImageModal image={image} />
      </span>
     
    </div>
  );
};

export default PreviewImage;
