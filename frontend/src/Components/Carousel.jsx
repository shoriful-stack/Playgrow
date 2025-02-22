import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={1500}
      >
        <SwiperSlide>
          <div className="relative bg-[url('https://i.ibb.co/ZRM03hyC/42df6e7b651fb47564b5431c1fc6186c.png')] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px]">
            {/* Main content container */}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Dream Nursery Label */}
              <img
                src="https://i.ibb.co/QvY2kPrj/841ab5c8b74cf07e2e2f34803da7558b.png"
                alt="Your Dream Nursery"
                className="md:w-[250px] w-[250px]"
              />

              {/* Floating Decorative Elements */}
              <div className="absolute md:top-60 top-52 right-20 md:left-[460px]">
                <img
                  src="https://i.ibb.co/HLDpPdK6/d9ac751ce639f96a30148b0da03dd8a0.png"
                  alt="Decor"
                  className="md:w-[170px] w-[170px]"
                />
                <img
                  src="https://i.ibb.co/931F7S9F/1150dcb16d21cb62bffedcfdc0b262c9.png"
                  alt="Cat Decoration"
                  className="w-[70px] absolute bottom-24 left-24"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(https://playgrow.qodeinteractive.com/wp-content/uploads/2023/01/MAIN-HOME-REV-SLIDE-02.jpg)] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px]">
            <div className="flex md:justify-end justify-center md:pr-32 pt-20 relative">
              <img
                src="https://playgrow.qodeinteractive.com/wp-content/uploads/2023/01/MAINHOME-REV-FIGURE-SLIDE-2.png"
                alt=""
                className="md:h-[380px] h-80"
              />
              <div className="absolute md:top-44 top-44 right-16 md:right-48 text-center md:py-10 py-6">
                <p className="md:text-3xl text-xl uppercase tracking-widest text-gray-700">
                  Your Happy Place
                </p>
                <p className="text-gray-500 md:block hidden my-3">
                  Where your baby's journey started with happiness <br /> and
                  joy.
                </p>
                <button className="flex flex-col uppercase text-primary font-medium tracking-widest text-sm mt-4 w-full">
                  Read More
                  <span className="font-bold text-xl -mt-3">. . . . . . .</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://playgrow.qodeinteractive.com/wp-content/uploads/2023/01/main-home-rev-img-03.jpg"
              className="bg-cover bg-center lg:h-[550px] h-[500px] w-full object-cover"
              alt="Slide-3"
            />
            <div className="absolute md:top-52 top-44 right-1 md:right-80 bg-white rounded-lg md:w-[480px] w-[330px] text-center md:py-10 py-6">
              <p>
                <Rating
                  initialRating={5}
                  emptySymbol={
                    <FaRegStar size={30} style={{ color: "#ccc" }} />
                  }
                  fullSymbol={<MdStar size={30} style={{ color: "#DB915E" }} />}
                />
              </p>
              <h1 className="md:text-3xl text-2xl uppercase tracking-widest md:my-3 mt-2 text-gray-700 font-medium">
                Welcome to PlayGrow
              </h1>
              <p className="text-gray-500 md:block hidden">
                Buy your beloved baby's happiness here
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
