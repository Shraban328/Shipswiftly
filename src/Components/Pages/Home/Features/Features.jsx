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
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 max-w-screen-xl mx-auto my-14">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Features;
