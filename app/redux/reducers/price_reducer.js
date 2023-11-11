import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
  price: 125,
};

let price_slicer = createSlice({
  name: "price counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    addToCart: (state) => {
      state.price = state.price * state.count;
    },
  },
});

export const { increment, decrement, addToCart } = price_slicer.actions;
export default price_slicer.reducer;
