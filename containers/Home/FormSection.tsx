import { Divider, Flex, Input, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";
import Image from "next/image";

const FormSection = () => {
  return (
    <div className="container">
      <Flex className="pb-20 flex-col items-center lg:flex-row">
        <img
          alt="img"
          src="/contact-hompage.png"
          className="w-full lg:w-2/3 h-full object-cover"
        />
        <Flex vertical className="mt-4 lg:px-6 w-full lg:w-1/3">
          <Flex vertical className="" gap={8}>
            <div className="text-3xl font-extrabold">Tư vấn miễn phí</div>
            <div className="">
              Hãy là người đầu tiên nhận được các thông tin mới nhất về trị
              liệu,
              <br />
              <p className="font-extrabold">
                Ưu đãi và cập nhật từ Claire Wellness
              </p>
            </div>
          </Flex>
          <br />
          <Flex vertical gap={20}>
            <Input
              placeholder="Họ Tên..."
              variant="borderless"
              className="border-b-[1px] border-gray-500"
            />
            <Divider className="m-0 bg-gray-300" />
            <Input placeholder="Email..." variant="borderless" />
            <Divider className="m-0 bg-gray-300" />
            <Input placeholder="Số điện thoại..." variant="borderless" />
            <Divider className="m-0 bg-gray-300" />
            <TextArea
              placeholder="Dịch vụ cần tư vấn..."
              variant="outlined"
              rows={4}
            />

            <Flex className="gap-4 items-center">
              <Select
                placeholder="Chọn chi nhánh"
                // variant="filled"
                className="w-full"
                size="large"
              />
              <button className="buttonBlack">GỬI</button>
            </Flex>
          </Flex>
          <br />
          <Flex vertical gap={12} align="center">
            <Typography className="text-gray-600 capitalize">
              theo dõi chúng tôi tại
            </Typography>
            <Flex className="gap-8">
              <Image alt="Image" src={facebook} width={40} height={40} />
              <Image alt="Image" src={ins} width={40} height={40} />
              <Image alt="Image" src={mess} width={40} height={40} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default FormSection;
