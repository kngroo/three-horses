import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontLarken = localFont({
  src: "../fonts/Larken-Regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Three Horses",
  description: "Cafe and Speed Shop in Toronto, Ontario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontLarken.className}>{children}</body>
    </html>
  );
}
