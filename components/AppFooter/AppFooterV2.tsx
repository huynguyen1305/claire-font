import initTranslations from "@/app/i18n";
import { Button, Divider, Flex, Input } from "antd";
import Link from "next/link";
import Image from "next/image";

import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";

import logoWhite from "@/assets/images/claire-logo-white.svg";
import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";
import { HomeFilled } from "@ant-design/icons";

import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { LIEN_HE_LIST } from "@/constants";

const i18nNamespaces = ["translation"];

const AppFooterV2 = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const mockdata = LIEN_HE_LIST;

  return (
    <footer className="border-t-2 p-4 bg-zinc-800 text-zinc-200">
      <div className="container my-5 flex flex-col gap-6">
        <Flex justify="space-between" gap={20} className="flex-col xl:flex-row">
          <Flex gap={40} className="justify-between">
            <Flex vertical gap={8} className="w-full lg:w-[55%]">
              <Link href="/">
                <Image
                  width={150}
                  height={150}
                  alt="image"
                  src={logoWhite}
                  className="mb-5"
                />
              </Link>
              <p className="text-sm xl:text-base">{t("footerDes1")}</p>
              <p className="text-sm xl:text-base">{t("footerDes2")}</p>

              <div className="flex flex-col gap-6 mt-4 lg:hidden">
                {mockdata.map((item, index) => (
                  <div key={item.email} className="flex flex-col gap-2">
                    <div
                      className="text-xl lg:text-2xl"
                      style={{ fontWeight: "700", color: "#fff" }}
                    >
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <Link
                        href={item.addressLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm xl:text-base"
                      >
                        {item.address}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt />
                      <Link
                        href={`tel:${item.telLink}`}
                        className="text-sm xl:text-base"
                      >
                        {item.phone}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdMail />
                      <Link
                        href={`mailto:${item.email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm xl:text-base"
                      >
                        {item.email}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Flex gap={8} className="mt-4 justify-between">
                <div>
                  <div
                    className="text-xl lg:text-2xl"
                    style={{ fontWeight: "700", color: "#fff" }}
                  >
                    {t("link")}
                  </div>
                  <Flex vertical gap={8} className="mt-2">
                    <Link href="/" className="text-sm xl:text-base">
                      {t("homePage")}
                    </Link>
                    <Link href="/ve-chung-toi" className="text-sm xl:text-base">
                      {t("aboutUs")}
                    </Link>
                    <Link href="/dich-vu" className="text-sm xl:text-base">
                      {t("service")}
                    </Link>

                    <Link href="/lien-he" className="text-sm xl:text-base">
                      {t("address")}
                    </Link>
                    <Link href="/blog" className="text-sm xl:text-base">
                      {t("blog")}
                    </Link>
                  </Flex>
                </div>
                <div className="pr-8 pt-[3px]">
                  <div
                    className="text-xl lg:text-2xl"
                    style={{ fontWeight: "700", color: "#fff" }}
                  >
                    Giờ mở cửa
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <FaRegClock />
                    <div className="text-sm xl:text-base">9:00 - 19:00</div>
                  </div>
                  <br />
                  <div
                    className="text-xl lg:text-2xl"
                    style={{ fontWeight: "700", color: "#fff" }}
                  >
                    Social Media
                  </div>
                  <Flex className="gap-4 mt-2">
                    <Link
                      href={"https://www.facebook.com/claireclinicvn/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Image"
                        src={facebook}
                        width={34}
                        height={34}
                      />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/claireclinicvn/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image alt="Image" src={ins} width={34} height={34} />
                    </Link>
                    <Link
                      href={"https://m.me/claireclinicvn"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image alt="Image" src={mess} width={34} height={34} />
                    </Link>
                  </Flex>
                </div>
                <div className="pr-8 pt-[3px] hidden lg:block">
                  <div
                    className="text-xl lg:text-2xl"
                    style={{ fontWeight: "700", color: "#fff" }}
                  >
                    Language
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <LanguageChangerDropdown />
                  </div>
                </div>
              </Flex>
            </Flex>

            <Flex vertical className="hidden lg:flex w-[45%]">
              <div className="flex flex-col gap-6">
                {mockdata.map((item, index) => (
                  <div key={item.email} className="flex flex-col gap-2">
                    <div
                      className="text-xl lg:text-2xl"
                      style={{ fontWeight: "700", color: "#fff" }}
                    >
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <Link
                        href={item.addressLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm xl:text-base"
                      >
                        {item.address}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt />
                      <Link
                        href={`tel:${item.telLink}`}
                        className="text-sm xl:text-base"
                      >
                        {item.phone}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdMail />
                      <Link
                        href={`mailto:${item.email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm xl:text-base"
                      >
                        {item.email}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Flex>
          </Flex>
          {/* <Flex className="flex-row justify-between md:justify-normal xl:flex-col gap-5 md:gap-10 xl:gap-5">
            <Flex vertical gap={8} className="flex sm:hidden">
              <div className="text-xl" style={{ fontWeight: "700" }}>
                {t("link")}
              </div>
              <Flex vertical gap={8}>
                <Link href="/" className="text-sm xl:text-base">
                  {t("homePage")}
                </Link>
                <Link href="/ve-chung-toi" className="text-sm xl:text-base">
                  {t("aboutUs")}
                </Link>
                <Link href="/dich-vu" className="text-sm xl:text-base">
                  {t("service")}
                </Link>

                <Link href="/lien-he" className="text-sm xl:text-base">
                  {t("address")}
                </Link>
                <Link href="/blog" className="text-sm xl:text-base">
                  {t("blog")}
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
          </Flex> */}
          {/* <Flex vertical gap={20} className="flex sm:hidden">
            <p className="font-bold text-base xl:text-xl">{t("signUpNow")}</p>
            <Flex>
              <Input placeholder="Email" />
              <Button type="primary" className="rounded-md">
                {t("send")}
              </Button>
            </Flex>
            <LanguageChangerDropdown />
          </Flex> */}
        </Flex>
      </div>
      <strong className="text-center block mx-auto mt-10 border-t-[1px] py-4">
        © 2024 Claire Clinic. All rights reserved.
      </strong>
    </footer>
  );
};

export default AppFooterV2;
