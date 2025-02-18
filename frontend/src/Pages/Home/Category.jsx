import React, { useState } from "react";
import useEntity from "../../Hooks/useEntity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Category = () => {
  const [categories] = useEntity("/categories");
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!categories.length) return <p>No categories found.</p>;

  return (
    <div className="w-full my-12">
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories?.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div
                className="relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={category.photo}
                  alt={category.name}
                  className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
                    hoverIndex === index ? "scale-90" : "scale-100"
                  }`}
                />
                {/* Dashed Circular Spinner on Hover */}
                {hoverIndex === index && (
                  <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-gray-300 animate-spin-slow"></div>
                )}
              </div>
              <p className="text-center mt-2 text-gray-700">
                {category.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
