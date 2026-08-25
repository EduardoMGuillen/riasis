import type { Metadata } from "next";
import { Fraunces, Outfit, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Riasis | Verde y Tecnología",
  description:
    "Grupo Riasis en Honduras: landscaping y jardinería, y tienda de smartphones de alta gama.",
  openGraph: {
    title: "Riasis",
    description: "Dos rubros, un grupo: Verde y Tecnología.",
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
      className={`${display.variable} ${sans.variable} ${space.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
