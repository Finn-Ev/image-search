import React, { useState, useEffect } from "react";
import "./custom-image-search.styles.scss";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";
import MyForm from "../../components/form/form.component";

import { connect } from "react-redux";

const CustomImageSearchPage = ({ imageAmount, queryString, match, history }) => {
  const [images, setImages] = useState([]);
  const [noImagesFound, setNoImagesFound] = useState(false);
  const [queryInfo, setQueryInfo] = useState("");

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
    setQueryInfo(urlQueryString);
  }, [urlQueryString]);

  const handleSubmit = e => {
    e.preventDefault();
    setQueryInfo(urlQueryString);
    history.push(`/suche/${queryString}`);
    fetchImages();
  };

  return (
    <div className="user-search-image-page bg-light">
      <MyForm handleSubmit={handleSubmit} />
      {noImagesFound ? (
        <p className="no-images-found">Keine Bilder gefunden</p>
      ) : (
        <div>
          {queryInfo && images.length ? (
            <p className="query-info bg-dark">Ergebnisse für "{queryInfo}":</p>
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
  queryString: state.searchImages.queryString,
  queryInfo: state.searchImages.queryInfo,
});

export default connect(mapStateToProps)(CustomImageSearchPage);
