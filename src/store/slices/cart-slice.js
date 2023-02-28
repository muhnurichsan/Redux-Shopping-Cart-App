import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
        state.cartList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
