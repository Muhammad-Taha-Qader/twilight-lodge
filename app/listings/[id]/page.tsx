"use client";
import { useParams } from "next/navigation"; //You have a Server Component that imports next/router. Use next/navigation instead.\nLearn more: https://nextjs.org/docs/app/api-reference/functions/use-router
import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
// import Card from "@/components/Card/Card"; 
import Carousel from "@/components/Card/Carousel";
import { useRouter } from "next/navigation"; 
import Link from "next/link";


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
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Link href="\">Home</Link>
      {/* <Card
        key={listing.id}
        id={listing.id}
        title={listing.title}
        location={listing.location}
        distance={listing.distance}
        dateRange={listing.dateRange}
        price={listing.price}
        rating={listing.rating}
        isFavorite={listing.isFavorite}
        isSoldOut={listing.isSoldOut}
        images={listing.images}
      /> */}
      <Carousel images={listing.images} />
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <p className="text-my-cocoa-200">{listing.location}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">${listing.price} per night</p>
      <p className="text-xl font-semibold text-my-cocoa-700 mb-4">${listing.price} per night</p>
      <p className="text-my-cocoa-100">{listing.description}</p>
      <button type="button" onClick={handleBookingClick} className="bg-my-cocoa-500 text-my-cocoa-50 px-7 py-4 rounded-lg mt-4">Book Now</button>
    </div>
  );
}
