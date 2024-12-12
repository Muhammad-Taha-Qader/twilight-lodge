"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import { Listing } from "@/types/listing";
import Loader from "@/components/Animations/Loader";

interface ListingsListProps {
  searchQuery: string;
}

const ListingsList: React.FC<ListingsListProps> = ({ searchQuery }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        // Modify the API endpoint to include the search query
        // const response = await fetch(`/api/listings/search?query=${searchQuery}`);
                
        const endpoint = searchQuery
          ? `/api/listings/search?query=${searchQuery}`
          : "/api/listings";
        const response = await fetch(endpoint);
        const data = await response.json();
        // setListings(data);
        // Ensure the data is an array
        setListings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [searchQuery]); // Re-run when searchQuery changes

  if (loading) {
    return (<div>
      <Loader/>
    </div>);
    // return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center mt-10 gap-x-14 gap-y-4 lg:gap-y-14 px-4 md:px-14 flex-wrap">
      {listings.length > 0 ? (
        listings.map((listing) => (
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
        ))
      ) : (
        <p className="text-my-cocoa-300 mt-6">No listings found matching your search.</p>
      )}
    </div>
  );
};

export default ListingsList;