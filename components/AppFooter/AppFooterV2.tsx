import initTranslations from "@/app/i18n";
import { Button, Divider, Flex, Input } from "antd";
import Link from "next/link";
import Image from "next/image";

import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";

import logoWhite from "@/assets/images/claire-logo-white.svg";
import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

const i18nNamespaces = ["translation"];

const AppFooterV2 = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <footer className="border-t-2 p-4 bg-zinc-800 text-zinc-200">
      <div className="container my-5 flex flex-col gap-6">
        <Flex justify="space-between" gap={20} className="flex-col xl:flex-row">
          <Flex gap={40} className="justify-between xl:justify-evenly">
            <Flex vertical gap={8}>
              <Image
                width={150}
                height={150}
                alt="image"
                src={logoWhite}
                className="mb-5"
              />
              <Link
                href="https://maps.app.goo.gl/15cT2VSTuCcHB8Uf9"
                target="_blank"
                rel="noreferrer"
                className="text-sm xl:text-base"
              >
                • 18 Trần Ngọc Diện, P.Thảo Điền, Quận 2, TP.HCM
              </Link>
              <Link
                href="https://maps.app.goo.gl/REXk4wVMhpCAcxWu8"
                target="_blank"
                rel="noreferrer"
                className="text-sm xl:text-base"
              >
                • 42 Đường số 17, Phú Mỹ Hưng, P. Tân Phú, Quận 7
              </Link>
              <Link
                href="https://maps.app.goo.gl/4Gq5Z6hcnGemNjN99"
                target="_blank"
                rel="noreferrer"
                className="text-sm xl:text-base"
              >
                • Số 14 Khu Biệt Thự Him Lam 3E, Phổ Quang, P.2, Q.Tân Bình
              </Link>
              <Flex className="gap-8 ">
                <Image alt="Image" src={facebook} width={30} height={30} />
                <Image alt="Image" src={ins} width={30} height={30} />
                <Image alt="Image" src={mess} width={30} height={30} />
              </Flex>
            </Flex>
            <Divider
              type="vertical"
              className="bg-white h-full hidden xl:block"
            />
            <Flex vertical gap={20} className="hidden sm:flex">
              <p className="font-bold text-base xl:text-xl">{t("link")}</p>
              <Flex vertical gap={4}>
                <Link href="/" className="text-sm xl:text-base">
                  • {t("homePage")}
                </Link>
                <Link href="/ve-chung-toi" className="text-sm xl:text-base">
                  • {t("aboutUs")}
                </Link>
                <Link href="/dich-vu" className="text-sm xl:text-base">
                  • {t("service")}
                </Link>
                <Link href="/" className="text-sm xl:text-base">
                  • {t("agingTreatment")}
                </Link>
                <Link href="/" className="text-sm xl:text-base">
                  • {t("customerFB")}
                </Link>
                <Link href="/lien-he" className="text-sm xl:text-base">
                  • {t("address")}
                </Link>
                <Link href="/blog" className="text-sm xl:text-base">
                  • {t("blog")}
                </Link>
              </Flex>
            </Flex>
            <Flex vertical gap={20} className="hidden md:flex">
              <p className="font-bold text-base xl:text-xl">{t("openTime")}</p>
              <Flex vertical gap={4}>
                <p className="text-sm xl:text-base">• 9AM - 7PM</p>
              </Flex>
              <p className="font-bold text-base xl:text-xl">{t("location")}</p>
              <Flex vertical gap={4}>
                <p className="text-sm xl:text-base">• {t("hcmCity")}</p>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="flex-row justify-between md:justify-normal xl:flex-col gap-5 md:gap-10 xl:gap-5">
            <Flex vertical gap={20} className="flex sm:hidden">
              <p className="font-bold text-base xl:text-xl">{t("link")}</p>
              <Flex vertical gap={4}>
                <Link href="/" className="text-sm xl:text-base">
                  • {t("homePage")}
                </Link>
                <Link href="/ve-chung-toi" className="text-sm xl:text-base">
                  • {t("aboutUs")}
                </Link>
                <Link href="/dich-vu" className="text-sm xl:text-base">
                  • {t("service")}
                </Link>
                <Link href="/" className="text-sm xl:text-base">
                  • {t("agingTreatment")}
                </Link>
                <Link href="/" className="text-sm xl:text-base">
                  • {t("customerFB")}
                </Link>
                <Link href="/lien-he" className="text-sm xl:text-base">
                  • {t("address")}
                </Link>
                <Link href="/blog" className="text-sm xl:text-base">
                  • {t("blog")}
                </Link>
              </Flex>
            </Flex>
            <Flex vertical gap={20} className="md:hidden">
              <p className="font-bold text-base xl:text-xl">{t("openTime")}</p>
              <Flex vertical gap={4}>
                <p className="text-sm xl:text-base">• 9AM - 7PM</p>
              </Flex>
              <p className="font-bold text-base xl:text-xl">{t("location")}</p>
              <Flex vertical gap={4}>
                <p className="text-sm xl:text-base">• {t("hcmCity")}</p>
              </Flex>
            </Flex>
            <Flex vertical gap={20}>
              <p className="font-bold text-base xl:text-xl">{t("callNow")}</p>
              <Flex vertical gap={2}>
                <Link href="tel:+84812345795" className="text-sm xl:text-base">
                  • 08-12345-791
                </Link>
                <Link href="tel:+84812345795" className="text-sm xl:text-base">
                  • 08-12345-785
                </Link>
                <Link href="tel:+84812345795" className="text-sm xl:text-base">
                  • 08-12345-795
                </Link>
              </Flex>
            </Flex>
            <Flex vertical gap={20} className="hidden sm:flex">
              <p className="font-bold text-base xl:text-xl">{t("signUpNow")}</p>
              <Flex>
                <Input placeholder="Email" />
                <Button type="primary" className="rounded-md">
                  {t("send")}
                </Button>
              </Flex>
              <LanguageChangerDropdown />
            </Flex>
          </Flex>
          <Flex vertical gap={20} className="flex sm:hidden">
            <p className="font-bold text-base xl:text-xl">{t("signUpNow")}</p>
            <Flex>
              <Input placeholder="Email" />
              <Button type="primary" className="rounded-md">
                {t("send")}
              </Button>
            </Flex>
            <LanguageChangerDropdown />
          </Flex>
        </Flex>
        <p className="text-sm xl:text-base">{t("footerDes1")}</p>
        <p className="text-sm xl:text-base">{t("footerDes2")}</p>
      </div>
    </footer>
  );
};

export default AppFooterV2;
