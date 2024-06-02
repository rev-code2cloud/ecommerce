
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div className="rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</div>
            </div>
        </div>
    );
};

export default ProductCard;
