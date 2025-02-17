import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

const Home = () => {

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Welcome to PlayGrow Home</h1>
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Home;
