import React from "react";
import "./modal.styles.scss";

import { connect } from "react-redux";
import { closeModal } from "../../redux/modal/modal.actions";
import { toggleFavouriteImage } from "../../redux/favouriteImages/favouriteImages.actions";

const Modal = ({
  closeModal,
  toggleFavouriteImage,
  currentImage,
  favouriteImageIDs,
}) => {
  return currentImage ? (
    <div className="modal">
      <div className="modal-buttons">
        <span
          onClick={() => toggleFavouriteImage(currentImage.id)}
          className={`toggle-favourite ${
            favouriteImageIDs.includes(currentImage.id)
              ? "is-favourite-image"
              : ""
          }`}
        >
          <i className="fas fa-heart"></i>
        </span>
        <span onClick={closeModal} className="close-modal">
          X
        </span>
      </div>
      <div className="modal-body">
        <img src={currentImage.largeImageURL} alt="largeImage" />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    currentImage: state.modal.currentImage,
    favouriteImageIDs: state.favouriteImages.imageIDs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  toggleFavouriteImage: (image) => dispatch(toggleFavouriteImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
