"use client";

import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
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

const BlogSection = ({ data }: { data: any }) => {
  return (
    <Flex vertical gap={60} align="center" className="container">
      <Typography className="text-3xl font-extrabold">BLOG</Typography>
      <Row gutter={[20, 20]}>
        {data.slice(0, 3).map((item: any) => (
          <Col key={item.id} span={24} lg={8}>
            <Flex vertical gap={16} className="h-full">
              <Link href={`/blog/${item.slug}`}>
                <img
                  alt="img"
                  src={item.uagb_featured_image_src.full[0]}
                  className="w-full h-[220px]"
                />
              </Link>
              <Link href={`/blog/${item.slug}`}>
                <Typography className="text-base md:text-lg lg:text-xl font-extrabold">
                  {item.title.rendered}
                </Typography>
              </Link>
              <Typography className="text-sm md:text-md lg:text-base">
                {item.uagb_excerpt}
              </Typography>
              <Link href={`/blog/${item.slug}`} className="mt-auto">
                <Typography className="underline text-xs lg:text-sm font-light cursor-pointer">
                  READ MORE
                </Typography>
              </Link>
            </Flex>
          </Col>
        ))}
        {/* {mockdata.map((item) => (
          <Col key={item.title} span={8}>
            <Flex vertical gap={16}>
              <img alt="img" src={item.imgSrc} className="w-full" />
              <Typography className="text-base md:text-lg lg:text-xl font-extrabold">
                {item.title}
              </Typography>
              <Typography className="text-sm md:text-md lg:text-base">
                {item.description}
              </Typography>
              <Typography className="underline text-xs lg:text-sm font-light cursor-pointer">
                READ MORE
              </Typography>
            </Flex>
          </Col>
        ))} */}
      </Row>
      <Link href="/blog">
        <Typography className="bg-gray-300 px-20 py-4 underline font-bold text-xl cursor-pointer">
          Xem thêm
        </Typography>
      </Link>
    </Flex>
  );
};

export default BlogSection;
