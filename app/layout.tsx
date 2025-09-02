import { Locale, locales } from "@/lib/i18n";
import type { Metadata } from "next";
import { Inter, Poppins, Red_Hat_Display } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
  // weight: ["300", "400", "500", "700", "900"],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Expertice - IT Solutions",
  description:
    "Discover the Future of Finance: Seamless Transactions, Innovative Solutions, and a User-Friendly Interface.",
};
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
