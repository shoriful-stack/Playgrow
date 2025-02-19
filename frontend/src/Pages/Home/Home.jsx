import React from "react";
import Carousel from "../../Components/Carousel";
import Products from "./Products";
import Blog from "./Blog";
import NewArrival from "./NewArrival";
import Gallery from "./Gallery";
import Category from "./Category";
import Review from "./Review";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="w-[87%] mx-auto my-6 lg:mt-16">
        <Carousel />
      </div>
      <div className="w-[87%] mx-auto my-6 lg:mt-24">
        <Products />
      </div>
      <div className="w-[87%] mx-auto my-6 lg:mt-24">
        <Blog />
      </div>
      <div className="w-full lg:mt-24 mt-12">
        <Review />
        <Newsletter />
      </div>
      <div className="w-[87%] mx-auto my-6 lg:mt-24">
        <NewArrival />
      </div>
      <div className="w-[87%] mx-auto my-6 lg:mt-24">
        <Category />
      </div>
      <div className="w-full lg:mt-24 mt-12">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
