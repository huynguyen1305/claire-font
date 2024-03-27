import "@/configs/globals.scss";

import Config from "@/configs/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claire",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Config>
        <body>
          <div className="bg-zinc-800 text-zinc-200 p-4 text-center">
            Promotion banner
          </div>
          <header className="border-b-2">
            <nav>
              <ul className="flex justify-center gap-4 p-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">Về chúng tôi</a>
                </li>
                <li>
                  <a href="/dich-vu">Dịch vụ</a>
                </li>
                <li>
                  <a href="/about">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </header>
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
