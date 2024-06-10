"use client";

import { Flex, Typography } from "antd";
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

      <div className="w-full bg-gray-100 pt-10 pb-20 px-5">
        <Fade direction="up" triggerOnce>
          <Typography className="text-3xl font-extrabold mb-10 text-center text-black">
            {t("weCommit")}
          </Typography>
        </Fade>

        <Fade direction="up" cascade delay={200} triggerOnce>
          <ul className="flex flex-wrap lg:max-w-6xl mx-auto">
            {guaranteeData.map((i) => (
              <li
                key={i.text1}
                className="flex flex-col items-center gap-4 w-1/2 lg:w-1/4 p-4 border hover:bg-black hover:text-white"
                style={{ transition: "all 0.2s linear" }}
              >
                <Flex vertical gap={4}>
                  <span className="text-center text-sm lg:text-base uppercase">
                    {i.text1}
                  </span>
                  <span className="text-center text-sm lg:text-base font-bold uppercase">
                    {i.text2}
                  </span>
                </Flex>
              </li>
            ))}
          </ul>
        </Fade>
      </div>

      <Fade direction="up" cascade triggerOnce>
        <Flex vertical align="center" className="pt-10 px-4 text-center gap-6">
          <Flex vertical className="gap-4">
            <Typography className="text-3xl font-extrabold">
              {t("welcome")}
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
        </Flex>
      </Fade>
    </Flex>
  );
};

export default WelcomeSection;
