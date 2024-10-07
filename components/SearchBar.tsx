// components/SearchBar.tsx
// import SearchIcon  from "@heroicons/react/outline/SearchIcon";
// import SearchIcon from "@heroicons/react/outline/SearchIcon";
// import { SearchIcon } from "@heroicons/react/outline";
import { HiOutlineSearch } from "react-icons/hi";


const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4 border rounded-full px-4 py-2 shadow-md">
      <div className="flex flex-col">
        <span className="text-xs text-gray-600">Where</span>
        <input type="text" placeholder="Search destinations" className="bg-transparent outline-none" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-600">Check in</span>
        <input type="text" placeholder="Add dates" className="bg-transparent outline-none" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-600">Check out</span>
        <input type="text" placeholder="Add dates" className="bg-transparent outline-none" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-600">Who</span>
        <input type="text" placeholder="Add guests" className="bg-transparent outline-none" />
      </div>
      <button className="bg-pink-600 rounded-full p-2 text-white">
        <HiOutlineSearch className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
