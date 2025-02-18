import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/rG85R3LS/rs-slides-rs-slide.png"
            className="bg-cover bg-center lg:h-[550px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Jj5S7j49/Play-Grow-Baby-Shop-and-Kids-Store-Theme-02-18-2025-12-38-PM-Photoroom.png"
            className="bg-cover bg-center lg:h-[550px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Zzt0d4LY/image-Photoroom.png"
            className="bg-cover bg-center lg:h-[550px] w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
