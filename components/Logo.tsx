// components/Logo.tsx
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Remove "../public" from the path */}
      <Image src="/logo3.png" alt="Airbnb logo" className="w-72 h-16" width={100} height={70} />
      {/* <span className="text-pink-600 text-xl font-semibold">airbnb</span> */}
    </div>
  );
};

export default Logo;

