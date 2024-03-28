"use client";

import React from "react";
import { Collapse, CollapseProps, Divider } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const FAQService = ({ data }: { data: any }) => {
  const [activeKey, setActiveKey] = React.useState(data[0].id);

  const items: CollapseProps["items"] =
    data?.length > 0
      ? data.map((item: any, idx: number) => {
          return {
            key: idx,
            label: <h4 className="text-xl font-bold">{item.title}</h4>,
            children: (
              <div className="text-justify whitespace-pre-line">
                {item.content}
              </div>
            ),
            style: {
              borderBottom: idx === data.length - 1 ? "none" : "1px solid grey",
              borderRadius: 0,
            },
          };
        })
      : [];

  return (
    <div className="w-full h-full p-4 flex gap-10 flex-wrap lg:flex-nowrap bg-gray-100 rounded-lg">
      <div className="w-full lg:hidden">
        <Collapse
          ghost
          defaultActiveKey={["0"]}
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
      <div className="hidden lg:flex w-full items-center justify-between">
        <div className="w-1/2">
          {data.length > 0 &&
            data.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className={`itemFAQ ${activeKey === item.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveKey(item.id);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
        </div>
        <Divider
          type="vertical"
          style={{ height: "100%", backgroundColor: "gray" }}
          orientation="center"
        />
        <div className="w-1/2 text-justify whitespace-pre-line text-xl p-6">
          {data?.find((item: any) => item.id === activeKey)?.content}
        </div>
      </div>
    </div>
  );
};

export default FAQService;
