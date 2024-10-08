import { HiOutlineGlobe, HiOutlineUser, HiOutlineMenu } from "react-icons/hi";

const UserControls = () => {
  return (
    <div className="flex items-center space-x-2">
      <a href="#" className="text-sm hover:bg-my-cocoa-500/10 px-6 py-3 rounded-3xl">Twilight your home</a>
      <div className="px-6 py-3 hover:bg-my-cocoa-500/10 rounded-3xl">
        <HiOutlineGlobe className="h-6 w-6" />
      </div>
      <div className="flex items-center space-x-2 border-2 px-6 py-3 rounded-full shadow-sm border-my-cocoa-400 hover:border-my-cocoa-600 hover:text-my-cocoa-600">
        <HiOutlineMenu className="h-6 w-6 text-my-cocoa-400" />
        <HiOutlineUser className="h-6 w-6 text-my-cocoa-400" />
      </div>
    </div>
  );
};

export default UserControls;
