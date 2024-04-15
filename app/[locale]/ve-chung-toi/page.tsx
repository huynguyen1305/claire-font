import React from "react";
import aboutSucManh from "@/assets/images/about-power.png";
import aboutPrivate from "@/assets/images/about-private.png";
import aboutDoiNgu from "@/assets/images/about-doingu.png";
import aboutSanPham from "@/assets/images/about-sanpham.png";
import Image from "next/image";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";

import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

const page = async ({ params: { locale } }: any) => {
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <CarouselContainer />
      <div className="py-10 flex flex-col">
        <section className="container py-10 mb-10 flex flex-col gap-8">
          <h2 className="text-3xl text-center uppercase font-extrabold">
            Claire Private Clinic
          </h2>
          <p className="text-center lg:w-2/3 mx-auto">
            {t("clairePrivateClinic")}
          </p>
        </section>
        <section className="bg-gray-100 flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-left">
                {t("powerAndValues")}
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                {t("claireDes1")}
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                {t("claireDes2")}
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                {t("claireDes3")}
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src={aboutSucManh}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className=" flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-2 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-right">
                Private
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                {t("privateDes")}
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <Image
                src={aboutPrivate}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-gray-100 flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-left">
                {t("teamClinic")}
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                {t("teamClinicDes1")}
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                {t("teamClinicDes2")}
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src={aboutDoiNgu}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className=" flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-2 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-right">
                {t("productAndTransparency")}
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full ">
                {t("productAndTransparencyDes1")}
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full ">
                {t("productAndTransparencyDes2")}
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <Image
                src={aboutSanPham}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </TranslationsProvider>
  );
};

export default page;
