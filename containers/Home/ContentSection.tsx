"use client";

import { Flex, Image, Typography } from "antd";
import React from "react";

const CommonComponent = (
  imgSrc: string,
  title: string,
  description: string,
  category: string,
  shouldRevert: boolean = false
) => (
  <Flex
    className={`${
      shouldRevert ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
    } w-full items-center lg:items-center`}
  >
    <img alt="image" src={imgSrc} className="w-1/2" />
    <Flex
      className={`w-full mt-4 lg:w-1/2 text-center ${
        shouldRevert
          ? "lg:text-left lg:items-start lg:pr-10"
          : "lg:text-right lg:items-end lg:pl-10"
      }`}
      vertical
      gap={20}
    >
      <Typography className="text-xl md:text-2xl lg:text-3xl font-extrabold">
        {title}
      </Typography>
      <Typography className="text-sm md:text-base lg:text-lg lg:leading-10">
        {description}
      </Typography>
      <button className="buttonBlack">{category}</button>
    </Flex>
  </Flex>
);

const ContentSection = () => {
  return (
    <div className="container">
      <Flex vertical className="gap-[40px] lg:gap-0" align="center">
        {CommonComponent(
          "/detail-homepage-1.png",
          "TRỊ LIỆU CHUẨN Y KHOA",
          "Nhân lực của chúng tôi được đào tạo từ những trường Đại học hàng đầu đã được cấp phép và có thẩm quyền, chúng tôi chỉ thực hiện các kỹ thuật mới nhất và chính thống. Đảm bảo tất cả trị liệu không chỉ được thực hiện một cách an toàn mà còn đạt kỳ vọng làm đẹp của mọi khách hàng.",
          "TRỊ LIỆU"
        )}
        {CommonComponent(
          "/detail-homepage-2.png",
          "PHƯƠNG PHÁP ĐIỀU TRỊ",
          "Chúng tôi theo sát toàn bộ quá trình điều trị 1:1 từ các khâu chăm sóc tại clinic, đến chăm sóc sau khi thực hiện và những lần ghé thăm sau đó, để chúng ta không phải chỉ dành vài tiếng ngắn ngủi gặp nhau tại clinic mỗi lần thăm khám mà chăm da là 1 chặng đường rất dài, và ở đó, chúng tôi mong muốn được đồng hành cùng bạn.",
          "TÌM HIỂU",
          true
        )}
        {CommonComponent(
          "/detail-homepage-3.png",
          "RIÊNG TƯ & TIÊU CHUẨN CAO",
          "Bảo vệ riêng tư và cá nhân hoá cho từng khách hàng là ưu tiên cao nhất Claire. Chúng tôi luôn cố gắng mang đến cho khách hàng trải nghiệm điều trị riêng biệt ở tiêu chuẩn cao nhất.",
          "SẢN PHẨM"
        )}
        {CommonComponent(
          "/detail-homepage-4.png",
          "SẢN PHẨM & DỊCH VỤ MINH BẠCH",
          "Chúng tôi luôn sử dụng các sản phẩm từ những thương hiệu dược mỹ phẩm cao cấp và uy tín của thế giới. Hệ thống dịch vụ sử dụng những máy móc công nghệ cao hàng trên toàn thế giới trong lĩnh vực thẩm mỹ được công nhận và đạt chứng chỉ như CE, FDA Approved",
          "TÌM HIỂU",
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
      <br />
      <br />
      <br />
    </div>
  );
};

export default ContentSection;
