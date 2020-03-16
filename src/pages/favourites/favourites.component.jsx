import React, { useState, useEffect } from "react";
import "./favourites.styles.scss";

import { connect } from "react-redux";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";

const FavoritenPage = ({ favouriteImageIDs }) => {
  const [favouriteImages, setFavouriteImages] = useState([]);
  let cachedFavouriteImages = [];

  const fetchFavouriteImages = () => {
    if (favouriteImageIDs.length) {
      favouriteImageIDs.forEach(imageID => {
        fetch(
          `https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&id=${imageID}`
        )
          .then(res => res.json())
          .then(data => {
            const image = data.hits;
            cachedFavouriteImages = [...cachedFavouriteImages, ...image];
            setFavouriteImages(cachedFavouriteImages);
          });
      });
    } else {
      setFavouriteImages([]);
    }
  };

  useEffect(() => {
    fetchFavouriteImages();
  }, [favouriteImageIDs]);

  return (
    <div className="favoriten-page bg-light">
      <div className="header-area">
        <h3>Deine Favoriten:</h3>
      </div>

      <div className="favourite-images">
        {favouriteImages.length ? (
          favouriteImages.map(image => {
            return <PreviewImage key={image.id} image={image} />;
          })
        ) : (
          <span className="empty">
            Du hast keine Bilder zu deinen Favoriten hinzugefügt
          </span>
        )}
      </div>
      {favouriteImages.length > 3 ? <Footer /> : ""}
    </div>
  );
};

const mapStateToProps = state => ({
  favouriteImageIDs: state.favouriteImages.imageIDs,
});

export default connect(mapStateToProps)(FavoritenPage);
