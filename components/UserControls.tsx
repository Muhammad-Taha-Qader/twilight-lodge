import { HiOutlineGlobe, HiOutlineUser, HiOutlineMenu } from "react-icons/hi";

const UserControls = () => {
  return (
    <div className="flex items-center space-x-4">
      <a href="#" className="text-sm">Airbnb your home</a>
      <HiOutlineGlobe className="h-6 w-6 text-gray-600" />
      <div className="flex items-center space-x-2 border rounded-full p-2 shadow-sm">
        <HiOutlineMenu className="h-6 w-6 text-gray-600" />
        <HiOutlineUser className="h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
};

export default UserControls;
