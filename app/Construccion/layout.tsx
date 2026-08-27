import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riasis Construcción | Obra nueva, remodelación y obra civil",
  description:
    "Construcción y remodelación en Honduras. Viviendas, obra comercial, acabados y dirección de obra con presupuesto desglosado.",
};

export default function ConstruccionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} theme-construccion flex min-h-full flex-1 flex-col bg-white font-sans text-slate-900 antialiased`}
    >
      {children}
    </div>
  );
}
