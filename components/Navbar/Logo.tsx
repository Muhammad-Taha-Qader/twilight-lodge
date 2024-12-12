// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link href="/">
        <Image
          src="/logo3.png"
          alt="Airbnb logo"
          width={282} 
          height={70} 
          // layout="intrinsic" // Keeps the image sharp and responsive
          className="w-auto h-16 object-contain min-w-32" // Prevent skewing with object-contain
        />
      </Link>
      {/* <span className="text-pink-600 text-xl font-semibold">airbnb</span> */}
    </div>
  );
};

export default Logo;

