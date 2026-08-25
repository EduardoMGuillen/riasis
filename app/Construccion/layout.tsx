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
  title: "Riasis Construcción | Obra nueva, reformas y dirección de obra",
  description:
    "Empresa de construcción y reformas en Honduras. Calidad certificada, plazos cumplidos y equipo propio.",
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
