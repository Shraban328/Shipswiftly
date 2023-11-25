import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-0 max-w-screen-xl mx-auto my-14">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Features;
