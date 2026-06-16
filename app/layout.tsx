import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/Navbar";
import {Footer} from "@/app/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Coral | Portfólio",
  description: "Portfólio profissional de Engenharia de Sistemas",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR" className="scroll-smooth">
        <body className={inter.className}>
            < Navbar />
            {children}
            < Footer />
        </body>
      </html>
  );
}