"use client";

import { Col, Flex, Image, Row, Typography } from "antd";
import React from "react";

const guaranteeData = [
  { imageSrc: "", text1: "TRỊ LIỆU", text2: "CHUẨN Y KHOA" },
  { imageSrc: "", text1: "PHƯƠNG PHÁP", text2: "ĐIỀU TRỊ 1:1" },
  { imageSrc: "", text1: "RIÊNG TƯ &", text2: "TIÊU CHUẨN CAO" },
  { imageSrc: "", text1: "SẢN PHẨM &", text2: "DỊCH VỤ MINH BẠCH" },
];

const WelcomeSection = () => {
  return (
    <Flex vertical gap={60} align="center">
      <Image
        preview={false}
        alt="image"
        src="/homepage-header.png"
        className="px-5 pt-10"
      />
      <Flex
        vertical
        gap={40}
        align="center"
        className="w-full bg-gray-100 pt-10 pb-28 px-5"
      >
        <Typography className="text-2xl xl:text-3xl font-extrabold mb-10">
          CHÚNG TÔI CAM KẾT
        </Typography>
        <Row
          gutter={[
            { xl: 60, xs: 5, lg: 5, md: 5, sm: 5 },
            { xl: 60, xs: 30, lg: 30, md: 30, sm: 30 },
          ]}
          className="px-5 max-w-[600px] xl:max-w-none"
        >
          {guaranteeData.map((i) => (
            <Col
              key={i.text1}
              className="flex flex-col gap-5 items-center"
              span={12}
              xl={{ span: 6 }}
            >
              <div className="w-32 h-32 rounded-[50%] bg-gray-300"></div>
              <Flex vertical gap={4}>
                <Typography className="text-center text-gray-500 text-sm xl:text-base">
                  {i.text1}
                </Typography>
                <Typography className="text-center text-sm xl:text-base font-bold text-gray-600">
                  {i.text2}
                </Typography>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>
      <Flex
        vertical
        gap={40}
        align="center"
        className="pt-10 px-10 text-center"
      >
        <Flex vertical gap={8} align="center">
          <Typography className="text-2xl xl:text-3xl font-extrabold">
            CHÀO MỪNG ĐẾN VỚI CLAIRE WELLNESS
          </Typography>
          <Typography className="text-xl xl:text-2xl font-bold text-gray-500">
            TRỊ LIỆU TIÊU CHUẨN Y KHOA CHÍNH THỐNG
          </Typography>
        </Flex>
        <Typography className="text-base xl:text-lg md:text-xl text-gray-500 max-w-[800px]">
          Chúng tôi cùng với niềm đam mê về chăm sóc sức khoẻ làn da, chào đón
          bạn đến với trung tâm của Claire, nơi bạn sẽ được{" "}
          <text className="font-extrabold">
            chăm sóc bằng sự ân cần, chuyên nghiệp và riêng tư nhất.
          </text>
        </Typography>

        <Typography className="text-base md:text-lg font-extrabold text-gray-500 px-10 py-2 border-2 border-gray-500">
          CƠ SỞ GẦN NHẤT
        </Typography>
      </Flex>
    </Flex>
  );
};

export default WelcomeSection;
