import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/nav-bar/Navbar";
import Footer from "../components/blocks/Footer";
import { getMessages } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financia - Evolving Finance for the Digital Era",
  description:
    "Discover the Future of Finance: Seamless Transactions, Innovative Solutions, and a User-Friendly Interface.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
