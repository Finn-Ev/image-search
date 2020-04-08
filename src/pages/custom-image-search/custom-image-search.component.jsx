import React, { useState, useEffect } from "react";
import "./custom-image-search.styles.scss";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";
import MyForm from "../../components/form/form.component";

import { connect } from "react-redux";

import { fetchCustomImages } from "../../api";

const CustomImageSearchPage = ({ imageAmount, match, history }) => {
  const [images, setImages] = useState([]);
  const urlQueryString = match.params.urlQueryString;

  useEffect(() => {
   const fetchAPI = async() => {
    setImages(await fetchCustomImages(urlQueryString, imageAmount))
   }
   fetchAPI()
   
  }, [urlQueryString, imageAmount]);

  const handleSubmit = async(e, queryString) => {
    e.preventDefault();
    history.push(`/suche/${queryString}`);
    setImages(await fetchCustomImages(urlQueryString, imageAmount))
    window.scrollTo(0, 350)
  };

  return (
    <div className="user-search-image-page bg-light">
      <MyForm handleSubmit={handleSubmit} />
      {!images.length ? (
        <p className="no-images-found">Keine Bilder gefunden</p>
      ) : (
        <div>
          {urlQueryString  ? (
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
