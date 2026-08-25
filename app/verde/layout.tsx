import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riasis Verde | Landscaping y Jardinería en Honduras",
  description:
    "Diseño de paisajes, jardinería y mantenimiento profesional. Transformamos exteriores en Honduras con criterio estético y cuidado sostenible.",
};

export default function VerdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
}
