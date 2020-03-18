import React, { useState } from 'react';
import './preview-image-footer.styles.scss';

import { connect } from 'react-redux';

import { addToFavouriteImages, removeFromFavouriteImages } from '../../redux/favouriteImages/favouriteImages.actions';
import { openModal, closeModal } from '../../redux/modal/modal.actions';


const PreviewImageFooter = ({ addToFavouriteImages, removeFromFavouriteImages, openModal, favouriteImageIDs, image, }) => {
    const [animateHeart, setAnimateHeart] = useState(false)

    const { largeImageURL, user } = image;

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
        <div className="image-footer">
            <p>&copy; {image.id}</p>

            <div className="button-wrapper">
                <span className="modal-link" onClick={()=>openModal(image)}>
                    <i className="fas fa-search-plus"></i>
                </span>

                <span className="mobile-link">
                    <a href={largeImageURL}> <i className="fas fa-search-plus"></i></a>
                </span>

                <span
                    onClick={() => handleToggle(image)}
                    className={`toggle-favourite ${favouriteImageIDs.includes(image.id) ? 'is-favourite-image' : ''} ${animateHeart ? "animate-heart" : ""}`}
                >
                    <i className="fas fa-heart"></i>
                </span>
            </div>
        </div>

    );
};
const mapStateToProps = state => ({
    favouriteImageIDs: state.favouriteImages.imageIDs,
});

const mapDispatchToProps = dispatch => ({
    addToFavouriteImages: image => dispatch(addToFavouriteImages(image)),
    removeFromFavouriteImages: image => dispatch(removeFromFavouriteImages(image)),
    openModal: image => dispatch(openModal(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImageFooter);
