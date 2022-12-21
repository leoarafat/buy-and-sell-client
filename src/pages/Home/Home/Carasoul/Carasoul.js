import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import laptop1 from "../../../../assests/laptop-1.jpeg";
import laptop2 from "../../../../assests/laptop-2.jpeg";
import laptop3 from "../../../../assests/laptop-3.jpg";

import "swiper/css/pagination";
import "swiper/css";

const Carasoul = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[450px]" src={laptop3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px]" src={laptop2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px]" src={laptop1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carasoul;

