import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import useTranslation from "next-translate/useTranslation";
import NavBar from "@/components/Headers/NavBar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang } = useTranslation();

  return (
    <html lang={lang} className='light'>
      <body className={"dark:bg-slate-900"}>
        <NavBar />
        <div className='pt-[80px]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
