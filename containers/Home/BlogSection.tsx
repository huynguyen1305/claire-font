"use client";

import { Col, Flex, Row, Typography } from "antd";
import React from "react";

const mockdata = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaa. Quis",
    imgSrc: "/homepage-common.png",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaa. Quis",
    imgSrc: "/homepage-common.png",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaa. Quis",
    imgSrc: "/homepage-common.png",
  },
];

const BlogSection = () => {
  return (
    <Flex vertical gap={60} align="center" className="container">
      <Typography className="text-4xl text-gray-700 font-extrabold">
        BLOG
      </Typography>
      <Row gutter={[20, 20]}>
        {mockdata.map((item) => (
          <Col key={item.title} span={8}>
            <Flex vertical gap={16}>
              <img alt="img" src={item.imgSrc} className="w-full" />
              <Typography className="text-base md:text-lg lg:text-xl text-gray-500 font-extrabold">
                {item.title}
              </Typography>
              <Typography className="text-sm md:text-md lg:text-base text-gray-500">
                {item.description}
              </Typography>
              <Typography className="underline text-xs lg:text-sm font-light cursor-pointer">
                READ MORE
              </Typography>
            </Flex>
          </Col>
        ))}
      </Row>
      <Typography className="bg-gray-300 px-20 py-4 underline text-gray-700 font-bold text-xl cursor-pointer">
        Xem thêm
      </Typography>
    </Flex>
  );
};

export default BlogSection;
