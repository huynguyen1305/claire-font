import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "@/configs/globals.scss";

import Config from "@/configs/config";
import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader/AppHeader";
import { Mulish } from "next/font/google";
import i18nConfig from "@/app/i18nConfig";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import initTranslations from "@/app/i18n";
import BtnScrollToTop from "@/components/BtnScrollToTop/BtnScrollToTop";

import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";
import { Flex } from "antd";
import Image from "next/image";
import AppFooterV2 from "@/components/AppFooter/AppFooterV2";
import Link from "next/link";

const metaDataObj: Metadata = {
  title: {
    default: "Claire Clinic",
    template:
      "%s | Hệ thống cơ sở chăm sóc sức khoẻ làn da theo tiêu chuẩn y khoa cao cấp",
  },
  description:
    "Claire Clinic là hệ thống cơ sở chăm sóc sức khoẻ làn da theo tiêu chuẩn y khoa cao cấp.",
  openGraph: {
    title:
      "Claire Clinic | Hệ thống cơ sở chăm sóc sức khoẻ làn da theo tiêu chuẩn y khoa cao cấp",
    images: [
      {
        url: "https://www.claire.vn/claire-og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export const metadata: Metadata = metaDataObj;

const mulish = Mulish({ subsets: ["latin"] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["translation"];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className={mulish.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="relative">
        <Config>
          <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
          >
            <AppHeader />
            <main style={{ minHeight: "100dvh" }}>
              <div>{children}</div>
            </main>
            <AppFooterV2 locale={locale} />
            <div className="fixed bottom-[3%] right-[2%] z-10 ">
              <Flex className="gap-4 flex-col">
                <BtnScrollToTop />
                <div className="gap-4 flex-col hidden lg:flex">
                  <Link
                    href={"https://www.facebook.com/claireclinicvn/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image alt="Image" src={facebook} width={40} height={40} />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/claireclinicvn/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image alt="Image" src={ins} width={40} height={40} />
                  </Link>
                  <Link
                    href={"https://m.me/claireclinicvn"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image alt="Image" src={mess} width={40} height={40} />
                  </Link>
                </div>
              </Flex>
            </div>
          </TranslationsProvider>
        </Config>
      </body>
    </html>
  );
}
