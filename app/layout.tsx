import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "@/configs/globals.scss";

import Config from "@/configs/config";
import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader/AppHeader";
import AppFooter from "@/components/AppFooter/AppFooter";
import { Mulish } from "next/font/google";

export const metadata: Metadata = {
  title: "Claire Wellness",
  description: "",
};

const mulish = Mulish({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={mulish.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </head>
      <body>
        <Config>
          <AppHeader />
          <main className="min-h-screen">
            <div>{children}</div>
          </main>
          <AppFooter />
        </Config>
      </body>
    </html>
  );
}
