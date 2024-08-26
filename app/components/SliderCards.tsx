"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-cards";

// import "./sliderCards.css";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";

export default function SliderCards({ items }: { items: string[] }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
      >
        {items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={item} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
