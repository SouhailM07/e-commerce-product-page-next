import { configureStore } from "@reduxjs/toolkit";
import price_reducer from "./reducers/price_reducer";

const store = configureStore({
  reducer: {
    price: price_reducer,
  },
});

export default store;
