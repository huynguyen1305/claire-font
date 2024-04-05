import React from "react";
import ContentSection from "@/containers/blog/ContentSection";
import Head from "next/head";

export const revalidate = 10;

const getDetailPost = async (slug: any) => {
  const res = await fetch(`https://claire.vn/wp-json/wp/v2/posts?slug=${slug}`);
  const data = await res.json();
  return data[0];
};

export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // console.log(params);
  const detailPost = await getDetailPost(params.slug);
  // console.log(detailPost);

  return (
    <div className="container flex gap-5 ">
      <Head>
        <link
          rel="stylesheet"
          id="elementor-post-2506-css"
          href="https://claire.vn/wp-content/uploads/elementor/css/post-2506.css?ver=1712229206"
          media="all"
        />
      </Head>
      <div className="w-full h-full flex-1">
        <ContentSection data={detailPost} />
      </div>
      {/* <div className="w-1/3 hidden lg:flex lg:flex-col">Table content</div> */}
    </div>
  );
}
