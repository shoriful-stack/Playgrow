import React from "react";
import Carousel from "../../Components/Carousel";
import Products from "./Products";
import Blog from "./Blog";
import NewArrival from "./NewArrival";
import Gallery from "./Gallery";
import Category from "./Category";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="w-[87%] mx-auto my-6 lg:my-16">
        <Carousel />
        <Products />
        <Blog />
        <NewArrival />
        <Gallery />
        <Category />
      </div>
    </div>
  );
};

export default Home;
