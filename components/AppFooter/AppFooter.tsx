import React from "react";
import logoWhite from "@/assets/images/claire-logo-white.svg";
import Image from "next/image";
import { Divider } from "antd";

const AppFooter = () => {
  return (
    <footer className="border-t-2 p-4 bg-zinc-800 text-zinc-200">
      <div className="container my-5">
        <div>
          <Image width={150} height={150} alt="image" src={logoWhite} />
        </div>
        <br />
        <br />

        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col gap-4">
            <strong className="text-xl">Chi nhánh Thảo Điền</strong>
            <div className="flex gap-4">
              <strong>Address: </strong>
              <div>18 Trần Ngọc Diện, P.Thảo Điền, Quận 2, TP.HCM</div>
            </div>
            <div className="flex gap-4">
              <strong>Call:</strong>
              <div>0812345795</div>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <div>claire.thaodien@gmail.com</div>
            </div>
          </div>
          <Divider className="my-8 bg-gray-300 lg:hidden" />
          <div className="flex flex-col gap-4">
            <strong className="text-xl">Chi nhánh Phú Mỹ Hưng</strong>
            <div className="flex gap-4">
              <strong>Address: </strong>
              <div>42 Đường số 17, Phú Mỹ Hưng, P. Tân Phú, Quận 7</div>
            </div>
            <div className="flex gap-4">
              <strong>Call:</strong>
              <div>0812345785</div>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <div>claire.phumyhung@gmail.com</div>
            </div>
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
