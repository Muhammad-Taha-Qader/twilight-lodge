"use client";

import React, { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking on the carousel button
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // setCurrentIndex can be used in two ways: By passing a new value directly.  By passing a function that takes the current state (in this case currentIndex) as an argument (in this case prevIndex has currentIndex val), 
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking on the carousel button
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    // <div className="relative ">
    <div className="relative w-96 h-64 overflow-hidden">
      {/* <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-64 object-cover" /> */}
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        // fill
        width={1920}
        height={256}
        className="object-cover w-full h-64"
        sizes="100vw"
      />
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            // className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            className={`h-2 w-2 rounded-full shadow-sm shadow-black/60 ${index === currentIndex ? "bg-my-cocoa-300" : "bg-my-cocoa-800"}`}
          />
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute z-20 top-1/2 left-2 transform -translate-y-1/2 hover:bg-my-cocoa-600 bg-my-cocoa-900 bg-opacity-50 rounded-full p-2">
        {/* &#9664; */}
        <SlArrowLeft/>
      </button>
      <button
        onClick={nextImage}
        className="absolute z-20 top-1/2 right-2 transform -translate-y-1/2 hover:bg-my-cocoa-600 bg-my-cocoa-900 bg-opacity-50 rounded-full p-2">
        {/* &#9654; */}
        <SlArrowRight/>
      </button>
    </div>
  );
};

export default Carousel;
