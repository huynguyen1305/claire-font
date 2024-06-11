import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import claireLogo from "@/assets/images/claire-logo-white.svg";
import Image from "next/image";
import { Divider, Flex } from "antd";
import { useTranslation } from "react-i18next";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";
import { useOutsideClick } from "@/hooks/useClickOutSide";
import { LIEN_HE_LIST } from "@/constants";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

const MenuMobile = ({ toggle, isOpenMenuSidebar }: any) => {
  const { t } = useTranslation();
  const ref = useOutsideClick(() => {
    toggle();
  });
  const mockdata = LIEN_HE_LIST;
  return (
    <div
      className="w-[90%] h-full bg-white"
      ref={ref}
      style={{
        transition: "all 0.3s linear",
        transform: isOpenMenuSidebar ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <nav className="h-full flex flex-col justify-between  relative">
        <div className="absolute right-8 top-8">
          <CloseOutlined onClick={toggle} />
        </div>
        <div className="h-full p-8 flex items-center">
          <ul className="flex flex-col gap-4 uppercase font-extrabold text-xl">
            <li className="block" onClick={toggle}>
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
        </div>

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
              <div className="flex flex-col gap-4 mt-4 lg:hidden">
                {mockdata.map((item) => (
                  <div key={item.email} className="flex flex-col gap-2">
                    <div
                      className="text-xl lg:text-2xl"
                      style={{ fontWeight: "700", color: "#fff" }}
                    >
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <Link
                        href={item.addressLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm xl:text-base"
                      >
                        {item.address}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt />
                      <Link
                        href={`tel:${item.telLink}`}
                        className="text-sm xl:text-base"
                      >
                        {item.phone}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Flex className="gap-4 mt-6 items-center justify-center">
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
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;
