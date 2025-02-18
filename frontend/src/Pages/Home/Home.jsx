import React from "react";
import Navbar from "./Navbar";
import Carousel from "../../Components/Carousel";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="w-5/6 mx-auto my-6 lg:my-16">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
