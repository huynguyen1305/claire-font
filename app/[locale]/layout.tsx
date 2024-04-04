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
      </head>
      <body>
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
            <AppFooter />
          </TranslationsProvider>
        </Config>
      </body>
    </html>
  );
}
