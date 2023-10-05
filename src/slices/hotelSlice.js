import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json"

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotelData: data.results, //initial state for cara data
    selectedCity:[],//initialize with an empty array for selected city
  },
  reducers: {
    setHotelData:(state, action)=>{
        state.action = action.payload
    },
    setSelectedCity:(state, action)=>{
        //update selectedCity with payload 
        state.selectedCities = action.payload;
    }
  },
});

export const {setHotelData, setSelectedCities} = hotelSlice.actions;
export default hotelSlice.reducer;