/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Image, Typography, Collapse } from "antd";
import React, { useEffect, useState } from "react";

interface IContent {
  paragraph: string[];
  image: {
    name: string;
    imgUrl: string;
  }[];
}

export interface ContentSectionProps {
  title: string;
  author: {
    name: string;
    createdDate: string;
    avatar: string;
  };
  content: IContent;
}

const ContentSection = ({ data }: any) => {
  const [fontSize, setFontSize] = useState(16);

  //   const options: HTMLReactParserOptions = {
  //     replace: (domNode: any) => {
  //       // Replace Accordion
  //       if ((domNode as Element | any).tagName === "details") {
  //         console.log("domNode", domNode);
  //         const sub = domNode as Element | any;
  //         const [isActive, setActive] = useState(false);
  //         console.log(
  //           "Title",
  //           sub.children[0],
  //           domToReact(sub.children[0].children)
  //         );
  //         const item = [
  //           {
  //             key: "1",
  //             label: (
  //               <div
  //                 style={{ fontSize: "inherit" }}
  //                 className={`header-accordion ${isActive ? "active" : ""}`}
  //               >
  //                 {domToReact(sub.children[0].children)}
  //               </div>
  //             ),
  //             children: (
  //               <span style={{ fontSize: "inherit" }}>
  //                 {domToReact(sub.children[1].children)}
  //               </span>
  //             ),
  //           },
  //         ];
  //         return (
  //           <Collapse
  //             bordered
  //             ghost
  //             onChange={() => setActive(!isActive)}
  //             defaultActiveKey={[]}
  //             expandIconPosition="end"
  //             expandIcon={({ isActive }) =>
  //               isActive ? (
  //                 <div
  //                   style={{
  //                     fontSize: "2rem",
  //                     verticalAlign: "middle",
  //                     color: "#235C52",
  //                     fontWeight: "bold",
  //                   }}
  //                 >
  //                   -
  //                 </div>
  //               ) : (
  //                 <div
  //                   style={{
  //                     fontSize: "1.5rem",
  //                     verticalAlign: "middle",
  //                     color: "#235C52",
  //                     fontWeight: "bold",
  //                   }}
  //                 >
  //                   +
  //                 </div>
  //               )
  //             }
  //             items={item}
  //           />
  //         );
  //       }

  //       // Replace heading
  //       if ((domNode as Element).attribs && (domNode as Element).name === "h3") {
  //         const itemDom = domNode as Element | any;
  //         return (
  //           <h3
  //             id={convertToSlug(
  //               itemDom?.children[0]?.data ||
  //                 itemDom.children[0]?.children[0]?.data ||
  //                 ""
  //             )}
  //           >
  //             {domToReact(itemDom.children)}
  //           </h3>
  //         );
  //       }

  //       if ((domNode as Element).attribs && (domNode as Element).name === "h5") {
  //         return <TableOfContent currentPost={data} />;
  //       }

  //       if (
  //         (domNode as Element).name === "span" &&
  //         (domNode as Element).attribs
  //       ) {
  //         const isText = (domNode as Element).attribs.style.includes("font-size");
  //         const textNode = domNode as Element | any;
  //         if (isText) {
  //           return (
  //             <span style={{ fontSize: "inherit" }}>
  //               {domToReact(textNode.children)}
  //             </span>
  //           );
  //         }
  //       }
  //     },
  //   };

  if (!data.content) return null;

  return (
    <div className="w-full">
      <div className="w-full h-[auto] bg-white flex flex-col gap-4 lg:gap-8 p-4 lg:p-10 ">
        <h3 className="text-3xl font-bold text-center uppercase">
          {data.title.rendered}
        </h3>
        <div
          className="modalPreviewContent prose lg:prose-lg max-w-[100%]"
          style={{ fontSize }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
            className="prose lg:prose-xl content-post"
          />
          {/* {data?.content && parse(data.content, options)} */}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
