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
};

export const metadata: Metadata = {
  title: "Expertice - IT Solutions",
  description:
    "Discover the Future of Finance: Seamless Transactions, Innovative Solutions, and a User-Friendly Interface.",
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
