import React from "react";
import { HiOutlineShare } from "react-icons/hi";
import Carousel from "./Carousel";

interface AirbnbCardProps {
  title: string;
  host: string;
  isSoldOut: boolean;
  images: string[];
}

const Card: React.FC<AirbnbCardProps> = ({ title, host, isSoldOut, images }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative">
      {/* Image Carousel */}
      <Carousel images={images} />

      {/* Share Button */}
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
        <HiOutlineShare className="text-gray-700" />
      </button>

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
