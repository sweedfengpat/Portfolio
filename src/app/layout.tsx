import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio ",
  description: "Generated by Patarapong Charoenpol",
  // icons: [
  //   {
  //     rel: "icon",
  //     href: "./favicon.ico",
  //     url: "./favicon.ico", // Add the missing url property
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icons/favicon.ico" sizes="14" />
      </Head>
      <body className={inter.className}>
        <SpeedInsights />
        <div className=" relative ">
          <div className=" sticky top-0 z-[999]">
            <Header />
          </div>
          {children}
        </div>

      </body>
    </html>
  );
}
