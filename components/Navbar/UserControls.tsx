import { HiOutlineGlobe } from "react-icons/hi";
import UserProfileDropdown from "@/components/Navbar/UserProfileDropdown";
import Link from "next/link";

const UserControls = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link href="/" className="text-sm hover:bg-my-cocoa-500/10 px-6 py-3 rounded-3xl">Twilight your home</Link>
      <div className="px-6 py-3 hover:bg-my-cocoa-500/10 rounded-3xl">
        <HiOutlineGlobe className="h-6 w-6" />
      </div>
      {/* <div className="flex items-center space-x-2 border-2 px-6 py-3 rounded-full shadow-sm border-my-cocoa-400 hover:border-my-cocoa-600 hover:text-my-cocoa-600">
        <HiOutlineMenu className="h-6 w-6 text-my-cocoa-400" />
        <HiOutlineUser className="h-6 w-6 text-my-cocoa-400" />
      </div> */}
      <UserProfileDropdown />
    </div>
  );
};

export default UserControls;
