// components/Logo.tsx
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/logo3.png"
        alt="Airbnb logo"
        width={282} 
        height={70} 
        // layout="intrinsic" // Keeps the image sharp and responsive
        className="w-auto h-16 object-contain min-w-32" // Prevent skewing with object-contain
      />
      {/* <span className="text-pink-600 text-xl font-semibold">airbnb</span> */}
    </div>
  );
};

export default Logo;

