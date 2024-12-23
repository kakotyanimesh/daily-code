import type { Metadata } from "next";

import "./globals.css";
import localFont from 'next/font/local'


const myFont = localFont({src : '../public/fonts/JE_font.ttf'})

export const metadata: Metadata = {
  title: "blog app",
  description: "a blogging platform ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${myFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
