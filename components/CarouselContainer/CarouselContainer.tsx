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
            className="w-full max-h-[1080px] object-fit"
            src={anhNen}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full max-h-[1080px] object-fit"
            src={hydra}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={800}
            alt="image"
            className="w-full max-h-[1080px] object-fit"
            src={rezenerate}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselContainer;
