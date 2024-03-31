import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "@/configs/globals.scss";

import Config from "@/configs/config";
import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader/AppHeader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Claire",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Config>
        <body>
          <Suspense fallback={<div></div>}>
            <AppHeader />
          </Suspense>
          <main className="min-h-screen">
            <div>{children}</div>
          </main>
          <footer className="border-t-2 p-4 h-[200px] bg-zinc-800 text-zinc-200">
            Claire
          </footer>
        </body>
      </Config>
    </html>
  );
}
