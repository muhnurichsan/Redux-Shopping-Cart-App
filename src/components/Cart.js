import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cart-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((s) => s.cart.cartList.length);
  const handleClickShowCart = () => {
    dispatch(cartActions.toggleShowCart());
  };
  return (
    <div className="cartIcon" onClick={handleClickShowCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
