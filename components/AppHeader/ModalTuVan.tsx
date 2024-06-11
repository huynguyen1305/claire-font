"use client";

import { Modal } from "antd";
import React from "react";
import { Divider, Flex, Input, Select, Typography, Form } from "antd";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

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

const ModalTuVan = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { t } = useTranslation();

  const [form] = Form.useForm();
  return (
    <>
      <div
        className="text-center text-white w-full cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        Download <strong>CLAIRE ACNE HANDBOOK</strong> miễn phí
      </div>
      <Modal
        centered
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
      >
        <Form className="w-full" form={form}>
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
            <Link
              href="https://wqcx0q.ph.files.1drv.com/y4mwh7bR7Xg5C3YKl7_l_HASLSEGZfr4zRzv34gnKawhQVO8sNQRmnWn3dJoqtKTaTxDIxhl12Nkdi4o_y_8jBaTEGScL_asB6S1xHVtTOD41Av_6QS59MjyeztEgLtHg44doxudP6dA3OodyO3lExrxrMItBjql0X67f4w7nuadIRir32Y9ydZosANqHe6XD8uJkpTfrdpIzTpn20mciZgJg"
              className="text-center"
            >
              <button
                className="buttonBlack"
                style={{ padding: "6px 24px", borderRadius: "8px" }}
                onClick={() => setModalOpen(false)}
              >
                Đặt hẹn & Tải CLAIRE ACNE HANDBOOK
              </button>
            </Link>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default ModalTuVan;
