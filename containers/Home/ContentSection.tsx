"use client";

import { Flex, Image, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const CommonComponent = (
  imgSrc: string,
  title: string,
  description: string,
  category: string,
  shouldRevert: boolean = false
) => {
  return (
    <Flex
      className={`${
        shouldRevert ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      } w-full items-center`}
    >
      <div className="w-full lg:w-1/2">
        <Fade
          direction={shouldRevert ? "right" : "left"}
          delay={200}
          triggerOnce
        >
          <img alt="image" src={imgSrc} className="w-full h-full" />
        </Fade>
      </div>

      <Flex
        className={`w-full mt-6 lg:w-1/2 text-center gap-4 ${
          shouldRevert
            ? "lg:text-left lg:items-start lg:pr-10"
            : "lg:text-right lg:items-end lg:pl-10"
        }`}
        vertical
      >
        <Fade
          direction={shouldRevert ? "left" : "right"}
          triggerOnce
          delay={200}
        >
          <Typography
            className="text-3xl font-extrabold"
            style={{ textWrap: "balance" }}
          >
            {title}
          </Typography>
          <Typography
            className="text-sm md:text-base lg:text-lg lg:leading-10"
            style={{ textWrap: "balance" }}
          >
            {description}
          </Typography>
          {/* <button className={`${shouldRevert ? "buttonWhite" : "buttonBlack"}`}>
            {category}
          </button> */}
        </Fade>
      </Flex>
    </Flex>
  );
};

const ContentSection = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Flex vertical className="gap-10 lg:gap-0" align="center">
        {CommonComponent(
          "/detail-homepage-1.png",
          t("medicalStandardTherapy"),
          t("desMedicalStandard"),
          ""
        )}
        {CommonComponent(
          "/detail-homepage-2.png",
          t("treatments"),
          t("desTreatments"),
          "",
          true
        )}
        {CommonComponent(
          "/detail-homepage-3.png",
          t("privacyStandard"),
          t("desPrivacyStandard"),
          ""
        )}
        {CommonComponent(
          "/detail-homepage-4.png",
          t("productService"),
          t("desProductService"),
          "",
          true
        )}
        {/* <Flex
          className="pt-[28px] lg:pt-[5%] lg:w-1/2 self-start text-center lg:text-left"
          vertical
          gap={20}
        >
          <Typography className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-extrabold">
            SẢN PHẨM & DỊCH VỤ MINH BẠCH
          </Typography>
          <Typography className="text-sm md:text-base lg:text-lg text-gray-500 lg:leading-10">
            Chúng tôi luôn sử dụng các sản phẩm từ những thương hiệu dược mỹ
            phẩm cao cấp và uy tín của thế giới. Hệ thống dịch vụ sử dụng những
            máy móc công nghệ cao hàng trên toàn thế giới trong lĩnh vực thẩm mỹ
            được công nhận và đạt chứng chỉ như CE, FDA Approved
          </Typography>
          <Typography className="py-2 px-10 text-sm lg:text-base font-semibold text-white bg-gray-800 w-fit mx-auto lg:mx-0">
            SẢN PHẨM
          </Typography>
        </Flex> */}
      </Flex>
    </div>
  );
};

export default ContentSection;
