import React from "react";
import rezenerate from "@/assets/images/rezenerate.png";
import Image from "next/image";
// import { Image } from "antd";

const CardService = ({ data }: any) => {
  if (!data) return null;
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{
        boxShadow: "0px 8px 8px 0px #00000040",
      }}
    >
      <Image
        src={data.image}
        alt="image"
        width={660}
        height={300}
        className="w-full object-cover"
      />
      <div className="w-full h-full flex flex-col gap-6 p-6 justify-between">
        <h4 className="text-xl text-center uppercase font-extrabold">
          {data.title}
        </h4>

        <p className="text-center whitespace-pre-line">{data.description}</p>

        <button type="button" className="font-bold buttonWhite">
          {data.button}
        </button>
      </div>
    </div>
  );
};

export default CardService;
