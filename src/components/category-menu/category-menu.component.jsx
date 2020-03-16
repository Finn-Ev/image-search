import React from 'react'
import "./category-menu.styles.scss"

import categories from "./categories" // category array
import CategoryPreview from '../category-preview/category-preview.component'

function CategoryMenu() {
    return (
        <div className="category-menu bg-light">
            {categories.map(category => {
               return <CategoryPreview key={category.name} category={category}/>
            })}
        </div>
    )
}

export default CategoryMenu
