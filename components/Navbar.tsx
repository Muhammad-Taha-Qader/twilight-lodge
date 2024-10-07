// components/Navbar.tsx
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserControls from "./UserControls";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-start p-5 shadow-sm">
      <Logo />
      <div className="flex flex-col space-y-8 items-center">
        <NavLinks />
        <SearchBar />
      </div>
      <UserControls />
    </nav>
  );
};

export default Navbar;
