import React from 'react';
import "./category-preview.styles.scss"

import { withRouter } from 'react-router-dom';

const CategoryPreview = ({ history, category }) => {
    const { imageURL, name } = category

    const handleClick = () => {
        history.push(`/kategorie/${name.toLowerCase()}`)
        
    }
    return (
        <div onClick={handleClick} className="category-preview" style={{ backgroundImage: `url(${imageURL})` }}>
            <div className="name-wrapper">
                <span>{name}</span>
            </div>

        </div>
    );
}

export default withRouter(CategoryPreview)