import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import data from "../assets/results";
import { Link, useParams } from "react-router-dom";
import { BiBath } from "react-icons/bi";
import { PiBuildingsBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { GiBed } from "react-icons/gi";

const SingleCard = () => {
  const { id } = useParams();
  // const selectedCity = useSelector((state) => state.hotels.selectedCity);

  const [selectedHotel, setSelectedHotel] = useState(null);

  console.log(selectedHotel);

  useEffect(() => {
    //find the selected hotel based on id parameter
    const hotel = data.find((item) => item.id === id);
    //set selected hotel
    setSelectedHotel(hotel);
  }, [id]);

  if (!selectedHotel) {
    return <div>hotel not found</div>;
  }

  return (
    <>
      <section className="flex justify-center">
        <div
          key={selectedHotel.id}
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
              src={selectedHotel.images[0]}
              alt={selectedHotel.name}
              className=" w-full h-[200px] bg-[whiteSmoke] rounded cover"
            />
          </figure>
          <div className="hotel_details">
            <div className="flex justify-between max-h-[150px]">
              <p className="text-xl font-semibold break-normal">
                {selectedHotel.name}
              </p>
            </div>
            <div className="flex justify-around pb-4 border-b border-gray-300">
              <p className="flex leading-2 items-center text-sm">
                <span className="text-blue-500 mr-1">
                  <BiBath />
                </span>
                {selectedHotel.bathrooms}
              </p>
              <p className="flex leading-2 items-center text-sm">
                <span className="text-blue-500 mr-1">
                  <PiBuildingsBold />
                </span>
                {selectedHotel.bedrooms}
              </p>
              <p className="flex leading-2 items-center text-sm">
                <span className="text-blue-500 mr-1">
                  <GiBed />
                </span>
                {selectedHotel.beds}
              </p>
            </div>
            <div className="flex justify-between my-1">
              <p className="text-medium">
                <span className="text-xl font-semibold">
                  ${selectedHotel.price.rate}
                </span>{" "}
                / month
              </p>
              <div className="flex items-center">
                <span className="text-blue-500 mx-2 bg-emerald-200 p-1 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500">
                  <AiOutlineHeart />
                </span>
                <button className="text-white bg-blue-500 px-3 py-2  rounded-lg text-sm hover:bg-gray-200 hover:text-blue-500">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
      <Link to="/" className="px-6 py-4 bg-indigo-600  rounded-lg text-white hover:text-black">
        Back
      </Link>
      </div>
    </>
  );
};

export default SingleCard;
