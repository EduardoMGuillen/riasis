"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-rv-white/90 shadow-[0_1px_0_rgba(28,34,30,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#inicio"
          className={`font-[family-name:var(--font-display)] text-xl tracking-tight transition-colors md:text-2xl ${
            scrolled || open ? "text-rv-forest" : "text-white"
          }`}
        >
          Riasis <span className="font-medium text-rv-moss">Verde</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-80 ${
                scrolled ? "text-rv-charcoal" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-rv-forest text-white hover:bg-rv-leaf"
                : "bg-white text-rv-forest hover:bg-rv-fog"
            }`}
          >
            Cotizar
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center md:hidden ${
            scrolled || open ? "text-rv-charcoal" : "text-white"
          }`}
        >
          <span className="sr-only">Menú</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full origin-center bg-current transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center bg-current transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full border-t border-rv-mist bg-rv-white px-5 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-rv-charcoal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-rv-forest px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Cotizar proyecto
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
