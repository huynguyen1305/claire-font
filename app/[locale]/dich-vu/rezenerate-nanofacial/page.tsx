import React from "react";
import CardService from "@/components/CardService/CardService";
import FAQService from "@/components/FAQService/FAQService";

import rezenerate from "@/assets/images/rezenerate.png";
import reze from "@/assets/images/reze.png";
import Image from "next/image";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

const RezeFacialPage = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const dataTriLieu = [
    {
      id: 3,
      title: t("rezenerateNanofacial"),
      description: t("rezenerateNanofacialDes"),
      image: rezenerate,
      button: [
        {
          id: 1,
          title: t("onlineAdvise"),
          onclick: () => {
            console.log("Tư vấn miễn phí online");
          },
        },
        {
          id: 2,
          title: t("adviseSchedule"),
          onclick: () => {
            console.log("Đặt lịch hẹn");
          },
        },
      ],
    },
  ];
  const dataFAQ = [
    {
      id: 1,
      title: t("qRezenerate1"),
      content: t("aRezenerate1"),
    },
    {
      id: 2,
      title: t("qRezenerate2"),
      content: t("aRezenerate2"),
    },
    {
      id: 3,
      title: t("qRezenerate3"),
      content: t("aRezenerate3"),
    },
    {
      id: 4,
      title: t("qRezenerate4"),
      content: t("aRezenerate4"),
    },
    {
      id: 5,
      title: t("qRezenerate5"),
      content: t("aRezenerate5"),
    },
    {
      id: 6,
      title: t("qRezenerate6"),
      content: t("aRezenerate6"),
    },
  ];
  return (
    <div>
      <CarouselContainer />
      <div className="container py-10 flex flex-col gap-10">
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            {t("rezenateTitle")}
          </h3>
          <div className="w-full h-full flex gap-10 items-center flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/3">
              <Image
                src={reze}
                alt="rezenerate"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-2/3 text-xl flex flex-col gap-8 font-bold">
              <p className="text-justify">{t("rezenateHistory1")}</p>
              <p className="text-justify">{t("rezenateHistory2")}</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            BEST.FACIAL.EVER
          </h3>
          <div className="w-full h-full flex gap-10 flex-wrap lg:flex-nowrap">
            <CardService data={dataTriLieu[0]} />
          </div>
        </section>
        <br />
        <section className="flex flex-col gap-8 ">
          <h3 className="text-3xl text-center uppercase font-extrabold">FAQ</h3>
          <FAQService data={dataFAQ} />
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default RezeFacialPage;
