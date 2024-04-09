"use client";

import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";

const BtnScrollToTop = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      className="buttonBlack rounded-full"
      onClick={scrollToTop}
      style={{
        padding: "8px 12px",
      }}
    >
      <ArrowUpOutlined />
    </button>
  );
};

export default BtnScrollToTop;
