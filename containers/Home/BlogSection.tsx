"use client";

import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const BlogSection = ({ data }: { data: any }) => {
  const { t } = useTranslation();
  return (
    <Flex vertical gap={60} align="center" className="container">
      <Fade direction="up">
        <Typography className="text-3xl font-extrabold">BLOG</Typography>
      </Fade>
      <Row gutter={[20, 20]}>
        {data.slice(0, 3).map((item: any) => (
          <Col key={item.id} span={24} lg={8}>
            <Fade cascade direction="up" damping={0.5}>
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
                <Typography
                  className="text-sm md:text-md lg:text-base line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: item.uagb_excerpt }}
                ></Typography>
                {/* <Link href={`/blog/${item.slug}`} className="mt-auto">
                  <Typography className="underline text-xs lg:text-sm font-light cursor-pointer">
                    {t("seeMore")}
                  </Typography>
                </Link> */}
              </Flex>
            </Fade>
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
      <Fade direction="up" delay={300}>
        <Link href="/blog">
          <Typography className="buttonBlack cursor-pointer uppercase">
            {t("seeMore")}
          </Typography>
        </Link>
      </Fade>
    </Flex>
  );
};

export default BlogSection;
