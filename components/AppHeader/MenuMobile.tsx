import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import claireLogo from "@/assets/images/claire-logo-white.svg";
import Image from "next/image";
import { Divider, Flex } from "antd";
import { useTranslation } from "react-i18next";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";
import { useOutsideClick } from "@/hooks/useClickOutSide";

const MenuMobile = ({ toggle, isOpenMenuSidebar }: any) => {
  const { t } = useTranslation();
  const ref = useOutsideClick(() => {
    toggle();
  });
  return (
    <div
      className="w-[90%] h-full bg-white"
      ref={ref}
      style={{
        transition: "all 0.3s linear",
        transform: isOpenMenuSidebar ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <nav className="h-full flex flex-col justify-between ">
        <ul className="flex flex-col gap-4 uppercase font-extrabold text-xl p-8 relative">
          <li className="ml-auto absolute right-8">
            <CloseOutlined onClick={toggle} />
          </li>

          {/* <Divider className="m-0 bg-gray-300" /> */}
          <li className=" block" onClick={toggle}>
            <Link href="/ve-chung-toi">{t("aboutUs")}</Link>
          </li>
          <li className="" onClick={toggle}>
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

          <li className=" block" onClick={toggle}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className=" block" onClick={toggle}>
            <Link href="/lien-he">{t("contact")}</Link>
          </li>
        </ul>

        <div className="bg-zinc-800 text-zinc-200 p-8">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={toggle}>
              <Image
                src={claireLogo}
                alt="claireLogo"
                width={150}
                height={120}
              />
            </Link>
            <div className="flex self-end">
              <LanguageChangerDropdown />
            </div>
          </div>
          <br />
          <div className="flex justify-between items-end">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <strong className="text-base">Claire Thảo Điền:</strong>
                  <br />
                  08-12345-795
                  <br />
                  18 Trần Ngọc Diện, Phường Thảo Điền, Quận 2
                  <br />
                  claire.thaodien@gmail.com
                </div>
                <div>
                  <strong className="text-base">Claire Phú Mỹ Hưng:</strong>
                  <br />
                  08-12345-785
                  <br />
                  42 Đường số 17, Phú Mỹ Hưng, Phường Tân Phú, Quận 7
                  <br />
                  claire.pmt@gmail.com
                </div>
                <div>
                  <strong className="text-base">Claire Tân Bình:</strong>
                  <br />
                  08-12345-795
                  <br />
                  Số 14 Khu Biệt Thự Him Lam 3E, Phổ Quang, P.2, Quận Tân Bình
                  <br />
                  claire.tanbinh@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;
