"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import anhNen from "@/assets/images/anh-nen.jpg";
import hydra from "@/assets/images/hydra.png";
import rezenerate from "@/assets/images/rezenerate.png";

import React from "react";

const CarouselContainer = () => {
  return (
    <div className="container">
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
            className="w-full h-full object-cover"
            src={anhNen}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full h-full object-cover"
            src={hydra}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full h-full object-cover"
            src={rezenerate}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselContainer;
