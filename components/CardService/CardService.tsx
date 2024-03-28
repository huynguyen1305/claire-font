import React from "react";

import Image from "next/image";
import Link from "next/link";

const CardService = ({ data }: any) => {
  if (!data) return null;
  // const handleClick = async () => {
  //   console.log(data);
  //   data.onclick();
  // };
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

        <div className="text-justify whitespace-pre-line">
          {data.description}
        </div>

        <div className="w-full flex justify-center gap-4 flex-wrap lg:flex-nowrap">
          {data?.button?.length > 0 &&
            data?.button.map((item: any, idx: number) => {
              return (
                <button
                  key={idx}
                  type="button"
                  className={`font-bold w-full ${
                    idx / 2 === 0 ? "buttonWhite" : "buttonBlack"
                  }`}
                  // onClick={handleClick}
                >
                  {item?.link ? (
                    <Link
                      href={`${item?.link}`}
                      className="w-full inline-block"
                    >
                      {item?.title}
                    </Link>
                  ) : (
                    item?.title
                  )}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CardService;
