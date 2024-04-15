import React from "react";
import CardService from "@/components/CardService/CardService";
import FAQService from "@/components/FAQService/FAQService";

import hydra from "@/assets/images/hydra.png";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

const HydraFacialPage = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  const dataTriLieu = [
    {
      id: 3,
      title: t("hydraFacial"),
      description: t("hydraFacialDes"),
      image: hydra,
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
      title: t("qHydraFacial1"),
      content: t("aHydraFacial1"),
    },
    {
      id: 2,
      title: t("qHydraFacial2"),
      content: t("aHydraFacial2"),
    },
    {
      id: 3,
      title: t("qHydraFacial3"),
      content: t("aHydraFacial3"),
    },
    {
      id: 4,
      title: t("qHydraFacial4"),
      content: t("aHydraFacial4"),
    },
    {
      id: 5,
      title: t("qHydraFacial5"),
      content: t("aHydraFacial5"),
    },
    {
      id: 6,
      title: t("qHydraFacial6"),
      content: t("aHydraFacial6"),
    },
  ];
  return (
    <div>
      <CarouselContainer />
      <div className="container py-10 flex flex-col gap-10">
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            Hydra Facial
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

export default HydraFacialPage;
