import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riasis Tecnología | Dispositivos e infraestructura IT",
  description:
    "Smartphones de alta gama, redes, cámaras y cableado estructurado en Honduras. Catálogo online e instalación en campo.",
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
