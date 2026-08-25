import Link from "next/link";
import { CONTACT_EMAIL, NEXUS_URL } from "@/lib/constants";
import { mailtoUrl } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rv-mist bg-rv-fog">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 md:py-16">
        <div>
          <p className="font-display text-2xl text-rv-forest">
            Riasis <span className="text-rv-moss">Verde</span>
          </p>
          <p className="mt-3 max-w-sm text-rv-stone leading-relaxed">
            Landscaping y jardinería en Honduras. Diseñamos exteriores con
            identidad local y cuidado sostenible.
          </p>
          <p className="mt-4 text-sm text-rv-stone">
            <Link href="/" className="transition hover:text-rv-forest">
              Grupo Riasis
            </Link>
            {" · "}
            <Link href="/tecnologia" className="transition hover:text-rv-forest">
              Riasis Tecnología
            </Link>
            {" · "}
            <Link href="/Construccion" className="transition hover:text-rv-forest">
              Riasis Construcción
            </Link>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rv-leaf">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-rv-charcoal">
            <li>
              <a href="/verde#servicios" className="transition hover:text-rv-forest">
                Servicios
              </a>
            </li>
            <li>
              <a href="/verde#sobre" className="transition hover:text-rv-forest">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/verde#proyectos" className="transition hover:text-rv-forest">
                Proyectos
              </a>
            </li>
            <li>
              <a href="/verde#testimonios" className="transition hover:text-rv-forest">
                Clientes
              </a>
            </li>
            <li>
              <a href="/verde#contacto" className="transition hover:text-rv-forest">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rv-leaf">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-rv-charcoal">
            <li>
              <a href="tel:+50499990000" className="transition hover:text-rv-forest">
                +504 9999-0000
              </a>
            </li>
            <li>
              <a href={mailtoUrl()} className="transition hover:text-rv-forest">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="text-rv-stone">
              Francisco Morazán y alrededores
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rv-mist/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-rv-stone md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {year} Riasis Verde. Todos los derechos reservados.</p>
          <a
            href={NEXUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-rv-forest"
          >
            Powered by Nexus Global
          </a>
        </div>
      </div>
    </footer>
  );
}
