// components/Navbar.tsx
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserControls from "./UserControls";
// import SearchBar from "./SearchBar";

// import { Dispatch, SetStateAction } from "react";
// interface NavbarProps {
//   searchQuery: string;
//   setSearchQuery: Dispatch<SetStateAction<string>>;
// }

// const Navbar = ({searchQuery, setSearchQuery} : NavbarProps) => {
const Navbar = () => {
  return (
    <nav className="flex justify-between items-start p-4 lg:p-5 shadow-sm">
      <Logo />
      {/* <div className=" space-y-8 items-center hidden lg:block">
        <NavLinks />
        <SearchBar searchQuery={searchQuery} setSearchQuery = {setSearchQuery} /> 
      </div> */}

      {/* NavLinks: Centered Absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
        <NavLinks />
      </div>
      <UserControls />
    </nav>
  );
};

export default Navbar;
