import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/results";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotelData: data, //initial state for hotel data
    selectedCity: [], //initialize with an empty array for selected city
  },
  reducers: {
    setHotelData: (state, action) => {
      state.action = action.payload;
    },
    setSelectedCity: (state, action) => {
      //update selectedCity with payload
      state.selectedCity = action.payload;
    },
  },
});

export const { setHotelData, setSelectedCity } = hotelSlice.actions;
export default hotelSlice.reducer;
