"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";


// interface Listing {
//   id: string;
//   title: string;
//   location: string;
//   distance: string;
//   dateRange: string;
//   price: number;
//   rating: number;
//   isFavorite: boolean;
//   isSoldOut: boolean;
//   images: string[];
//   description: string;
// }
import { Listing } from "@/types/listing";

const ListingsList = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("/api/listings");
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center mt-10 gap-x-14 px-14 flex-wrap">
      {listings.map((listing) => (
        <Card
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
        />
      ))}
    </div>
  );
};

export default ListingsList;