"use client";
import { useState } from "react";
// import Navbar from "@/components/Navbar/Navbar";

import CategoriesBar from "@/components/Navbar/CategoriesBar/CategoriesBar";
import ListingsList from "@/components/ListingsList/ListingsList";
import AuthButton from "@/components/Auth/AuthButton";
import SearchBar from "@/components/Navbar/SearchBar";
import Vacations from "@/components/Animations/Vacations";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing GitHub and LinkedIn from Font Awesome


export default function Home() {
  const [searchQuery, setSearchQuery ] = useState("");

  return (
    <div>
      {/* <Navbar searchQuery={searchQuery} setSearchQuery = {setSearchQuery}/> */}
      <div className="w-[75%] mx-auto flex justify-center mt-4 md:mt-0">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="my-8 ">
        <CategoriesBar />
      </div>
      {/* <h2 className="py-4 text-2xl text-center font-bold">Places For You 🗺️🏕️🏡🌎</h2> */}
      <h2 className="py-4 text-2xl text-center font-bold">Places For You 🏕️</h2>
      <div className="my-5">
        <ListingsList searchQuery={searchQuery} />
      </div>

      {/* Join Menu */}
      <div className="relative flex flex-row space-x-2 justify-center items-center my-16">
        <div className="flex flex-col justify-center items-center">
          <p className="mt-1 text-3xl font-bold mb-9">Join Now</p>
          <div className="flex flex-col justify-center items-center space-y-3">
            <AuthButton />
            <div className="flex flex-row">
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="https://github.com/Muhammad-Taha-Qader" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-lg hover:text-my-cocoa-600" />
                </a>
                <a href="https://linkedin.com/in/Muhammad-taha-07a1a0228" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-lg hover:text-my-cocoa-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Vacations /> {/* Now positioned at the extreme left */}
      </div>

    </div>
  );
}
