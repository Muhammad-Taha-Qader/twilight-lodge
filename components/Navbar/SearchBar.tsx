// components/SearchBar.tsx
// import SearchIcon  from "@heroicons/react/outline/SearchIcon";
// import SearchIcon from "@heroicons/react/outline/SearchIcon";
// import { SearchIcon } from "@heroicons/react/outline";
import { HiOutlineSearch } from "react-icons/hi";

import { Dispatch, SetStateAction, useEffect, useState  } from "react";
interface NavbarProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({searchQuery, setSearchQuery}: NavbarProps) => {
  //without Debouncing:
  // const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // }; 
  // onChange had:    <input type="text" value= {searchQuery}  placeholder="Search destinations" className="bg-transparent outline-none placeholder:text-my-cocoa-100" 
  //                     onChange={handleSearchQuery}/> 
  //with Debouncing:
  const [inputValue, setInputValue] = useState(searchQuery);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300); // Set the debounce delay here (e.g., 300ms)

    // Clear the timeout if the user types again within 300ms
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4 border-2 border-my-cocoa-200 rounded-full px-8 py-3 shadow-lg hover:shadow-my-cocoa-900">
      <div className="flex flex-col">
        <span className="text-xs text-my-cocoa-400">Where</span>
        <input type="text" value= {inputValue}  placeholder="Search destinations" className="bg-transparent outline-none placeholder:text-my-cocoa-100" 
          onChange={handleInputChange}/>
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
