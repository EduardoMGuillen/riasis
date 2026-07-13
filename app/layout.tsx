import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riasis Verde | Landscaping y Jardinería en Honduras",
  description:
    "Diseño de paisajes, jardinería y mantenimiento profesional. Transformamos exteriores en Honduras con criterio estético y cuidado sostenible.",
  openGraph: {
    title: "Riasis Verde",
    description: "Landscaping y jardinería con identidad hondureña.",
    locale: "es_HN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
