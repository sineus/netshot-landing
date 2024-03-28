import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: [
    {
      path: "../fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro/SF-Pro-Display/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro/SF-Pro-Display/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "Netshot",
  description: "Your Comprehensive Network Device Management Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
