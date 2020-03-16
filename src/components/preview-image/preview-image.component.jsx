import React from "react";
import "./preview-image.styles.scss";

import ImageModal from "../modal/modal.component";

const PreviewImage = ({ image }) => {
  const { webformatURL, user } = image;

  return (
    <div
      className="preview-image"
      style={{ backgroundImage: `url(${webformatURL})` }}
    >
      <span className="copyright">
        <p>&copy; {user}</p>
      </span>
      <ImageModal image={image} />
    </div>
  );
};

export default PreviewImage;
