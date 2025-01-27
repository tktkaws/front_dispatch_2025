import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";

export const metadata: Metadata = {
  title: "Front Dispatch",
  description: "アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning className="font-noto-sans-jp min-h-screen grid grid-rows-[1fr_auto]">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
