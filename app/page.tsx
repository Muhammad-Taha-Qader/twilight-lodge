"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import CategoriesBar from "@/components/Navbar/CategoriesBar/CategoriesBar";
import ListingsList from "@/components/ListingsList/ListingsList";
import AuthButton from "@/components/Auth/AuthButton";

export default function Home() {
  const [searchQuery, setSearchQuery ] = useState("");

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery = {setSearchQuery}/>
      <CategoriesBar />
      <h2 className="py-4 text-2xl text-center font-bold">Past Experiences</h2>
      <AuthButton/>
      <ListingsList searchQuery={searchQuery} />
    </div>
  );
}
