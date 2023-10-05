import React, { useState } from "react";
import { useSelector } from "react-redux";
import data from "../assets/results";
import { BiBath } from "react-icons/bi";
import { GiBed } from "react-icons/gi";
import { PiBuildingsBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { ImHourGlass } from "react-icons/im";
import { NavLink } from "react-router-dom";

const HotelList = () => {
  const selectedCity = useSelector((state) => state.hotels.selectedCity);

  const [visibleHotel, setVisibleHotel] = useState(6);
  const [showMore ,setShowMore] = useState(true);

  // Filter the hotelData based on selectedCities
  const filteredHotels = data.filter((hotel) =>
    selectedCity.includes(hotel.city)
  );

  const handleShowMore = ()=>{
    setVisibleHotel((prev)=> prev + 3);
    setShowMore(!showMore)
  }

  return (
    <div className="mt-4">
      <section className="flex justify-center flex-wrap">
        {filteredHotels.slice(0, visibleHotel).map((hotel) => {
          const hotelName = hotel["name"].slice(0, 25);
          return (
            <NavLink
              to={`property/${hotel.id}`}
              key={hotel.id}
              className=" relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 max-h-[350px] bg-white rounded-lg p-2"
            >
              <figure>
                <span className="absolute left-3 top-4 px-2 py-1 bg-white text-blue-700 rounded-full">
                  For Rent
                </span>
                <span className="absolute right-2 top-4 text-blue-700 mx-2 bg-white p-1 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500">
                  <AiOutlineHeart />
                </span>
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className=" w-full h-[200px] bg-[whiteSmoke] rounded cover"
                />
              </figure>
              <div className="hotel_details">
                <div className="flex justify-between max-h-[150px]">
                  <p className="text-xl font-semibold break-normal">
                    {hotelName}
                  </p>
                </div>
                <div className="flex justify-around pb-4 border-b border-gray-300">
                  <p className="flex leading-2 items-center text-sm">
                    <span className="text-blue-500 mr-1">
                      <BiBath />
                    </span>
                    {hotel.bathrooms}
                  </p>
                  <p className="flex leading-2 items-center text-sm">
                    <span className="text-blue-500 mr-1">
                      <PiBuildingsBold />
                    </span>
                    {hotel.bedrooms}
                  </p>
                  <p className="flex leading-2 items-center text-sm">
                    <span className="text-blue-500 mr-1">
                      <GiBed />
                    </span>
                    {hotel.beds}
                  </p>
                </div>
                <div className="flex justify-between my-1">
                  <p className="text-medium">
                    <span className="text-xl font-semibold text-indigo-700">
                      ${hotel.price.rate}
                    </span>{" "}
                    / month
                  </p>
                  <div className="flex items-center">
                    <button className="text-white bg-indigo-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 hover:text-blue-500">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </section>
      {showMore && <div className="flex justify-center">
        <button
          className={`${
            visibleHotel.length > 6 ? "hidden" : ""
          }py-3 px-5 rounded-full bg-indigo-700 text-white flex items-center m-4`}
          onClick={handleShowMore}
        >
          <span className="mr-2">
            <ImHourGlass />
          </span>
          Show More
        </button>
      </div>}
    </div>
  );
};

export default HotelList;
