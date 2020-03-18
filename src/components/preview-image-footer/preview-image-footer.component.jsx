import React, { useState } from 'react';
import './preview-image-footer.styles.scss';

import { connect } from 'react-redux';

import { toggleFavouriteImage } from '../../redux/favouriteImages/favouriteImages.actions';
import { openModal, closeModal } from '../../redux/modal/modal.actions';


const PreviewImageFooter = ({ toggleFavouriteImage, openModal, favouriteImageIDs, image, }) => {


    const { largeImageURL, user, userImageURL } = image;

    return (
        <div className="image-footer">
            <p>&copy; {user}</p>

            <div className="button-wrapper">
                <span className="modal-link" onClick={() => openModal(image)}>
                    <i className="fas fa-search-plus"></i>
                </span>

                <span className="mobile-link">
                    <a href={largeImageURL}> <i className="fas fa-search-plus"></i></a>
                </span>

                <span
                    onClick={() => toggleFavouriteImage(image.id)}
                    className={`toggle-favourite ${favouriteImageIDs.includes(image.id) ? 'is-favourite-image' : ''}`}
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
    toggleFavouriteImage: image => dispatch(toggleFavouriteImage(image)),
    openModal: image => dispatch(openModal(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImageFooter);
