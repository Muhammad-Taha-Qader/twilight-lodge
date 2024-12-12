"use client";
import { useParams } from "next/navigation"; //You have a Server Component that imports next/router. Use next/navigation instead.\nLearn more: https://nextjs.org/docs/app/api-reference/functions/use-router
import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
// import Card from "@/components/Card/Card";
import Carousel from "@/components/Card/Carousel";
import { useRouter } from "next/navigation";
import Loader from "@/components/Animations/Loader";
import { FaArrowRight, FaMapMarkerAlt, FaDollarSign, FaHome, FaChevronRight } from "react-icons/fa";


export default function ListingDetailsPage() {
  const params = useParams() as { id: string }; // Type assertion to enforce `id` as a string
  const { id } = params;
  const [listing, setListing] = useState<Listing | null>(null);
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/book/${id}`);
  };

  useEffect(() => {
    if (id) {
      // Fetch the specific listing by ID from the API
      fetch(`/api/listings/${id}`)
        .then((res) => res.json())
        .then((data) => setListing(data))
        .catch((error) => console.error("Error fetching listing:", error));
    }
  }, [id]);

  if (!listing) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8 max-w-5xl mx-auto">


      {/* Navigation */}
      <div className="w-full flex justify-between items-center mb-6">
        <nav className="mb-6 flex items-center text-my-cocoa-500 space-x-2 text-sm">
          <FaHome className="text-my-cocoa-700" />
          <FaChevronRight />
          <button
            onClick={() => router.push("/")}
            className="hover:underline hover:text-my-cocoa-700 transition"
          >
        Home
          </button>
          <FaChevronRight />
          <span className="text-my-cocoa-700 font-semibold">Listing</span>
        </nav>

      </div>

      {/* Navigation Path */}
      
      

      {/* Carousel */}
      <div className="max-w-sm w-80 md:w-96 rounded-lg overflow-hidden shadow-lg relative border border-my-cocoa-900">
        <Carousel images={listing.images} />
      </div>

      {/* Listing Details */}
      <div className="text-center w-full mt-6 px-6 md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold text-my-cocoa-700 mb-4">{listing.title}</h1>
        <p className="flex items-center justify-center text-lg text-my-cocoa-200 mb-2">
          <FaMapMarkerAlt className="mr-2 text-my-cocoa-500" />
          {listing.location}
        </p>
        <p className="flex items-center justify-center text-xl font-semibold text-green-600 mb-4">
          <FaDollarSign className="mr-1" />
          {listing.price} per night
        </p>
        <p className="text-base text-my-cocoa-100 leading-relaxed mb-6 text-justify">
          {listing.description}
        </p>
      </div>

      {/* Footer Navigation */}
      <div className="w-full flex justify-center items-center mt-6">
        <button
          type="button"
          onClick={handleBookingClick}
          className="flex items-center text-my-cocoa-50 bg-my-cocoa-500 px-4 py-2 rounded-lg hover:bg-my-cocoa-600 transition-all"
        >
          Proceed to Booking
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
