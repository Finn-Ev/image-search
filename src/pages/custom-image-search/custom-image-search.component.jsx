import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCustomImages } from "../../api";
import Footer from "../../components/footer/footer.component";
import MyForm from "../../components/form/form.component";
import PreviewImage from "../../components/preview-image/preview-image.component";
import "./custom-image-search.styles.scss";

const CustomImageSearchPage = ({ imageAmount, match, history }) => {
  const [images, setImages] = useState([]);
  const urlQueryString = match.params.urlQueryString;

  useEffect(() => {
    const fetchAPI = async () => {
      setImages(await fetchCustomImages(urlQueryString, imageAmount));
    };
    fetchAPI();
  }, [urlQueryString]);

  const handleSubmit = async (e, queryString) => {
    e.preventDefault();
    history.push(`/suche/${queryString}`);

    setImages(await fetchCustomImages(urlQueryString, imageAmount));
    window.scrollTo(0, 350);
  };

  return (
    <div className="user-search-image-page bg-light">
      <MyForm handleSubmit={handleSubmit} />
      <div>
        {urlQueryString ? (
          <p id="query-info" className="query-info bg-dark">
            {images.length === 0
              ? `Keine Ergebnisse für ${urlQueryString}`
              : `Ergebnisse für "${urlQueryString}": (${images.length})`}
          </p>
        ) : (
          ""
        )}
        <div className="display-images">
          {images.map((image) => (
            <PreviewImage key={image.id} image={image} />
          ))}
        </div>
      </div>

      {images.length > 3 ? <Footer /> : ""}
    </div>
  );
};

const mapStateToProps = (state) => ({
  imageAmount: state.imageAmount,
});

export default connect(mapStateToProps)(CustomImageSearchPage);
