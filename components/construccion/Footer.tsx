import Link from "next/link";
import { NEXUS_URL } from "@/lib/constants";

const quick = [
  { href: "/Construccion#servicios", label: "Servicios" },
  { href: "/Construccion#sobre", label: "Sobre nosotros" },
  { href: "/Construccion#testimonios", label: "Testimonios" },
  { href: "/Construccion#contacto", label: "Contacto" },
  { href: "/", label: "Grupo Riasis" },
  { href: "/verde", label: "Riasis Verde" },
  { href: "/tecnologia", label: "Riasis Tecnología" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-display text-2xl tracking-wide text-slate-900">
              Riasis <span className="text-brand-600">Construcción</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Construcción, reformas y mantenimiento con equipo propio y compromiso de plazos.
              Sustituye este texto por la historia real de tu empresa.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Enlaces rápidos
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {quick.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-700 transition hover:text-brand-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Riasis Construcción. Todos los derechos reservados.</p>
          <p>
            <Link
              href={NEXUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 underline-offset-2 transition hover:text-brand-600 hover:underline"
            >
              Powered by Nexus Global
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
