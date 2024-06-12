"use client";

import { Divider, Flex, Typography } from "antd";
import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Link from "next/link";
import {
  CompassOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const LocationSection = () => {
  const { xl } = useBreakpoint();
  const { t } = useTranslation();
  const mockdata = [
    {
      location: "Claire Thảo Điền",
      location_description: t("thaoDienLocation"),
      img: "/thaodien.png",
      mapImg:
        "https://maps.google.com/maps?q=18%20Tran%20Ngoc%20Dien&t=m&z=15&output=embed&iwloc=near",
      address: "18 Trần Ngọc Diện, Phường Thảo Điền, Quận 2",
      email: "claire.thaodien@gmail.com",
      phone: "08-12345-795",
      addressLink: "https://maps.app.goo.gl/15cT2VSTuCcHB8Uf9",
      telLink: "tel:+84812345795",
    },
    {
      location: "Claire Phú Mỹ Hưng",
      location_description: t("phuMyHungLocation"),
      img: "/phumyhung.png",
      mapImg:
        "https://maps.google.com/maps?q=42%20%C4%91%C6%B0%E1%BB%9Dng%20s%E1%BB%91%2017%20ph%C3%BA%20m%E1%BB%B9%20h%C6%B0ng%20t%C3%A2n%20ph%C3%BA&t=m&z=15&output=embed&iwloc=near",
      address: "42 Đường số 17, Phú Mỹ Hưng, Phường Tân Phú, Quận 7",
      email: "claire.pmt@gmail.com",
      phone: "08-12345-785",
      addressLink: "https://maps.app.goo.gl/REXk4wVMhpCAcxWu8",
      telLink: "tel:+84812345785",
    },
    {
      location: "Claire Tân Bình",
      location_description: t("tanBinhLocation"),
      img: "/tanbinh.png",
      mapImg:
        "https://maps.google.com/maps?q=him%20lam%203e%20t%C3%A2n%20b%C3%ACnh&t=m&z=15&output=embed&iwloc=near",
      address: "Số 14 Khu Biệt Thự Him Lam, 3E Phổ Quang, P.2, Q.Tân Bình",
      email: "claire.tanbinh@gmail.com",
      phone: "08-12345-791",
      addressLink: "https://maps.app.goo.gl/4Gq5Z6hcnGemNjN99",
      telLink: "tel:+84812345791",
    },
  ];
  return (
    <Flex vertical className="px-10 md:px-20 lg:px-40" gap={xl ? 80 : 40}>
      {mockdata.map((i, idx) => {
        const even = idx % 2 === 0;
        return (
          <Flex vertical key={i.location} gap={80}>
            <Flex
              className={`flex-col-reverse ${
                !even ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              gap={xl ? 80 : 40}
            >
              <Flex
                vertical
                className="w-full lg:w-[60%]"
                style={{ boxShadow: "4px 4px 6px #ACB0BA" }}
              >
                <img alt="img" src={i.img} className="object-cover w-full" />
                <Flex vertical gap={12} className="p-10 md:p-20">
                  <Typography className="text-base sm:text-lg md:text-xl 2lg:text-2xl text-gray-400">
                    9AM-7PM
                  </Typography>
                  <Typography className="text-base sm:text-lg md:text-xl 2lg:text-2xl font-extrabold">
                    {i.location}
                  </Typography>
                  <Link href={i.addressLink} target="_blank" rel="noreferrer">
                    <Typography className="text-base sm:text-lg md:text-xl 2lg:text-2xl">
                      <CompassOutlined className="mr-2" />
                      {i.address}
                    </Typography>
                  </Link>
                  <Link href={i.telLink}>
                    <Typography className="text-base sm:text-lg md:text-xl 2lg:text-2xl">
                      <PhoneOutlined className="mr-2" />
                      {i.phone}
                    </Typography>
                  </Link>
                  <Link href={`mailto:${i.email}`}>
                    <Typography className="text-base sm:text-lg md:text-xl 2lg:text-2xl">
                      <MailOutlined className="mr-2" />
                      {i.email}
                    </Typography>
                  </Link>
                  <Link href={i.telLink}>
                    <Typography className="buttonWhite w-full text-center py-5 mt-10">
                      {t("bookNow")}
                    </Typography>
                  </Link>
                </Flex>
              </Flex>
              <Flex
                vertical
                className="w-full lg:w-[40%]"
                justify="space-between"
                gap={xl ? 20 : 32}
              >
                <Flex
                  vertical
                  gap={xl ? 20 : 32}
                  className="text-center lg:text-left"
                >
                  {xl ? (
                    <Typography className="text-3xl lg:text-5xl font-extrabold md:leading-[68px] lg:leading-[72px] 2lg:leading-[92px] pt-0 lg:pt-10 lg:text-nowrap">
                      {i.location.split(" ")[0]}
                      <br />
                      {i.location.split(" ").slice(1).join(" ")}
                    </Typography>
                  ) : (
                    <Typography className="text-3xl lg:text-5xl font-extrabold md:leading-[68px] lg:leading-[72px] 2lg:leading-[92px] pt-0 lg:pt-10 lg:text-nowrap">
                      {i.location}
                    </Typography>
                  )}
                  <Typography className="text-base sm:text-lg 2lg:text-xl font-semibold">
                    {i.location_description}
                  </Typography>
                </Flex>
                <Flex vertical gap={20}>
                  {xl && (
                    <Typography className="text-xl font-semibold">
                      Google map
                    </Typography>
                  )}
                  <iframe
                    title="google map"
                    src={i.mapImg}
                    width="100%"
                    height="400px"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Flex>
              </Flex>
            </Flex>
            {idx !== mockdata.length - 1 && (
              <div
                className={`w-full lg:w-1/3 ${
                  !even ? "self-end" : "self-start"
                }`}
              >
                <Divider className="bg-gray-400 m-0" />
              </div>
            )}
          </Flex>
        );
      })}
      <br />
    </Flex>
  );
};

export default LocationSection;
