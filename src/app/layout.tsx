import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import WebsiteTemplate from "../../template/WebsiteTemplate";
import Image from "next/image";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Dominion",
  description: "Dominion made by Appifinty.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dominion",
    description: "Dominion made by Appifinty.",
    type: "website",
    images: [
      {
        url: "/favicon-96x96.png",
        width: 96,
        height: 96,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-site-black font-manrope`}
      >
        <WebsiteTemplate>
          {children}
          <Image
            className="w-[15vw] md:w-[5.88vw] fixed right-[5%] md:right-[2%] bottom-[5%] z-[1100]"
            src="/custom-assets/bot.png"
            alt="bot"
            width={113}
            height={113}
          />
        </WebsiteTemplate>
      </body>
    </html>
  );
}
