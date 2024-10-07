// components/SearchBar.tsx
// import SearchIcon  from "@heroicons/react/outline/SearchIcon";
// import SearchIcon from "@heroicons/react/outline/SearchIcon";
// import { SearchIcon } from "@heroicons/react/outline";
import { HiOutlineSearch } from "react-icons/hi";


const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4 border-2 border-my-cocoa-200 rounded-full px-8 py-3 shadow-lg hover:shadow-my-cocoa-900">
      <div className="flex flex-col">
        <span className="text-xs text-my-cocoa-400">Where</span>
        <input type="text" placeholder="Search destinations" className="bg-transparent outline-none placeholder:text-my-cocoa-100" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-my-cocoa-400">Check in</span>
        <input type="text" placeholder="Add dates" className="bg-transparent outline-none placeholder:text-my-cocoa-100" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-my-cocoa-400">Check out</span>
        <input type="text" placeholder="Add dates" className="bg-transparent outline-none placeholder:text-my-cocoa-100" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-my-cocoa-400">Who</span>
        <input type="text" placeholder="Add guests" className="bg-transparent outline-none placeholder:text-my-cocoa-100" />
      </div>
      <button className="bg-my-cocoa-500 rounded-full p-2 text-white">
        <HiOutlineSearch className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
