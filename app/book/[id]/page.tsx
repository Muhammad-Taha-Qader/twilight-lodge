"use client";
import { useParams } from "next/navigation"; 
import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
import Link from "next/link";
import { useRouter } from "next/navigation"; 


export default function BookPage(){
  const params = useParams() as { id: string }; // Type assertion to enforce `id` as a string
  const { id } = params;
  const [listing, setListing] = useState<Listing | null>(null);
  const router = useRouter();
  
  const handlePreviousClick = () => {
    router.push(`/listings/${id}`);
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
    <div>
      <h2>Thanks for booking</h2>

      <Link href="\">Home</Link>
      <button type="button" onClick={handlePreviousClick} className="bg-my-cocoa-500 text-my-cocoa-50 px-7 py-4 rounded-lg mt-4">Previous</button>

    </div>
    

  
  );
};

