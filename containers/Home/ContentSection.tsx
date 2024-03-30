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
  <Flex className={`${shouldRevert ? "flex-row-reverse" : "flex-row"} w-full`}>
    <img alt="image" src={imgSrc} className="w-1/2" />
    <Flex
      className={`pt-[10%] w-1/2 ${
        shouldRevert
          ? "text-left items-start pr-10"
          : "text-right items-end pl-10"
      }`}
      vertical
      gap={20}
    >
      <Typography className="text-3xl text-gray-500 font-extrabold">
        {title}
      </Typography>
      <Typography className="text-lg text-gray-500 leading-10">
        {description}
      </Typography>
      <Typography className="py-2 px-10 text-base font-semibold text-white bg-gray-800 w-fit">
        {category}
      </Typography>
    </Flex>
  </Flex>
);

const ContentSection = () => {
  return (
    <>
      <Flex vertical className="px-32" align="center">
        {CommonComponent(
          "/detail-homepage-1.png",
          "TRỊ LIỆU CHUẨN Y KHOA",
          "Nhân lực của chúng tôi được đào tạo từ những trường Đại học hàng đầu đã được cấp phép và có thẩm quyền, chúng tôi chỉ thực hiện các kỹ thuật mới nhất và chính thống. Đảm bảo tất cả trị liệu không chỉ được thực hiện một cách an toàn mà còn đạt kỳ vọng làm đẹp của mọi khách hàng.",
          "TRỊ LIỆU"
        )}
        {CommonComponent(
          "/detail-homepage-2.png",
          "TRỊ LIỆU CHUẨN Y KHOA",
          "Nhân lực của chúng tôi được đào tạo từ những trường Đại học hàng đầu đã được cấp phép và có thẩm quyền, chúng tôi chỉ thực hiện các kỹ thuật mới nhất và chính thống. Đảm bảo tất cả trị liệu không chỉ được thực hiện một cách an toàn mà còn đạt kỳ vọng làm đẹp của mọi khách hàng.",
          "TRỊ LIỆU",
          true
        )}
        {CommonComponent(
          "/detail-homepage-3.png",
          "TRỊ LIỆU CHUẨN Y KHOA",
          "Nhân lực của chúng tôi được đào tạo từ những trường Đại học hàng đầu đã được cấp phép và có thẩm quyền, chúng tôi chỉ thực hiện các kỹ thuật mới nhất và chính thống. Đảm bảo tất cả trị liệu không chỉ được thực hiện một cách an toàn mà còn đạt kỳ vọng làm đẹp của mọi khách hàng.",
          "TRỊ LIỆU"
        )}
        <Flex className="pt-[5%] w-1/2 self-start" vertical gap={20}>
          <Typography className="text-3xl text-gray-500 font-extrabold">
            SẢN PHẨM & DỊCH VỤ MINH BẠCH
          </Typography>
          <Typography className="text-lg text-gray-500 leading-10">
            Chúng tôi luôn sử dụng các sản phẩm từ những thương hiệu dược mỹ
            phẩm cao cấp và uy tín của thế giới. Hệ thống dịch vụ sử dụng những
            máy móc công nghệ cao hàng trên toàn thế giới trong lĩnh vực thẩm mỹ
            được công nhận và đạt chứng chỉ như CE, FDA Approved
          </Typography>
          <Typography className="py-2 px-10 text-base font-semibold text-white bg-gray-800 w-fit">
            SẢN PHẨM
          </Typography>
        </Flex>
      </Flex>
      <Image preview={false} alt="img" src="/home-page-content.png" />
    </>
  );
};

export default ContentSection;
