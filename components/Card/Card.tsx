"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router for app directory
import { HiOutlineShare } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Carousel from "./Carousel";
import SharePopup from "./ SharePopup/SharePopup";

interface AirbnbCardProps {
  id: string;
  title: string;
  location: string;
  distance: string;
  dateRange: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
  isSoldOut: boolean;
  images: string[];
}

const Card: React.FC<AirbnbCardProps> = ({
  id,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title,
  location,
  distance,
  dateRange,
  price,
  rating,
  isFavorite = false,
  isSoldOut,
  images,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // now from next/navigation

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleCardClick = () => {
    router.push(`/listings/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="max-w-sm w-80 md:w-96 rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
    >
      {/* Image Carousel */}
      <Carousel images={images} />

      {/* Guest Favorite Badge */}
      {isFavorite && (
        // <span className="absolute top-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded-full shadow-md">
        <span className="absolute top-[5%] left-[5%] bg-white text-black text-xs md:text-sm font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full shadow-md">
          Guest favorite
        </span>
      )}

      {/* Share Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click when sharing
          togglePopup();
        }}
        className="absolute top-[5%] right-[5%] bg-white hover:bg-gray-100 p-1.5 md:p-2 rounded-full shadow-md z-20"
        // className="absolute top-2 right-2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md z-20"
      >
        <HiOutlineShare className="text-gray-700" />
      </button>
      <SharePopup isOpen={isOpen} togglePopup={togglePopup} />

      {/* Card Content */}
      <div className="p-4">
        {/* Location and Rating */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold truncate">{location}</h2>
          <div className="flex items-center text-sm text-gray-300">
            <AiFillStar className="text-yellow-500 mr-1" />
            <span>{rating.toFixed(2)}</span>
          </div>
        </div>

        {/* Distance and Date Range */}
        <p className="text-sm text-gray-400">{distance} away</p>
        <p className="text-sm text-gray-400">{dateRange}</p>

        {/* Price */}
        <p className="text-lg font-bold mt-2 text-my-cocoa-50">
          ${price} <span className="text-sm font-normal text-gray-400">night</span>
        </p>

        {/* Availability Status */}
        <p className={`text-sm font-semibold mt-2 ${isSoldOut ? "text-red-600" : "text-green-600"}`}>
          {isSoldOut ? "Sold out" : "Available"}
        </p>
      </div>
    </div>
  );
};

export default Card;
