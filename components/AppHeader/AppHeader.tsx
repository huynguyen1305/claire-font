"use client";

import { Suspense } from "react";
import MenuPC from "./MenuPC";

const AppHeader = () => {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-200 p-4 text-center hidden lg:block">
        <div className="flex px-4 justify-between items-center">
          <div>Claire Wellness</div>
          <div>
            Nhập mã <strong>GIAMGIA15</strong> để <strong>giảm giá 15%</strong>{" "}
            cho đơn hàng từ 2 sản phẩm
          </div>
          <div>
            Hotline: <strong>08123456785</strong>
          </div>
        </div>
      </div>
      <Suspense fallback={<div></div>}>
        <MenuPC />
      </Suspense>
    </>
  );
};

export default AppHeader;
