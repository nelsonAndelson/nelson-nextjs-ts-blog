import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nelson's Blog",
  description: "Created by Neslon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
