import Lottie from "lottie-react";
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
