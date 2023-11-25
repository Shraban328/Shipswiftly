import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ShipSwifly | Home</title>
      </Helmet>
      <Banner />
      <Features />
      <Statistics />
    </>
  );
};

export default Home;
