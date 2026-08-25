const NEXUS_URL = "https://www.nexusglobalsuministros.com/";

const quickLinks = [
  { href: "/verde#servicios", label: "Servicios" },
  { href: "/verde#sobre", label: "Nosotros" },
  { href: "/verde#proyectos", label: "Proyectos" },
  { href: "/verde#contacto", label: "Contacto" },
  { href: "/", label: "Grupo Riasis" },
  { href: "/tecnologia", label: "Riasis Tecnología" },
  { href: "/Construccion", label: "Riasis Construcción" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rv-mist bg-rv-fog">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-16">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-rv-forest">
            Riasis <span className="text-rv-moss">Verde</span>
          </p>
          <p className="mt-3 max-w-sm text-rv-stone leading-relaxed">
            Landscaping y jardinería en Honduras. Diseñamos exteriores con
            identidad local y cuidado sostenible.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rv-leaf">
            Enlaces
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-rv-charcoal transition hover:text-rv-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
