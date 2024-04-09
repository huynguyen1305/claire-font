import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "@/configs/globals.scss";

import Config from "@/configs/config";
import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader/AppHeader";
import AppFooter from "@/components/AppFooter/AppFooter";
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

export const metadata: Metadata = {
  title: "Claire Wellness",
  description: "",
};

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
        {/* OG image and tag */}
        <meta property="og:title" content="Claire Wellness" />
        <meta property="og:type" content="clinic" />
        <meta property="og:url" content="https://claire.vn" />
        <meta property="og:image" content="/claire-logo.svg" />
        <meta property="og:site_name" content="Claire Wellness" />

        <meta
          property="og:description"
          content="chào mừng đến với claire wellness Trị liệu tiêu chuẩn Y khoa chính thống Chúng tôi cùng với niềm đam mê về chăm sóc sức khoẻ làn da, chào đón bạn đến với những trung tâm của Claire, nơi bạn sẽ được chăm sóc bằng sự ân cần, chuyên nghiệp và riêng tư nhất"
        />
      </head>
      <body className="relative">
        <Config>
          <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
          >
            <AppHeader />
            <main className="min-h-screen">
              <div>{children}</div>
            </main>
            <AppFooter locale={locale} />
            <div className="fixed bottom-[3%] right-[2%] z-10 ">
              <Flex className="gap-4 flex-col">
                <BtnScrollToTop />
                <Image alt="Image" src={facebook} width={40} height={40} />
                <Image alt="Image" src={ins} width={40} height={40} />
                <Image alt="Image" src={mess} width={40} height={40} />
              </Flex>
            </div>
          </TranslationsProvider>
        </Config>
      </body>
    </html>
  );
}
