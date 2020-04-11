import React, { useState, useEffect } from "react";
import "./display-category.styles.scss";

import PreviewImage from "../../components/preview-image/preview-image.component";
import Footer from "../../components/footer/footer.component";
import { fetchCategoryImages } from "../../api";



const CategoryPage = ({ match }) => {
    const category = match.params.name;
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setImages(await fetchCategoryImages(category))
        }
        fetchAPI()
        console.log("live");

    }, [category]);



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
