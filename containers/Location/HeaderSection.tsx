import { Flex, Typography } from "antd";
import React from "react";

const HeaderSection = () => {
  return (
    <Flex
      vertical
      gap={20}
      className="w-full max-w-[1280px] mx-auto px-20 text-center"
      align="center"
    >
      <Typography className="text-6xl font-extrabold">Địa điểm</Typography>
      <Typography className="text-2xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </Typography>
      <Typography className="text-xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit consectetur adipiscing elit.
      </Typography>
    </Flex>
  );
};

export default HeaderSection;
