import React, { useState, useEffect } from "react";
import "./favourites.styles.scss";

import { connect } from "react-redux";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";

const FavoritenPage = ({ favouriteImageIDs }) => {
  const [favouriteImages, setFavouriteImages] = useState([]);

  useEffect(() => {
   fetchFavouriteImages()
  }, [favouriteImageIDs]);

  const fetchFavouriteImages = () => {
    let stackedFavouriteImages = []
    try {
        if (favouriteImageIDs.length) {
           favouriteImageIDs.forEach( async imageID => {
                const response = await fetch(`https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&id=${imageID}`)
                const data = await response.json()
                const image = data.hits
                stackedFavouriteImages = [...stackedFavouriteImages, ...image];     
                setFavouriteImages(stackedFavouriteImages)
            });
           
        } else {
          setFavouriteImages([])
        }
    } catch (error) {
        throw error
    }
};

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
