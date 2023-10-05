import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/results";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    selectedCity: [], //initialize with an empty array for selected city
  },
  reducers: {
    setSelectedCity: (state, action) => {
      //update selectedCity with payload
      state.selectedCity = action.payload;
    },
  },
});

export const { setSelectedCity } = hotelSlice.actions;
export default hotelSlice.reducer;
