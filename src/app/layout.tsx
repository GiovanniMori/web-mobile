import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/providers/nextui";
import Navbar from "@/components/navbar";
import LeftSideBar from "@/components/leftSideBar";
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
          <NextAuthProvider>
            <Navbar />
            <div className="flex justify-center  gap-4">
              <LeftSideBar />
              {children}
            </div>
          </NextAuthProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
