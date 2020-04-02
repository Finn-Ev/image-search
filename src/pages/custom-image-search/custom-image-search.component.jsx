import React, { useState, useEffect } from "react";
import "./custom-image-search.styles.scss";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";
import MyForm from "../../components/form/form.component";

import { connect } from "react-redux";

const CustomImageSearchPage = ({ imageAmount, match, history }) => {
  const [images, setImages] = useState([]);
  const [noImagesFound, setNoImagesFound] = useState(false);

  const urlQueryString = match.params.urlQueryString;

  const fetchImages = () => {
    fetch(
      `https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&q=${urlQueryString}&lang=de&per_page=${imageAmount}`
    )
      .then(res => res.json())
      .then(data => {
        const images = data.hits;
        if (images.length) {
          setImages(images);
          setNoImagesFound(false);
        } else if (!images.length) {
          setNoImagesFound(true);
        }
      });
  };

  useEffect(() => {
    fetchImages();
    console.log("2.4.20");
    
  }, [urlQueryString]);

  const handleSubmit = (e, queryString) => {
    e.preventDefault();
    history.push(`/suche/${queryString}`);
    fetchImages();
    window.scrollTo(0, 350)
  };

  return (
    <div className="user-search-image-page bg-light">
      <MyForm handleSubmit={handleSubmit} />
      {noImagesFound ? (
        <p className="no-images-found">Keine Bilder gefunden</p>
      ) : (
        <div>
          {urlQueryString && images.length ? (
            <p id="query-info" className="query-info bg-dark">Ergebnisse für "{urlQueryString}":</p>
          ) : (
            ""
          )}
          <div className="display-images">
            {images.map(image => (
              <PreviewImage key={image.id} image={image} />
            ))}
          </div>
        </div>
      )}

      {images.length > 3 ? <Footer /> : ""}
    </div>
  );
};

const mapStateToProps = state => ({
  imageAmount: state.searchImages.imageAmount,
});

export default connect(mapStateToProps)(CustomImageSearchPage);
