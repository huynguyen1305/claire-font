"use client";

import { Divider, Flex, Typography } from "antd";
import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const mockdata = [
  {
    location: "Claire Thảo Điền",
    location_description:
      "Di chuyển từ đường Thảo Điền quẹo vào Trần Ngọc Diện đến số 18, Clinic nằm ngay trong khu phức hợp Little Garden, từ cổng vào nhìn tay trái có bảng tên Claire và cầu thang dẫn lên lầu, một Clinic riêng tư xinh đẹp với rất nhiều hoa và cây xanh chào đón bạn.",
    img: "/thaodien.png",
    mapImg: "/mapthaodien.png",
    address: "18 Trần Ngọc Diện, Phường Thảo Điền, Quận 2",
    email: "Claire.thaodien@gmail.com",
    phone: "08-12345-795",
  },
  {
    location: "Claire Phú Mỹ Hưng",
    location_description:
      "Di chuyển từ Nguyễn Lương Bằng qua cầu Cả Cấm 2, đến đoạn cho rẽ trái đầu tiên rẽ trái vào đường 17, đến số nhà 42. Một clinic riêng tư, ấm cúng và sang trọng chào đón bạn.",
    img: "/phumyhung.png",
    mapImg: "/mapphumyhung.png",
    address: "42 Đường số 17, Phú Mỹ Hưng, Phường Tân Phú, Quận 7",
    email: "Claire.pmt@gmail.com",
    phone: "08-12345-785",
  },
  {
    location: "Claire Tân Bình",
    location_description:
      "Di chuyển từ đường Thảo Điền quẹo vào Trần Ngọc Diện đến số 18, Clinic nằm ngay trong khu phức hợp Little Garden, từ cổng vào nhìn tay trái có bảng tên Claire và cầu thang dẫn lên lầu, một Clinic riêng tư xinh đẹp với rất nhiều hoa và cây xanh chào đón bạn.",
    img: "/tanbinh.png",
    mapImg: "/maptanbinh.png",
    address: "Số 14 Khu Biệt Thự Him Lam 3E, Phổ Quang, P.2, Q.Tân Bình",
    email: "Claire.tanbinh@gmail.com",
    phone: "08-12345-795",
  },
];

const LocationSection = () => {
  const { xl } = useBreakpoint();
  return (
    <Flex vertical className="px-10 md:px-20 xl:px-40" gap={xl ? 80 : 40}>
      {mockdata.map((i, idx) => {
        const even = idx % 2 === 0;
        return (
          <Flex vertical key={i.location} gap={80}>
            <Flex
              className={`flex-col-reverse ${
                !even ? "xl:flex-row-reverse" : "xl:flex-row"
              }`}
              gap={xl ? 80 : 40}
            >
              <Flex
                vertical
                className="w-full xl:w-[60%]"
                style={{ boxShadow: "4px 4px 6px #ACB0BA" }}
              >
                <img alt="img" src={i.img} className="object-cover w-full" />
                <Flex vertical gap={12} className="p-10 md:p-20">
                  <Typography className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-400">
                    9AM-7PM
                  </Typography>
                  <Typography className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-extrabold">
                    {i.location}
                  </Typography>
                  <Typography className="text-base sm:text-lg md:text-xl 2xl:text-2xl">
                    {i.address}
                  </Typography>
                  <Typography className="text-base sm:text-lg md:text-xl 2xl:text-2xl">
                    {i.phone}
                  </Typography>
                  <Typography className="text-base sm:text-lg md:text-xl 2xl:text-2xl">
                    {i.email}
                  </Typography>
                  <Typography className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl border-2 border-black w-full text-center py-5 mt-10">
                    ĐẶT LỊCH TẠI CƠ SỞ
                  </Typography>
                </Flex>
              </Flex>
              <Flex
                vertical
                className="w-full xl:w-[40%]"
                justify="space-between"
                gap={xl ? 20 : 32}
              >
                <Flex
                  vertical
                  gap={xl ? 20 : 32}
                  className="text-center xl:text-left"
                >
                  {xl ? (
                    <Typography className="text-3xl md:text-5xl 2xl:text-7xl font-extrabold md:leading-[68px] xl:leading-[72px] 2xl:leading-[92px] pt-0 xl:pt-10 xl:text-nowrap">
                      {i.location.split(" ")[0]}
                      <br />
                      {i.location.split(" ").slice(1).join(" ")}
                    </Typography>
                  ) : (
                    <Typography className="text-2xl sm:text-3xl md:text-5xl font-extrabold md:leading-[68px] xl:leading-[72px] 2xl:leading-[92px] pt-0 xl:pt-10 xl:text-nowrap">
                      {i.location}
                    </Typography>
                  )}
                  <Typography className="text-base sm:text-lg 2xl:text-xl font-semibold">
                    {i.location_description}
                  </Typography>
                </Flex>
                <Flex vertical gap={20}>
                  {xl && (
                    <Typography className="text-xl font-semibold">
                      Google map
                    </Typography>
                  )}
                  <img
                    alt="img"
                    src={i.mapImg}
                    className="object-cover w-full"
                  />
                </Flex>
              </Flex>
            </Flex>
            {idx !== mockdata.length - 1 && (
              <div
                className={`w-full xl:w-1/3 ${
                  !even ? "self-end" : "self-start"
                }`}
              >
                <Divider className="bg-gray-400 m-0" />
              </div>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default LocationSection;
