"use client";

import { Flex, Image, Typography } from "antd";
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
        <Typography className="text-3xl font-extrabold mb-10">
          CHÚNG TÔI CAM KẾT
        </Typography>
        <Flex align="center" gap={120}>
          {guaranteeData.map((i) => (
            <Flex vertical gap={20} key={i.text1} align="center">
              <div className="w-32 h-32 rounded-[50%] bg-gray-300"></div>
              <Flex vertical gap={4}>
                <Typography className="text-center text-gray-500 text-base">
                  {i.text1}
                </Typography>
                <Typography className="text-center text-base font-bold text-gray-600">
                  {i.text2}
                </Typography>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex vertical gap={40} align="center" className="pt-10">
        <Flex vertical gap={8} align="center">
          <Typography className="text-3xl font-extrabold">
            CHÀO MỪNG ĐẾN VỚI CLAIRE WELLNESS
          </Typography>
          <Typography className="text-2xl font-bold text-gray-500">
            TRỊ LIỆU TIÊU CHUẨN Y KHOA CHÍNH THỐNG
          </Typography>
        </Flex>
        <Flex vertical gap={8} align="center">
          <Typography className="text-xl text-gray-500">
            Chúng tôi cùng với niềm đam mê về chăm sóc sức khoẻ làn da, chào đón
            bạn đến với trung tâm của
          </Typography>
          <Typography className="text-xl text-gray-500">
            Claire, nơi bạn sẽ được{" "}
            <text className="font-extrabold">
              chăm sóc bằng sự ân cần, chuyên nghiệp và riêng tư nhất.
            </text>
          </Typography>
        </Flex>

        <Typography className="text-lg font-extrabold text-gray-500 px-10 py-2 border-2 border-gray-500">
          CƠ SỞ GẦN NHẤT
        </Typography>
      </Flex>
    </Flex>
  );
};

export default WelcomeSection;
