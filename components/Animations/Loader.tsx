import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      const response = await fetch("/animations/LoadingcircleCompleting.json");
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
