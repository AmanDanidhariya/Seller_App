import React from "react";
import Header from "../Header";
import CityList from "./CityList";
import HotelList from "./HotelList";

const Home = () => {
  return (
    <div>
      <Header />
      <CityList />
      <HotelList />
    </div>
  );
};

export default Home;
