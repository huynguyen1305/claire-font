"use client";

import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const BlogSection = ({ data }: { data: any }) => {
  const { t } = useTranslation();
  console.log(data);
  return (
    <Flex vertical gap={60} align="center" className="container">
      <Fade direction="up" triggerOnce>
        <Typography className="text-3xl font-extrabold">BLOG</Typography>
      </Fade>

      <Row gutter={[20, 20]} className="w-full">
        {data.slice(0, 3).map((item: any) => (
          <Col key={item.id} span={24} lg={8}>
            <Fade direction="up" damping={0.5} triggerOnce>
              <Flex vertical gap={16} className="h-full">
                <Link href={`/blog/${item.slug}`}>
                  <img
                    alt="img"
                    src={item?._embedded?.["wp:featuredmedia"][0]?.source_url}
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
      </Row>

      <Fade direction="up" delay={300} triggerOnce>
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
