import React, { useState } from 'react';
import "./modal.styles.scss"

import { connect } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.actions';
import { addToFavouriteImages, removeFromFavouriteImages } from '../../redux/favouriteImages/favouriteImages.actions';


const Modal = ({ closeModal, addToFavouriteImages, removeFromFavouriteImages, currentImage, favouriteImageIDs }) => {
    const [animateHeart, setAnimateHeart] = useState(false)

    const handleToggle = image => {
        if (favouriteImageIDs.includes(image.id)) {
            removeFromFavouriteImages(image.id);
            setAnimateHeart(false)
        } else if (!favouriteImageIDs.includes(image.id)) {
            addToFavouriteImages(image.id);
            setAnimateHeart(true)
        }
    };

    return (
        currentImage ?
            <div className="modal">
                <div className="modal-buttons">
                    <span
                        onClick={() => handleToggle(currentImage)}
                        className={`toggle-favourite ${favouriteImageIDs.includes(currentImage.id) ? 'is-favourite-image' : ''} ${animateHeart ? "animate-heart" : ""}`}
                    >
                        <i className="fas fa-heart"></i>
                    </span>
                    <span onClick={closeModal} className="close-modal">X</span>
                </div>
                <div className="modal-body">
                    <img src={currentImage.largeImageURL} alt="largeImage" />
                </div>
            </div>

            : null
    )

}

const mapStateToProps = (state => {
    return {
        currentImage: state.modal.currentImage,
        favouriteImageIDs: state.favouriteImages.imageIDs,
    }
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    addToFavouriteImages: image => dispatch(addToFavouriteImages(image)),
    removeFromFavouriteImages: image => dispatch(removeFromFavouriteImages(image))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)