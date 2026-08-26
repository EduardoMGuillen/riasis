import type { Metadata } from "next";

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
    <div className="theme-construccion flex min-h-full flex-1 flex-col bg-white font-sans text-slate-900 antialiased">
      {children}
    </div>
  );
}
