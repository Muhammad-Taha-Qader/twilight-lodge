// import Lottie from "lottie-react";
"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { useEffect, useState } from "react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      // const response = await fetch("/animations/LoadingcircleCompleting.json");
      const response = await fetch("/animations/LoadingBlueRing2.json");
      // const response = await fetch("/animations/LoadingPlanClouds.json");
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimation();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {animationData && (
        <Lottie animationData={animationData} loop={true} style={{ width: 200, height: 200 }} />
      )}
    </div>
  );
};

export default Loader;
