"use client";

import { Divider, Flex, Input, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const FormSection = () => {
  const { t } = useTranslation();
  const listDichVu = [
    {
      label: "Làm sạch & detox làn da",
      value: "Làm sạch & detox làn da",
    },
    {
      label: "Trị liệu chống lão hóa",
      value: "Trị liệu chống lão hóa",
    },
    {
      label: "Trị mụn",
      value: "Trị mụn",
    },
    {
      label: "Tư vấn thêm",
      value: "Tư vấn thêm",
    },
  ];
  const listChiNhanh = [
    {
      label: "Claire Thảo Điền",
      value: "Claire Thảo Điền",
    },
    {
      label: "Claire Phú Mỹ Hưng",
      value: "Claire Phú Mỹ Hưng",
    },
    {
      label: "Claire Tân Bình",
      value: "Claire Tân Bình",
    },
  ];
  return (
    <div className="container">
      <Flex className="pb-20 flex-col items-center lg:flex-row">
        <Fade direction="left" className="w-full lg:w-2/3 h-full" triggerOnce>
          <img
            alt="img"
            src="/contact-hompage.png"
            className="w-full h-full object-cover"
          />
        </Fade>

        <Flex vertical className="mt-4 lg:px-6 w-full lg:w-1/3">
          <Fade cascade direction="up" duration={500} triggerOnce>
            <Flex vertical className="" gap={8}>
              <div className="text-3xl font-extrabold">
                {t("freeConsultation")}
              </div>
              <div className="">
                {t("desConsultant")}
                <span className="font-extrabold">{t("desConsultantBold")}</span>
              </div>
            </Flex>
            <br />
            <Flex vertical gap={24}>
              <Input placeholder="Họ Tên..." />

              <Input placeholder="Email" />

              <Input placeholder="Số điện thoại" />

              <Select
                placeholder="Cho Claire biết nhu cầu của bạn nhé"
                className="w-full"
                size="large"
                options={listDichVu}
              />

              <Flex className="gap-4 items-center">
                <Select
                  placeholder="Chọn chi nhánh"
                  className="w-full"
                  size="large"
                  options={listChiNhanh}
                />
                <button
                  className="buttonBlack"
                  style={{ padding: "6px 24px", borderRadius: "8px" }}
                >
                  GỬI
                </button>
              </Flex>
            </Flex>
            <br />
            <Flex vertical gap={12} align="center">
              <Typography className="text-gray-600 capitalize">
                theo dõi chúng tôi tại
              </Typography>
              <Flex className="gap-8">
                <Link
                  href={"https://www.facebook.com/claireclinicvn/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="Image" src={facebook} width={34} height={34} />
                </Link>
                <Link
                  href={"https://www.instagram.com/claireclinicvn/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="Image" src={ins} width={34} height={34} />
                </Link>
                <Link
                  href={"https://m.me/claireclinicvn"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="Image" src={mess} width={34} height={34} />
                </Link>
              </Flex>
            </Flex>
          </Fade>
        </Flex>
      </Flex>
    </div>
  );
};

export default FormSection;
