import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 10;

const getDataBlog = async () => {
  const res = await fetch(
    "https://claire.io.vn/wp-json/wp/v2/posts?categories=40&_embed"
  );
  return res.json();
};

const BlogPage = async () => {
  const data = await getDataBlog();
  return (
    <div className="container">
      <Flex vertical gap={60} align="center" className="py-10">
        <Typography className="text-3xl font-extrabold">BLOG</Typography>
        <Row gutter={[20, 20]}>
          {data.map((item: any) => (
            <Col key={item.id} span={24} lg={8}>
              <Flex vertical gap={16} className="h-full">
                <Link href={`/blog/${item.slug}`}>
                  <Image
                    alt="img"
                    src={item?._embedded?.["wp:featuredmedia"][0]?.source_url}
                    width={400}
                    height={400}
                    className="object-cover aspect-square w-full"
                  />
                </Link>
                <Link href={`/blog/${item.slug}`}>
                  <Typography className="text-base md:text-lg lg:text-xl font-extrabold">
                    {item.title.rendered}
                  </Typography>
                </Link>
                <Typography
                  className="text-sm md:text-md lg:text-base"
                  dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                ></Typography>
                {/* <Link
                  href={`/blog/${item.slug}`}
                  className="underline text-xs lg:text-sm font-light cursor-pointer mt-auto"
                >
                  <Typography>READ MORE</Typography>
                </Link> */}
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>
    </div>
  );
};

export default BlogPage;
