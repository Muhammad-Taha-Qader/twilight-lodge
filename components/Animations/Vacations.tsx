// import Lottie from "lottie-react";
//Vercel build failed: ReferenceError: document is not defined indicates that server-side code is attempting to access a browser-specific object (document) during the build process. This commonly happens in Next.js when code meant for the browser is executed on the server during server-side rendering (SSR) or static generation (SSG).
//The error trace references a file in .next/server/chunks. This suggests that a third-party library (e.g., lottie-react or others) might be causing the issue. Some libraries assume they are running in a browser environment and access document or window.
"use client";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { useEffect, useState } from "react";

const Vacations = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      const response = await fetch("/animations/vacations.json");
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimation();
  }, []);

  return (
    <div
      style={{
        position: "absolute", // Absolute positioning relative to the screen
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1, // Ensure it's in the background
      }}
    >
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
};

export default Vacations;
