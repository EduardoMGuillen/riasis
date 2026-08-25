import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riasis Tecnología | Smartphones de alta gama",
  description:
    "Tienda premium de celulares en Honduras. iPhone, Galaxy, Pixel y más. Consulta por WhatsApp o Instagram.",
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
