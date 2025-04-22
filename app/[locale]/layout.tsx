import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter, Red_Hat_Display, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";

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
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Expertice - IT Solutions",
  description:
    "Discover the Future of Finance: Seamless Transactions, Innovative Solutions, and a User-Friendly Interface.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${redHatDisplay.variable} antialiased`}
      >
        <NextIntlClientProvider
          messages={messages}
          //  locale={locale}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
