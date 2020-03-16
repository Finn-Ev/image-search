import React, { useState } from 'react';
import './modal.styles.scss';

import { connect } from 'react-redux';

import { addToFavouriteImages, removeFromFavouriteImages } from '../../redux/favouriteImages/favouriteImages.actions';

import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const ImageModal = ({ addToFavouriteImages, removeFromFavouriteImages, favouriteImageIDs, image }) => {
    const [show, setShow] = useState(false);
    const [animateHeart, setAnimateHeart] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { largeImageURL } = image;

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
        <div>
            <div className="button-wrapper">
                <span className="modal-link-desktop" onClick={handleShow}>
                    <i className="fas fa-search-plus"></i>
                </span>

                <span className="modal-link-mobile">
                    <a href={image.largeImageURL}> <i className="fas fa-search-plus"></i></a>
                </span>

                <span
                    onClick={() => handleToggle(image)}
                    className={`toggle-favourite ${favouriteImageIDs.includes(image.id) ? 'is-favourite-image' : ''} ${animateHeart ? "animate-heart" : ""}`}
                >
                    <i className="fas fa-heart"></i>
                </span>
            </div>

            <Modal size="lg" className="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body style={{ backgroundImage: `url(${largeImageURL})` }}> </Modal.Body>
                <Modal.Footer>
                    <span
                        onClick={() => handleToggle(image)}
                        className={`toggle-favourite-modal ${favouriteImageIDs.includes(image.id) ? 'is-favourite-image' : ''} ${animateHeart ? "animate-heart" : ""}`}
                    >
                        <i className="fas fa-heart"></i>
                    </span>
                    <Button>
                        <a href={largeImageURL}>
                            Vollbild&nbsp;<i className="fas fa-external-link-alt"></i>
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
const mapStateToProps = state => ({
    favouriteImageIDs: state.favouriteImages.imageIDs,
});

const mapDispatchToProps = dispatch => ({
    addToFavouriteImages: image => dispatch(addToFavouriteImages(image)),
    removeFromFavouriteImages: image => dispatch(removeFromFavouriteImages(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
