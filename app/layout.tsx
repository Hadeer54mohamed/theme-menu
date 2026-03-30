import type { Metadata } from "next";
import { Noto_Serif, Manrope, Cairo, Amiri } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { MenuProvider } from "@/components/MenuProvider";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emerald — Menu | زُمُرُّد — قائمة الطعام",
  description: "An elevated dining experience rooted in nature's finest ingredients.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${notoSerif.variable} ${manrope.variable} ${cairo.variable} ${amiri.variable}`}
    >
      <head>
        <meta name="theme-color" content="#4c1121" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <MenuProvider>{children}</MenuProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
