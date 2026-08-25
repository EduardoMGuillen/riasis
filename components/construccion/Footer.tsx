import Link from "next/link";
import { CONTACT_EMAIL, NEXUS_URL } from "@/lib/constants";
import { mailtoUrl } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-16">
          <div>
            <p className="font-display text-2xl tracking-wide text-slate-900">
              Riasis <span className="text-brand-600">Construcción</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Construcción, reformas y mantenimiento con equipo propio y
              compromiso de plazos. Sustituye este texto por la historia real
              de tu empresa.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              <Link href="/" className="transition hover:text-brand-600">
                Grupo Riasis
              </Link>
              {" · "}
              <Link href="/verde" className="transition hover:text-brand-600">
                Riasis Verde
              </Link>
              {" · "}
              <Link href="/tecnologia" className="transition hover:text-brand-600">
                Riasis Tecnología
              </Link>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Explorar
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <a href="/Construccion#servicios" className="transition hover:text-brand-600">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/Construccion#sobre" className="transition hover:text-brand-600">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="/Construccion#testimonios" className="transition hover:text-brand-600">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="/Construccion#contacto" className="transition hover:text-brand-600">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <a href="tel:+50499990000" className="transition hover:text-brand-600">
                  +504 9999-0000
                </a>
              </li>
              <li>
                <a href={mailtoUrl()} className="transition hover:text-brand-600">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-slate-500">
                Francisco Morazán y alrededores
              </li>
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
