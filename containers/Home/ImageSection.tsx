"use client";

import Image from "next/image";
import React from "react";

import { Fade } from "react-awesome-reveal";

const ImageSection = () => {
  return (
    <Fade direction="up" duration={500}>
      <Image
        width={1920}
        height={800}
        className="w-full min-h-[200px] object-cover"
        alt="img"
        src="/home-page-content.png"
      />
    </Fade>
  );
};

export default ImageSection;
