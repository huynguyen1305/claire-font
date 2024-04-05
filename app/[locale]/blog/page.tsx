import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";

export const revalidate = 10;

const getDataBlog = async () => {
  const res = await fetch(
    "https://claire.vn/wp-json/wp/v2/posts?categories=40"
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
            <Col key={item.id} span={8}>
              <Flex vertical gap={16} className="h-full">
                <img
                  alt="img"
                  src={item.uagb_featured_image_src.full[0]}
                  className="w-full h-[220px]"
                />
                <Link href={`/blog/${item.slug}`}>
                  <Typography className="text-base md:text-lg lg:text-xl font-extrabold">
                    {item.title.rendered}
                  </Typography>
                </Link>
                <Typography
                  className="text-sm md:text-md lg:text-base"
                  dangerouslySetInnerHTML={{ __html: item.uagb_excerpt }}
                ></Typography>
                <Link
                  href={`/blog/${item.slug}`}
                  className="underline text-xs lg:text-sm font-light cursor-pointer mt-auto"
                >
                  <Typography>READ MORE</Typography>
                </Link>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>
    </div>
  );
};

export default BlogPage;
