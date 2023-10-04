import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../slices/hotelSlice"

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});
export default store;