"use client";

import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";

import minhbach from "@/assets/images/minhbach.png";
import phuongphap from "@/assets/images/phuongphap.png";
import riengtu from "@/assets/images/riengtu.png";
import trilieu2 from "@/assets/images/trilieu2.png";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import { Fade } from "react-awesome-reveal";

const WelcomeSection = () => {
  const { t } = useTranslation();
  const guaranteeData = [
    { imageSrc: trilieu2, text1: t("therapy"), text2: t("medicalStandard") },
    { imageSrc: phuongphap, text1: t("method"), text2: t("treatment") },
    { imageSrc: riengtu, text1: t("privateA"), text2: t("highQuality") },
    {
      imageSrc: minhbach,
      text1: t("productA"),
      text2: t("transparentService"),
    },
  ];

  return (
    <Flex vertical align="center">
      <CarouselContainer />

      <Flex
        vertical
        gap={40}
        align="center"
        className="w-full bg-gray-100 pt-10 pb-20 px-5"
      >
        <div className="container">
          <Fade direction="up">
            <Typography className="text-3xl font-extrabold mb-10 text-center text-black">
              {t("weCommit")}
            </Typography>
          </Fade>
          <br />

          <Fade direction="up" cascade delay={200}>
            <ul className="px-5 flex max-w-[600px] lg:max-w-none mx-auto flex-wrap">
              {guaranteeData.map((i) => (
                <li
                  key={i.text1}
                  className="flex flex-col gap-8 items-center mx-auto w-1/2 lg:w-1/4"
                >
                  {/* <div className="w-32 h-32 rounded-[50%] bg-gray-300"></div> */}
                  <Image
                    width={150}
                    height={150}
                    alt="image"
                    className="w-32 h-32 rounded-[50%] cursor-pointer"
                    src={i.imageSrc}
                  />
                  <Flex vertical gap={4}>
                    <Typography className="text-center text-gray-500 text-sm lg:text-base uppercase">
                      {i.text1}
                    </Typography>
                    <Typography className="text-center text-sm lg:text-base font-bold text-gray-600 uppercase">
                      {i.text2}
                    </Typography>
                  </Flex>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
      </Flex>
      <Flex
        vertical
        gap={40}
        align="center"
        className="pt-10 px-10 text-center"
      >
        <Fade direction="up" cascade>
          <Flex vertical gap={8} align="center">
            <Typography className="text-3xl font-extrabold">
              {t("welcome")}
            </Typography>
            <Typography className="text-xl lg:text-2xl font-bold text-gray-500">
              {t("descriptionWelcome")}
            </Typography>
          </Flex>
          <Typography className="text-base lg:text-lg max-w-[800px]">
            {t("detailWelcome")}
            <span className="font-extrabold">{t("boldDetailWelcome")}</span>
          </Typography>

          <Link href="/lien-he">
            <button type="button" className="buttonWhite">
              {t("nearest")}
            </button>
          </Link>
        </Fade>
      </Flex>
    </Flex>
  );
};

export default WelcomeSection;
