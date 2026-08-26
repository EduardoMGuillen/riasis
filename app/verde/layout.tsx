import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riasis Verde | Landscaping y Jardinería en Honduras",
  description:
    "Diseño de paisajes, instalación de grama y mantenimiento en Honduras. Cotización por WhatsApp.",
};

export default function VerdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
}
