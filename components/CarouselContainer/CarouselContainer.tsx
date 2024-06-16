"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import anhNen from "@/assets/images/banner1.jpg";
import hydra from "@/assets/images/banner2.jpg";
import rezenerate from "@/assets/images/banner3.jpg";

import React from "react";

const CarouselContainer = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiperContainer"
      >
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full max-h-[100%] object-cover"
            src={anhNen}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full max-h-[100%] object-cover"
            src={hydra}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full max-h-[100%] object-cover"
            src={rezenerate}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselContainer;
