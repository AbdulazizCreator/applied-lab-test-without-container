import React from "react";
import "./ProductCard.scss";
import star from "../../assets/images/star.svg";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__body">
        <span>Free shipping</span>
        <img src={img} alt={name} />
      </div>
      <div className="product-card__footer">
        <h2>Product Name</h2>
        <div className="product-card__rating">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
        </div>
        <p>{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
