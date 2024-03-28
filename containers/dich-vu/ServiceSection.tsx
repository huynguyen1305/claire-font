"use client";

import React from "react";
import { Collapse, CollapseProps } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const ServiceSection = ({ data }: any) => {
  const items: CollapseProps["items"] =
    data?.children?.length > 0
      ? data.children.map((item: any, idx: number) => {
          return {
            key: idx,
            label: <h4 className="text-xl font-bold">{item.title}</h4>,
            children: (
              <div className="text-justify whitespace-pre-line">
                {item.content}
              </div>
            ),
            style: {
              borderBottom: "1px solid #E0E0E0",
              borderRadius: 0,
            },
          };
        })
      : [];

  if (!data) return null;
  return (
    <div className="w-full h-full flex items-center gap-4 flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-1/5 mx-auto">
        <h4 className="text-2xl text-center uppercase font-extrabold">
          {data.title}
        </h4>
        <h4 className="text-2xl text-center capitalize font-bold">
          {data.titleEn}
        </h4>
      </div>
      <div className="w-full lg:w-3/5">
        <Collapse
          ghost
          size="large"
          expandIconPosition="end"
          items={items}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              rotate={isActive ? 90 : 180}
              style={{ fontSize: "1rem" }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
