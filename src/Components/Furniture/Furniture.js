import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./furniture.css";
const Furniture = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Furniture.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-center">PRODUCTS</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
