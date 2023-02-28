import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cart-slice";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addCartBtn = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addCartBtn}>Add to cart</button>
    </div>
  );
};

export default Product;
