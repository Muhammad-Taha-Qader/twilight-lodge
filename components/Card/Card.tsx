"use client";

import React, { useState } from "react";
import { HiOutlineShare } from "react-icons/hi";
import Carousel from "./Carousel";
import SharePopup from "./ SharePopup/SharePopup";

interface AirbnbCardProps {
  title: string;
  host: string;
  isSoldOut: boolean;
  images: string[];
}

const Card: React.FC<AirbnbCardProps> = ({ title, host, isSoldOut, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    console.log("Share togalled");
  };
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative">
      {/* Image Carousel */}
      <Carousel images={images} />

      {/* Share Button */}
      <button onClick={togglePopup} className="absolute top-2 right-2 bg-my-cocoa-50 hover:bg-my-cocoa-200 p-2 rounded-full shadow-md">
        <HiOutlineShare className="text-gray-700" />
      </button>
      <SharePopup isOpen={isOpen} togglePopup={togglePopup}/>
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-500">Hosted by {host}</p>
        <p className="text-sm font-semibold mt-2 text-red-600">{isSoldOut ? "Sold out" : "Available"}</p>
      </div>
    </div>
  );
};

export default Card;
