"use client";

import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";

import minhbach from "@/assets/images/minhbach.png";
import phuongphap from "@/assets/images/phuongphap.png";
import riengtu from "@/assets/images/riengtu.png";
import trilieu2 from "@/assets/images/trilieu2.png";

const guaranteeData = [
  { imageSrc: trilieu2, text1: "TRỊ LIỆU", text2: "CHUẨN Y KHOA" },
  { imageSrc: phuongphap, text1: "PHƯƠNG PHÁP", text2: "ĐIỀU TRỊ 1:1" },
  { imageSrc: riengtu, text1: "RIÊNG TƯ &", text2: "TIÊU CHUẨN CAO" },
  { imageSrc: minhbach, text1: "SẢN PHẨM &", text2: "DỊCH VỤ MINH BẠCH" },
];

const WelcomeSection = () => {
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
          <Typography className="text-3xl font-extrabold mb-10 text-center text-black">
            CHÚNG TÔI CAM KẾT
          </Typography>
          <br />
          <Row className="px-5 max-w-[600px] lg:max-w-none mx-auto">
            {guaranteeData.map((i) => (
              <Col
                key={i.text1}
                className="flex flex-col gap-8 items-center mx-auto"
                span={12}
                lg={{ span: 6 }}
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
                  <Typography className="text-center text-gray-500 text-sm lg:text-base">
                    {i.text1}
                  </Typography>
                  <Typography className="text-center text-sm lg:text-base font-bold text-gray-600">
                    {i.text2}
                  </Typography>
                </Flex>
              </Col>
            ))}
          </Row>
        </div>
      </Flex>
      <Flex
        vertical
        gap={40}
        align="center"
        className="pt-10 px-10 text-center"
      >
        <Flex vertical gap={8} align="center">
          <Typography className="text-3xl font-extrabold">
            CHÀO MỪNG ĐẾN VỚI CLAIRE WELLNESS
          </Typography>
          <Typography className="text-xl lg:text-2xl font-bold text-gray-500">
            TRỊ LIỆU TIÊU CHUẨN Y KHOA CHÍNH THỐNG
          </Typography>
        </Flex>
        <Typography className="text-base lg:text-lg max-w-[800px]">
          Chúng tôi cùng với niềm đam mê về chăm sóc sức khoẻ làn da, chào đón
          bạn đến với trung tâm của Claire, nơi bạn sẽ được{" "}
          <span className="font-extrabold">
            chăm sóc bằng sự ân cần, chuyên nghiệp và riêng tư nhất.
          </span>
        </Typography>

        <button type="button" className="buttonWhite">
          CƠ SỞ GẦN NHẤT
        </button>
      </Flex>
    </Flex>
  );
};

export default WelcomeSection;
