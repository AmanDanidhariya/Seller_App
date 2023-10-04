import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json"

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotelData: data.results, //initial state for cara data
  },
  reducers: {
    setHotelData:(state, action)=>{
        state.action = action.payload
    }
  },
});

export const {} = hotelSlice.actions;
export default hotelSlice.reducer;