"use client";

import { Modal } from "antd";
import React from "react";
import { Flex, Input, Select, Typography } from "antd";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

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

const ModalTuVan = ({ text }: { text: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
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
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="text-center text-white w-full cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {text}
      </div>
      <Modal
        centered
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
      >
        <Flex vertical className="mt-4 lg:px-6 w-full">
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
            <Input
              placeholder="Họ Tên..."
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
            />

            <Input
              placeholder="Email"
              value={valueEmail}
              onChange={(e) => setValueEmail(e.target.value)}
            />

            <Input
              placeholder="Số điện thoại"
              value={valueSDT}
              onChange={(e) => setValueSDT(e.target.value)}
            />

            <Select
              placeholder="Cho Claire biết nhu cầu của bạn nhé"
              className="w-full"
              size="large"
              options={listDichVu}
              onChange={(e) => setValueDichVu(e)}
              value={listDichVu.find((e) => e.value === valueDichVu)}
            />

            <Flex className="gap-4 items-center">
              <Select
                placeholder="Chọn chi nhánh"
                className="w-full"
                size="large"
                options={listChiNhanh}
                onChange={(e) => setValueChiNhanh(e)}
                value={listChiNhanh.find((e) => e.value === valueChiNhanh)}
              />
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
          <br />

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
              Đặt hẹn & Tải CLAIRE ACNE HANDBOOK
            </Link>
          </button>
        </Flex>
      </Modal>
    </>
  );
};

export default ModalTuVan;
