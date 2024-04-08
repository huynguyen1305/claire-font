import React from "react";
import logoWhite from "@/assets/images/claire-logo-white.svg";
import Image from "next/image";

import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

import { Flex } from "antd";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";

const AppFooter = () => {
  return (
    <footer className="border-t-2 p-4 bg-zinc-800 text-zinc-200">
      <div className="container my-5">
        <div className="flex justify-between">
          <Image width={150} height={150} alt="image" src={logoWhite} />
          <LanguageChangerDropdown />
        </div>
        <br />
        <br />

        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Claire Thảo Điền</strong>
            <div className="flex gap-4">
              <strong>Address: </strong>
              <div>18 Trần Ngọc Diện, P.Thảo Điền, Quận 2, TP.HCM</div>
            </div>
            <div className="flex gap-4">
              <strong>Call:</strong>
              <div>08-12345-795</div>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <div>claire.thaodien@gmail.com</div>
            </div>
          </div>
          {/* <Divider className="my-8 bg-gray-300 lg:hidden" /> */}
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Claire Phú Mỹ Hưng</strong>
            <div className="flex gap-4">
              <strong>Address: </strong>
              <div>42 Đường số 17, Phú Mỹ Hưng, P. Tân Phú, Quận 7</div>
            </div>
            <div className="flex gap-4">
              <strong>Call:</strong>
              <div>08-12345-785</div>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <div>claire.phumyhung@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Claire Tân Bình</strong>
            <div className="flex gap-4">
              <strong>Address: </strong>
              <div>
                Số 14 Khu Biệt Thự Him Lam 3E, Phổ Quang, P.2, Q.Tân Bình
              </div>
            </div>
            <div className="flex gap-4">
              <strong>Call:</strong>
              <div>08-12345-795</div>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <div>claire.tanbinh@gmail.com</div>
            </div>
          </div>
          <div className="flex">
            <Flex className="gap-8 ">
              <Image
                alt="Image"
                src={facebook}
                width={30}
                height={30}
                className="hover:filter hover:invert-0"
              />
              <Image alt="Image" src={ins} width={30} height={30} />
              <Image alt="Image" src={mess} width={30} height={30} />
            </Flex>
          </div>
        </div>
      </div>
      <strong className="text-center block mx-auto mt-10">
        © 2024 Claire Wellness. All rights reserved.
      </strong>
    </footer>
  );
};

export default AppFooter;
