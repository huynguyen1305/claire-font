import React from "react";
import logoWhite from "@/assets/images/claire-logo-white.svg";
import Image from "next/image";

import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

import { Flex } from "antd";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";
import initTranslations from "@/app/i18n";
import Link from "next/link";

const i18nNamespaces = ["translation"];

const AppFooter = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <footer className="border-t-2 p-4 bg-zinc-800 text-zinc-200">
      <div className="container my-5">
        <div className="flex justify-between">
          <Image width={150} height={150} alt="image" src={logoWhite} />
          <LanguageChangerDropdown />
        </div>
        <br />
        <br />

        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Claire Thảo Điền</strong>
            <div className="flex gap-4">
              <strong>{t("address")}: </strong>
              <Link
                href="https://maps.app.goo.gl/15cT2VSTuCcHB8Uf9"
                target="_blank"
                rel="noreferrer"
              >
                18 Trần Ngọc Diện, P.Thảo Điền, Quận 2, TP.HCM
              </Link>
            </div>
            <div className="flex gap-4">
              <strong>{t("phone")}:</strong>
              <Link href="tel:+84812345795">08-12345-795</Link>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <Link href="mailto:claire.thaodien@gmail.com">
                claire.thaodien@gmail.com
              </Link>
            </div>
          </div>
          {/* <Divider className="my-8 bg-gray-300 lg:hidden" /> */}
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Claire Phú Mỹ Hưng</strong>
            <div className="flex gap-4">
              <strong>{t("address")}: </strong>
              <Link
                href="https://maps.app.goo.gl/REXk4wVMhpCAcxWu8"
                target="_blank"
                rel="noreferrer"
              >
                42 Đường số 17, Phú Mỹ Hưng, P. Tân Phú, Quận 7
              </Link>
            </div>
            <div className="flex gap-4">
              <strong>{t("phone")}:</strong>
              <Link href="tel:+84812345785">08-12345-785</Link>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <Link href="mailto:claire.phumyhung@gmail.com">
                claire.phumyhung@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Claire Tân Bình</strong>
            <div className="flex gap-4">
              <strong>{t("address")}: </strong>
              <Link
                href="https://maps.app.goo.gl/4Gq5Z6hcnGemNjN99"
                target="_blank"
                rel="noreferrer"
              >
                Số 14 Khu Biệt Thự Him Lam 3E, Phổ Quang, P.2, Q.Tân Bình
              </Link>
            </div>
            <div className="flex gap-4">
              <strong>{t("phone")}:</strong>
              <Link href="tel:+84812345791">08-12345-791</Link>
            </div>
            <div className="flex gap-4">
              <strong>Email: </strong>
              <Link href="mailto:claire.tanbinh@gmail.com">
                claire.tanbinh@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex">
            <Flex className="gap-8 ">
              <Image alt="Image" src={facebook} width={30} height={30} />
              <Image alt="Image" src={ins} width={30} height={30} />
              <Image alt="Image" src={mess} width={30} height={30} />
            </Flex>
          </div>
        </div>
      </div>
      <strong className="text-center block mx-auto mt-10">
        © 2024 Claire Clinic. All rights reserved.
      </strong>
    </footer>
  );
};

export default AppFooter;
