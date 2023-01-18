import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const { name, price, picture } = product;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={picture} className="card-img-top h-100" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ${price}</p>
          <Link>DETAIL'S</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
