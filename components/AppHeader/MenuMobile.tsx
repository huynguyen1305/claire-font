import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import claireLogo from "@/assets/images/claire-logo.svg";
import Image from "next/image";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";

const MenuMobile = ({ toggle, isOpenMenuSidebar }: any) => {
  const { t } = useTranslation();
  return (
    <div
      className="w-[90%] h-full bg-white p-8"
      style={{
        transition: "all 0.3s linear",
        transform: isOpenMenuSidebar ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <nav className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-4 uppercase font-extrabold text-xl pb-2 relative">
          <li className="ml-auto absolute right-0">
            <CloseOutlined onClick={toggle} />
          </li>
          <li className="mx-auto">
            <Link href="/">
              <Image
                src={claireLogo}
                alt="claireLogo"
                width={280}
                height={120}
              />
            </Link>
          </li>
          <Divider className="m-0 bg-gray-300" />
          <li className=" block">
            <Link href="/ve-chung-toi">{t("aboutUs")}</Link>
          </li>
          <li className="">
            <Link href="/dich-vu">{t("service")}</Link>
            <CaretDownOutlined />

            <div className="flex flex-col gap-4 pt-4 pl-6">
              <div className="">
                <Link href="/dich-vu/tu-van-da">{t("skinConsultation")}</Link>
              </div>
              <div className="">
                <Link href="/dich-vu/hydra-facial">Hydra Facial</Link>
              </div>
              <div className="">
                <Link href="/dich-vu/rezenerate-nanofacial">
                  Rezenerate NanoFacial
                </Link>
              </div>
            </div>
          </li>

          <li className=" block">
            <Link href="/blog">Blog</Link>
          </li>
          <li className=" block">
            <Link href="/lien-he">{t("contact")}</Link>
          </li>
        </ul>

        <div className="mt-auto">
          <LanguageChangerDropdown />
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;
