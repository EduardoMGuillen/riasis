import type { Metadata } from "next";
import { Bebas_Neue, Fraunces, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riasis | Verde, Tecnología y Construcción",
  description:
    "Grupo Riasis en Honduras: landscaping y jardinería, tienda de smartphones de alta gama, y construcción.",
  openGraph: {
    title: "Riasis",
    description: "Tres rubros, un grupo: Verde, Tecnología y Construcción.",
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
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${space.variable} ${bebas.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
