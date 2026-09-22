import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huff Construction",
  description:
    "Construction, design, development planning, concrete, and steel throughout the Upper Midwest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${barlow.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}