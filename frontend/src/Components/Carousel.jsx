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
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/rG85R3LS/rs-slides-rs-slide.png"
            className="bg-cover bg-center lg:h-[550px] h-[500px] w-full object-cover"
            alt="Slide-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Jj5S7j49/Play-Grow-Baby-Shop-and-Kids-Store-Theme-02-18-2025-12-38-PM-Photoroom.png"
            className="bg-cover bg-center lg:h-[550px] h-[500px] w-full object-cover"
            alt="Slide-2"
          />
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
