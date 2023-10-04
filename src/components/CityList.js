import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";

const CityList = () => {
  const hotelData = useSelector((state) => state.hotels.hotelData);
  console.log(hotelData);
  const cityArray = ["Paris", "Bagneux", "Le Bourget", "Boulogne-Billancourt"];

  return (
    <div className="flex justify-between">
      <div>
        {cityArray.map((city) => (
          <button
            key={city.id}
            className="min-w-[150px] text-sm mx-2 p-4 bg-gray-300 rounded-full active:bg-indigo-700 active:text-white hover:bg-indigo-700 hover:text-white"
          >
            {city}
          </button>
        ))}
      </div>
      <div>
        <button className=" flex items-center justify-center  min-w-[150px] text-sm mx-2 p-4 bg-gray-300 text-indigo-700 rounded-full  hover:bg-white hover:text-black">
          View All{" "}
          <span className="ml-2">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CityList;
