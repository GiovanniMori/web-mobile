import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/providers/nextui";
import NextAuthProvider from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mack News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NextUiProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
