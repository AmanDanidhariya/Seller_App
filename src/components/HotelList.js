import React, { useState } from "react";
import { useSelector } from "react-redux";
import data from "../assets/results";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const HotelList = () => {
  const selectedCity = useSelector((state) => state.hotels.selectedCity);

  // Filter the hotelData based on selectedCities
  const filteredHotels = data.filter((hotel) =>
    selectedCity.includes(hotel.city)
  );



  return (
    <section className="flex justify-center flex-wrap">
      {filteredHotels.map((hotel, i) => {
        return (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 h-[300px] bg-white rounded-lg p-2"
          >
            <figure>
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className=" w-full h-[200px] bg-[whiteSmoke] rounded cover"
              />
            </figure>
            <div className="hotel_details">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">{hotel.name}</p>
              </div>
              <div className="flex justify-around pb-4 border-b border-gray-300">
                <p className="flex leading-2 items-center text-sm">
                  <span className="text-blue-500 mr-1">
                    <BsSpeedometer2 />
                  </span>
                  {hotel.bathrooms}
                </p>
                <p className="flex leading-2 items-center text-sm">
                  <span className="text-blue-500 mr-1">
                    <PiSteeringWheelDuotone />
                  </span>
                  {hotel.bedrooms}
                </p>
              </div>
              <div className="flex justify-between my-1">
                <p className="text-medium">
                  <span className="text-xl font-semibold">
                    ${hotel.price.rate}
                  </span>{" "}
                  / month
                </p>
                <div className="flex items-center">
                  <span className="text-blue-500 mx-2 bg-emerald-200 p-1 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500">
                    <AiOutlineHeart />
                  </span>
                  <button className="text-white bg-blue-500 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 hover:text-blue-500">
                    Rent now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HotelList;
