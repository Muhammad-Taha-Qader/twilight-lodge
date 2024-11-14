"use client";
import { useParams } from "next/navigation"; //You have a Server Component that imports next/router. Use next/navigation instead.\nLearn more: https://nextjs.org/docs/app/api-reference/functions/use-router
import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";

export default function ListingDetailsPage() {
  const params = useParams() as { id: string }; // Type assertion to enforce `id` as a string
  const { id } = params;
  const [listing, setListing] = useState<Listing | null>(null);

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
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <p className="text-gray-600 mb-2">{listing.location}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">${listing.price} per night</p>
      <p className="text-gray-700">{listing.description}</p>
    </div>
  );
}
