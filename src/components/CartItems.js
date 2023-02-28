import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartList = useSelector((s) => s.cart.cartList);
  console.log(cartList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartList.map((item, index) => {
            return (
              <CartItem
                key={`item-${item.id}`}
                id={item.id}
                price={item.price}
                name={item.name}
                quantity={item.quantity}
                total={item.total}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
