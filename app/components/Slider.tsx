import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider({ items }: { items: string[] }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper2 swiper2"
      >
        {items.map((item, i) => {
          return (
            <SwiperSlide className="swiper-slide2" key={i}>
              <Image width={1000} height={1000} src={item} alt={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
