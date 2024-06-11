import React from "react";
import ContentSection from "@/containers/blog/ContentSection";
import Head from "next/head";
import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";

export const revalidate = 10;

const getDetailPost = async (slug: any) => {
  const res = await fetch(
    `https://claire.io.vn/wp-json/wp/v2/posts?slug=${slug}`
  );
  const data = await res.json();
  return data[0];
};

const getRelatedPost = async () => {
  const res = await fetch(
    `https://claire.io.vn/wp-json/wp/v2/posts?categories=40&_embed`
  );
  const data = await res.json();
  return data;
};

export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // console.log(params);
  const detailPost = await getDetailPost(params.slug);
  const relatedPost = await getRelatedPost();
  // console.log(detailPost);

  return (
    <div className="container flex flex-col gap-5">
      <Head>
        <link
          rel="stylesheet"
          id="elementor-post-2506-css"
          href="https://claire.io.vn/wp-content/uploads/elementor/css/post-2506.css?ver=1712229206"
          media="all"
        />
      </Head>
      <div className="w-full h-full flex-1">
        <ContentSection data={detailPost} />
      </div>
      <br />
      <h3 className="text-3xl text-center uppercase font-extrabold">
        các bài viết liên quan
      </h3>
      <Row gutter={[20, 20]}>
        {relatedPost &&
          relatedPost.map((item: any) => (
            <Col key={item.id} span={24} lg={8}>
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
      <br />
      <br />
      {/* <div className="w-1/3 hidden lg:flex lg:flex-col">Table content</div> */}
    </div>
  );
}
