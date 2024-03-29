import { Button, Divider, Flex, Input, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const FormSection = () => {
  return (
    <Flex gap={80} className="px-32 pb-20">
      <img alt="img" src="/contact-hompage.png" />
      <Flex vertical className="pt-20" gap={32}>
        <Flex vertical className="" gap={8}>
          <text className="text-3xl font-extrabold text-gray-700">
            Tư vấn miễn phí
          </text>
          <text className="text-gray-500">
            Hãy là người đầu tiên nhận được các thông tin mới nhất về trị liệu,
            <br />
            <text className="font-extrabold">
              Ưu đãi và cập nhật từ Claire Wellness
            </text>
          </text>
        </Flex>
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
          <TextArea
            placeholder="Dịch vụ cần tư vấn..."
            variant="filled"
            rows={4}
          />
          <Flex gap={2}>
            <Select
              placeholder="Chọn chi nhánh"
              variant="filled"
              className="w-full"
              size="large"
            />
            <Button
              className="px-8 bg-gray-800 text-white font-bold"
              size="large"
            >
              GỬI
            </Button>
          </Flex>
        </Flex>
        <Flex vertical gap={12} align="center">
          <Typography className="text-gray-600">
            theo dõi chúng tôi tại
          </Typography>
          <Flex>Icons</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormSection;
