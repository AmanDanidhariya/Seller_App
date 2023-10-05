import React, { useEffect, useMemo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../slices/hotelSlice";

const CityList = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.hotels.selectedCity);

  const cityArray = useMemo(
    () => ["Paris", "Bagneux", "Le Bourget", "Boulogne-Billancourt"],
    []
  );

  useEffect(() => {
    if (selectedCity.length === 0) {
      dispatch(setSelectedCity(cityArray[0]));
    }
  }, [cityArray, selectedCity, dispatch]);

  //filter array on city button
  const handleCityButtonClick = (city) => {
    if (selectedCity.includes(city)) {
      //remove city if already selected
      dispatch(setSelectedCity(selectedCity.filter((c) => c !== city)));
    } else {
      // Clear the selected cities and select the clicked city
      dispatch(setSelectedCity([city]));
    }
  };

  return (
    <div className="flex justify-between">
      <div>
        {cityArray.map((city, i) => (
          <button
            key={i}
            className={`min-w-[150px] text-sm mx-2 p-4 bg-gray-300 rounded-full ${
              selectedCity.includes(city)
                ? "bg-indigo-700 text-white"
                : "hover:bg-indigo-700 hover:text-white"
            }`}
            onClick={() => handleCityButtonClick(city)}
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
