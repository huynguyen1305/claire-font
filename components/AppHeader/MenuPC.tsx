"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { CaretDownOutlined } from "@ant-design/icons";
import claireLogo from "@/assets/images/claire-logo.svg";

import { MenuOutlined } from "@ant-design/icons";
import MenuMobile from "./MenuMobile";

const MenuPC = () => {
  const [isShowSubMenu, setShowSubMenu] = useState(false);

  const [isOpenMenuSidebar, setOpenMenuSidebar] = useState(false);

  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center container gap-4 uppercase font-extrabold text-xl pb-2">
          <li className="text-center block lg:hidden">
            <MenuOutlined
              onClick={() => setOpenMenuSidebar(!isOpenMenuSidebar)}
            />
          </li>
          <li className="w-[180px] text-center hidden lg:block">
            <Link href="/ve-chung-toi">Về chúng tôi</Link>
          </li>
          <li
            className="items-center w-[180px] text-center relative hidden lg:flex"
            onMouseOver={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <Link href="/dich-vu">Dịch vụ</Link>
            <CaretDownOutlined />
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "-50%",
                width: "100%",
                backgroundColor: "transparent",
                transform: "translateY(100%)",
                transition: "all 0.3s ease-in-out",
                opacity: isShowSubMenu ? 1 : 0,
                visibility: isShowSubMenu ? "visible" : "hidden",
                zIndex: 10,
                paddingTop: "30px",
              }}
            >
              <div className="grid bg-white w-fit px-4">
                <div className="w-[300px] text-center py-4">
                  <Link href="/dich-vu/tu-van-da">Tư vấn da</Link>
                </div>
                <div className="w-[300px] text-center py-4">
                  <Link href="/dich-vu/hydra-facial">Hydra Facial</Link>
                </div>
                <div className="w-[300px] text-center py-4">
                  <Link href="/dich-vu/rezenerate-nanofacial">
                    Rezenerate NanoFacial
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-auto lg:mx-0">
            <Link href="/">
              <Image
                src={claireLogo}
                alt="claireLogo"
                width={250}
                height={120}
              />
            </Link>
          </li>

          <li className="w-[180px] text-center hidden lg:block">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="w-[180px] text-center hidden lg:block">
            <Link href="/lien-he">Liên hệ</Link>
          </li>
          <li className="text-center block lg:hidden">
            {/* <MenuOutlined /> */}
          </li>
        </ul>
      </nav>
      {isOpenMenuSidebar && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
          <MenuMobile
            isOpenMenuSidebar={isOpenMenuSidebar}
            toggle={() => setOpenMenuSidebar(false)}
          />
        </div>
      )}
    </header>
  );
};

export default MenuPC;
