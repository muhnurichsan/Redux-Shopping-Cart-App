import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      } else {
        state.cartList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      }
    },
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    removeFromCart(state, action) {
      const idItem = action.payload;
      const indexPickItem = state.cartList.map((c) => c.id).indexOf(idItem);
      const existingItem = state.cartList.find((item) => item.id === idItem);
      if (existingItem.quantity === 1) {
        state.cartList.splice(indexPickItem, 1);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
