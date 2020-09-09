import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="prodcut__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="prodcut__rating">
          <p></p>
        </div>
      </div>

      <img src="" alt="" />
      <button>Add to Basket</button>
    </div>
  );
}
export default Product;
