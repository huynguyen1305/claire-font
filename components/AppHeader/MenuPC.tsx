"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { CaretDownOutlined } from "@ant-design/icons";
import claireLogo from "@/assets/images/claire-logo.svg";

const MenuPC = () => {
  const [isShowSubMenu, setShowSubMenu] = useState(false);

  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center container gap-4 uppercase font-extrabold text-xl pb-2">
          <li className="w-[180px] text-center">
            <Link href="/">Trang chủ</Link>
          </li>
          <li className="w-[180px] text-center">
            <Link href="/ve-chung-toi">Về chúng tôi</Link>
          </li>
          <li className="text-center">
            <Link href="/">
              <Image
                src={claireLogo}
                alt="claireLogo"
                width={250}
                height={120}
              />
            </Link>
          </li>
          <li
            className="flex items-center w-[180px] text-center relative"
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
                // visibility: isShowSubMenu ? "visible" : "hidden",
                zIndex: 10,
                paddingTop: "30px",
                // display: isShowSubMenu ? "block" : "none",
              }}
            >
              <div className="grid bg-white w-fit px-4">
                <div className="w-[300px] text-center py-4">
                  <Link href="/ve-chung-toi">Tư vấn da</Link>
                </div>
                <div className="w-[300px] text-center py-4">
                  <Link href="/ve-chung-toi">Hydra Facial</Link>
                </div>
                <div className="w-[300px] text-center py-4">
                  <Link href="/ve-chung-toi">Rezenerate NanoFacial</Link>
                </div>
              </div>
            </div>
          </li>
          <li className="w-[180px] text-center">
            <Link href="/lien-he">Liên hệ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuPC;
