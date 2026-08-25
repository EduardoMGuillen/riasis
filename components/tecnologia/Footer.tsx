import Link from "next/link";
import {
  INSTAGRAM_HANDLE,
  NEXUS_URL,
  STORE_ADDRESS,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";
import { instagramUrl, whatsappInterestUrl } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">
            Riasis <span className="text-brand-blue">Tecnología</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-white/65">
            Smartphones de alta gama en Honduras. Vitrina online, compra por
            WhatsApp e Instagram.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-sm text-white/55 transition hover:text-white">
              Grupo Riasis
            </Link>
            {" · "}
            <Link href="/verde" className="text-sm text-white/55 transition hover:text-white">
              Riasis Verde
            </Link>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm text-white/65">
            <li>
              <a href="/tecnologia#destacados" className="transition hover:text-white">
                Destacados
              </a>
            </li>
            <li>
              <a href="/tecnologia#catalogo" className="transition hover:text-white">
                Catálogo
              </a>
            </li>
            <li>
              <a href="/tecnologia#nosotros" className="transition hover:text-white">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/tecnologia#ubicacion" className="transition hover:text-white">
                Ubicación
              </a>
            </li>
            <li>
              <Link href="/tecnologia#contacto" className="transition hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-white/65">
            <li>
              <a
                href="/tecnologia#ubicacion"
                className="transition hover:text-brand-blue"
              >
                {STORE_ADDRESS}
              </a>
            </li>
            <li>
              <a
                href={whatsappInterestUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand-blue"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={instagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand-blue"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {year} Riasis Tecnología. Todos los derechos reservados.</p>
          <p>
            Powered by{" "}
            <a
              href={NEXUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline-offset-2 transition hover:text-brand-blue hover:underline"
            >
              Nexus Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
