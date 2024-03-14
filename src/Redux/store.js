import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./order.js";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
