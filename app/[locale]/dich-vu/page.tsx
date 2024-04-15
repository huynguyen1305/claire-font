import React from "react";

import CardService from "@/components/CardService/CardService";
import ServiceSection from "@/containers/dich-vu/ServiceSection";

import rezenerate from "@/assets/images/rezenerate.png";
import hydra from "@/assets/images/hydra.png";
import chamsocdatainha from "@/assets/images/cham-soc-da-tai-nha.png";
import tuvan11 from "@/assets/images/tu-van-1-1.png";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

const DichVuPage = async ({ params: { locale } }: any) => {
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
          onclick: async () => {
            console.log("Tư vấn miễn phí online");
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
          onclick: async () => {
            console.log("Đặt lịch hẹn");
          },
        },
      ],
    },
  ];

  const dataTriLieu = [
    {
      id: 3,
      title: t("hydrafacialTherapy"),
      description: t("hydrafacialTherapyDes"),
      image: hydra,
      button: [
        {
          id: 1,
          title: t("learnMore"),
          link: "dich-vu/hydra-facial",
          onclick: async () => {
            console.log("Tìm hiểu thêm");
          },
        },
      ],
    },
    {
      id: 4,
      title: t("rezenerateTherapy"),
      description: t("rezenerateTherapyDes"),
      image: rezenerate,
      button: [
        {
          id: 1,
          title: t("learnMore"),
          link: "dich-vu/rezenerate-nanofacial",
          onclick: async () => {
            console.log("Tìm hiểu thêm");
          },
        },
      ],
    },
  ];

  const dataDichVu = [
    {
      id: 1,
      title: "CHĂM SÓC DA CHUYÊN SÂU",
      titleEn: "Advanced Clinical Treatment",
      children: [
        {
          id: 1,
          title: "Hydra Facial",
          content: t("deepSkincareHydra"),
        },
        {
          id: 2,
          title: "Hydra Facial Plus",
          content: t("deepSkincareHydraPlus"),
        },
        {
          id: 3,
          title: "Hydra Body",
          content: t("deepSkincareHydraBody"),
        },
        {
          id: 4,
          title: "Acne Clinical Treatment",
          content: t("deepSkincareTreatment"),
        },
        {
          id: 5,
          title: "Skin Recovery",
          content: t("deepSkincareRecovery"),
        },
      ],
    },
    {
      id: 2,
      title: "ĐIỀU TRỊ LASER",
      titleEn: "Low Level Laser Therapy",
      children: [
        {
          id: 1,
          title: "18 minutes to glow",
          content: t("laser18min"),
        },
        {
          id: 2,
          title: "Claire's C18 Signature",
          content: t("laserC18"),
        },
      ],
    },
    {
      id: 3,
      title: "THAY DA SINH HỌC",
      titleEn: "Clinical Peeling Therapy",
      children: [
        {
          id: 1,
          title: "Bio Peel",
          content: t("bioPeel"),
        },
        {
          id: 2,
          title: "Derma Peel",
          content: t("dermaPeel"),
        },
      ],
    },
    {
      id: 4,
      title: "NÂNG CƠ, TRẺ HOÁ",
      titleEn: "Energy-Based Treatments",
      children: [
        {
          id: 1,
          title: "Skin Revitalize",
          content: t("skinRevitalize"),
        },
        {
          id: 2,
          title: "Bio Lifting",
          content: t("bioLifting"),
        },
        {
          id: 3,
          title: t("faceCPTTitle"),
          content: t("faceCPT"),
        },
        {
          id: 4,
          title: t("eyeCPTTitle"),
          content: t("eyeCPT"),
        },
        {
          id: 5,
          title: "HIFU Evolift",
          content: t("hifuEvolift"),
        },
      ],
    },
  ];
  return (
    <div>
      <CarouselContainer />
      <div className="container py-10 flex flex-col gap-10">
        <section className="border-2 px-10 py-8 flex flex-col gap-8">
          <h2 className="text-3xl text-center uppercase font-extrabold">
            {t("consultationAndTherapy")}
          </h2>
          <p className="text-center lg:w-2/3 mx-auto">
            {t("consultationAndTherapyDes")}
          </p>
          <button
            type="button"
            className="lg:w-1/3 mx-auto buttonBlack font-bold"
          >
            {t("adviseSchedule")}
          </button>
        </section>
        <br />
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
        </section>
        <br />
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            {t("therapy")}
          </h3>
          <div className="w-full h-full flex items-stretch gap-10 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <CardService data={dataTriLieu[0]} />
            </div>
            <div className="w-full lg:w-1/2">
              <CardService data={dataTriLieu[1]} />
            </div>
          </div>
        </section>
        <br />
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            {t("service")}
          </h3>
          <div>
            {dataDichVu.length > 0 &&
              dataDichVu.map((item) => {
                return (
                  <div key={item.id}>
                    <ServiceSection data={item} />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DichVuPage;
