// "use client";

// import React from "react";
// import { HiFire, HiOutlineTicket, HiHome, HiStar, HiViewList } from "react-icons/hi";
// import { FaRegSnowflake } from "react-icons/fa";
// import CategoryButton from "./CategoryButton";

// const CategoriesBar: React.FC = () => {
//   const categories = [
//     { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
//     { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
//     { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
//     { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
//     { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
//     { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
//     { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
//     { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
//     { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
//     { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
//     { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
//     { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
//     { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
//     { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
//     { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
//     { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
//     { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
//     { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
//     { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
//     { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
//     { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
//     { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
//     { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
//     { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
//     { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
//     { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
//     { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
//     { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
//     { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
//     { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
//   ];

//   return (
//     <div className="flex">
//       <div className="flex items-center space-x-6 overflow-x-auto py-2 border-b">
//         {categories.map((category, index) => (
//           <CategoryButton
//             key={index}
//             icon={category.icon}
//             label={category.label}
//             onClick={category.onClick}
//           />
//         ))}
//       </div>
//       <div className="ml-auto flex items-center space-x-2">
//         <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
//                 Filters
//         </button>
//         <div className="flex items-center space-x-2">
//           <span className="text-sm">Display total before taxes</span>
//           <input type="checkbox" className="toggle-checkbox" />
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useRef, useState, useEffect } from "react";
import { HiFire, HiOutlineTicket, HiHome, HiStar, HiViewList } from "react-icons/hi";
import { FaRegSnowflake } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import CategoryButton from "./CategoryButton";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const CategoriesBar: React.FC = () => {
  const categories = [
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
    { label: "Trending", icon: <HiFire />, onClick: () => console.log("Trending clicked") },
    { label: "Icons", icon: <HiOutlineTicket />, onClick: () => console.log("Icons clicked") },
    { label: "Arctic", icon: <FaRegSnowflake />, onClick: () => console.log("Arctic clicked") },
    { label: "Cabins", icon: <HiHome />, onClick: () => console.log("Cabins clicked") },
    { label: "Caves", icon: <HiStar />, onClick: () => console.log("Caves clicked") },
    { label: "Play", icon: <HiViewList />, onClick: () => console.log("Play clicked") },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });

      // After scrolling, check the scroll positions
      if (direction === "left" && scrollLeft <= clientWidth / 2) {
        setIsLeftDisabled(true);
      } else if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - clientWidth / 2) {
        setIsRightDisabled(true);
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Attach event listener for scroll position changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex items-center lg:justify-between justify-center mx-2 lg:mx-5">
      {/* Scrollable Categories with arrows */}
      <div className="flex-grow max-w-max md:max-w-[90%] lg:max-w-[80%] overflow-x-auto">
        <div className="relative flex whitespace-nowrap">
          {/* Left arrow - blur */}
          {!isLeftDisabled && (
            <>
              <button
                className="absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-20 bg-gradient-to-r from-zinc-950 to-transparent"
                onClick={() => scroll("left")}
              >
              </button>

              {/* Left arrow */}
              <button
                onClick={() => scroll("left")}
                className="absolute top-1/2 left-2 border-2 transform -translate-y-1/2 z-20 bg-my-cocoa-900 bg-opacity-50 rounded-full p-[10px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
                <SlArrowLeft size={15} />
              </button>
            </>
          )}

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-6 overflow-x-auto py-2 border-b scroll-smooth scrollbar-hide max-w-full whitespace-nowrap lg:ml-12 lg:mr-6"
          >
            {categories.map((category, index) => (
              <CategoryButton
                key={index}
                icon={category.icon}
                label={category.label}
                onClick={category.onClick}
              />
            ))}
          </div>

          {/* Right arrow */}
          {!isRightDisabled && (
            <>
              <button
                className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center w-20 bg-gradient-to-l from-zinc-950 to-transparent"
                onClick={() => scroll("right")}
              >
              </button>

              {/* Right arrow */}
              <button
                onClick={() => scroll("right")}
                className="absolute top-1/2 right-2 border-2 transform -translate-y-1/2 z-20 bg-my-cocoa-900 bg-opacity-50 rounded-full p-[10px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
                <SlArrowRight size={15} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Filters and Toggle */}
      <div className="flex-none md:max-w-[10%] lg:max-w-[20%] mx-4 py-8 lg:block hidden">
        <div className="flex items-center space-x-4 ml-4">
          <button className="flex items-center gap-x-3 px-4 py-2 border rounded-lg hover:border-my-cocoa-200">
            <MdOutlineCategory />
            Filters
          </button>
          <div className="flex items-center space-x-1 px-4 py-2 border rounded-lg hover:border-my-cocoa-200">
            <span>Display total before taxes</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;
