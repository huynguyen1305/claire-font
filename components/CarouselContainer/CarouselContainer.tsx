"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import anhNen from "@/assets/images/banner1.jpg";
import hydra from "@/assets/images/banner2.jpg";
import rezenerate from "@/assets/images/banner3.jpg";

import React from "react";
import ModalTuVan from "../AppHeader/ModalTuVan";
import ModalDownload from "./ModalDownload";

const CarouselContainer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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
          <div style={{ position: "absolute", left: "5%", bottom: "5%" }}>
            <button className="buttonBlack" onClick={() => setIsOpen(!isOpen)}>
              Download Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <ModalDownload isOpen={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default CarouselContainer;
