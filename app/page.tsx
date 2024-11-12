import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";
import CategoriesBar from "@/components/Navbar/CategoriesBar/CategoriesBar";
import fs from "fs";
import path from "path";

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


// A helper function to fetch JSON data from the listings file
async function getListingsData(): Promise<Listing[]> {
  const filePath = path.join(process.cwd(), "data", "listings.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default async function Home() {
  // Fetch listings data
  const listings: Listing[] = await getListingsData();

  return (
    <div>
      <Navbar />
      <CategoriesBar />
      <h2 className="py-4 text-2xl text-center font-bold">Past Experiences</h2>
      <div className="flex justify-center mt-10 gap-x-14 px-14 flex-wrap">
        {listings.map((listing: Listing) => (
          <Card
            key={listing.id}
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
    </div>
  );
}
