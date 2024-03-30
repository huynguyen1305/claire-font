"use client";

import { Flex, Image, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";

const HeaderSection = () => {
  const { xl } = useBreakpoint();
  return (
    <Flex
      vertical
      gap={20}
      className="w-full md:max-w-[1280px] mx-auto px-10 md:px-20 text-center"
      align="center"
    >
      {!xl ? (
        <Image alt="image" preview={false} src="/home-page-content.png" />
      ) : (
        <>
          <Typography className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
            Địa điểm
          </Typography>
          <Typography className="text-lg sm:text-xl md:text-2xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography className="text-base sm:text-lg md:text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit.
          </Typography>
        </>
      )}
    </Flex>
  );
};

export default HeaderSection;
