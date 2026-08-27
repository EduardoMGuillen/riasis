import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riasis Tecnología | Infraestructura IT, redes y seguridad electrónica",
  description:
    "Cableado estructurado, cámaras IP, racks, redes empresariales y control de acceso en Honduras. Cotización y visita técnica.",
};

export default function TecnologiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-tech flex min-h-full flex-1 flex-col bg-white text-foreground">
      {children}
    </div>
  );
}
