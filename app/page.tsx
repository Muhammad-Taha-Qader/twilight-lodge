import Navbar from "@/components/Navbar/Navbar";
import CategoriesBar from "@/components/Navbar/CategoriesBar/CategoriesBar";
import ListingsList from "@/components/ListingsList/ListingsList";



export default function Home() {
  

  return (
    <div>
      <Navbar />
      <CategoriesBar />
      <h2 className="py-4 text-2xl text-center font-bold">Past Experiences</h2>
      <ListingsList />
    </div>
  );
}
