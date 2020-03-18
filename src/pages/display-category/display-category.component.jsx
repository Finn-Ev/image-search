import React, { useState, useEffect } from "react";
import "./display-category.styles.scss";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";

const CategoryPage = ({ match }) => {
    const category = match.params.name;
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchCategoryImages();
    }, [category]);

    const fetchCategoryImages = () => {
        fetch(
            `https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&per_page=100&q=${category}&lang=de&safesearch=true}`
        )
            .then(res => res.json())
            .then(data => {
                const images = data.hits;
                setImages(images);

            });
    };
    return (
        <div className="category-wrapper ">
            <div className="category-heading">
                <h3>
                    Kategorie: {category.charAt(0).toUpperCase()}
                    {category.slice(1)}
                </h3>
            </div>
            <div className="category-images bg-light">
                {images.map(image => (
                    <PreviewImage key={image.id} image={image} />
                ))}
            </div>
            {images.length ? <Footer /> : ""}
        </div>
    );
};

export default CategoryPage;
