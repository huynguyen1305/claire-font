import React from "react";
import CardService from "@/components/CardService/CardService";

import chamsocdatainha from "@/assets/images/cham-soc-da-tai-nha.png";
import tuvan11 from "@/assets/images/tu-van-1-1.png";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

const TuVanDaPage = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const dataChamSocDa = [
    {
      id: 1,
      title: t("skincareAdviseHome"),
      description: t("skincareAdviseHomeDes"),
      image: chamsocdatainha,
      button: [
        {
          id: 1,
          title: t("onlineAdvise"),
          onclick: () => {
            console.log("Tư vấn online miễn phí");
          },
        },
      ],
    },
    {
      id: 2,
      title: t("skincareDirectAdvise"),
      description: t("skincareDirectAdviseDes"),
      image: tuvan11,
      button: [
        {
          id: 1,
          title: t("adviseSchedule"),
          onclick: () => {
            console.log("Đặt lich hẹn");
          },
        },
      ],
    },
  ];
  return (
    <div>
      <CarouselContainer />
      <div className="container py-10 flex flex-col gap-10">
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            {t("skincareAdvise")}
          </h3>
          <div className="w-full h-full flex items-stretch gap-10 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <CardService data={dataChamSocDa[0]} />
            </div>
            <div className="w-full lg:w-1/2">
              <CardService data={dataChamSocDa[1]} />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default TuVanDaPage;
