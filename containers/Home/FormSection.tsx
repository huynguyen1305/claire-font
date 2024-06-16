/* eslint-disable @next/next/no-img-element */
"use client";

import { Divider, Flex, Form, Input, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const listDichVu = [
  {
    value: "sach-da-detox",
    label: "Làm sạch & detox làn da",
  },
  {
    value: "chong-lao-hoa",
    label: "Trị liệu chống lão hóa",
  },
  {
    value: "tri-mun",
    label: "Trị mụn",
  },
  {
    value: "tu-van-them",
    label: "Tư vấn thêm",
  },
];
const listChiNhanh = [
  {
    value: "thao-dien",
    label: "Claire Thảo Điền",
  },
  {
    value: "phu-my-hung",
    label: "Claire Phú Mỹ Hưng",
  },
  {
    value: "tan-binh",
    label: "Claire Tân Bình",
  },
];

const FormSection = () => {
  const { t } = useTranslation();

  const [valueChiNhanh, setValueChiNhanh] = React.useState<any>(null);
  const [valueDichVu, setValueDichVu] = React.useState<any>(null);
  const [valueName, setValueName] = React.useState<any>("");
  const [valueEmail, setValueEmail] = React.useState<any>("");
  const [valueSDT, setValueSDT] = React.useState<any>("");

  const disableBtn =
    valueName.length > 0 &&
    valueEmail.length > 0 &&
    valueSDT.length > 0 &&
    valueDichVu &&
    valueChiNhanh;

  const handleClickSendEmail = async () => {
    const req = await fetch(`/api/send`, {
      method: "POST",
      body: JSON.stringify({
        name: valueName,
        email: valueEmail,
        phone: valueSDT,
        dichvu: valueDichVu,
        chinhanh: valueChiNhanh,
      }),
    });
    console.log(req);
  };

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
                  style={{
                    padding: "6px 24px",
                    borderRadius: "8px",
                    cursor: !disableBtn ? "not-allowed" : "pointer",
                  }}
                  onClick={handleClickSendEmail}
                  disabled={!disableBtn}
                >
                  <Link
                    href={
                      !disableBtn
                        ? "javascript:void(0)"
                        : "https://wqcx0q.ph.files.1drv.com/y4mwh7bR7Xg5C3YKl7_l_HASLSEGZfr4zRzv34gnKawhQVO8sNQRmnWn3dJoqtKTaTxDIxhl12Nkdi4o_y_8jBaTEGScL_asB6S1xHVtTOD41Av_6QS59MjyeztEgLtHg44doxudP6dA3OodyO3lExrxrMItBjql0X67f4w7nuadIRir32Y9ydZosANqHe6XD8uJkpTfrdpIzTpn20mciZgJg"
                    }
                    className="text-center"
                    style={{
                      cursor: !disableBtn ? "not-allowed" : "pointer",
                      color: "inherit",
                    }}
                  >
                    Gửi
                  </Link>
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
