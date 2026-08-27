"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { href: "/Construccion#servicios", label: "Servicios" },
  { href: "/Construccion#proceso", label: "Proceso" },
  { href: "/Construccion#proyectos", label: "Proyectos" },
  { href: "/Construccion#sobre", label: "Nosotros" },
  { href: "/Construccion#contacto", label: "Contacto" },
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
          ? "bg-white/92 shadow-[0_1px_0_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-20 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/Construccion"
            className="flex items-center gap-2.5"
            aria-label="Riasis Construcción"
          >
            <Image
              src="/logos/riasis-construccion-icon.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-[9px] shadow-sm"
            />
            <span
              className={`font-display text-xl tracking-wide transition-colors md:text-2xl ${
                scrolled || open ? "text-slate-900" : "text-white"
              }`}
            >
              Riasis <span className="text-brand-500">Construcción</span>
            </span>
          </Link>
          <Link
            href="/"
            className={`hidden text-xs font-medium transition-colors sm:inline ${
              scrolled || open
                ? "text-slate-400 hover:text-slate-700"
                : "text-white/55 hover:text-white/90"
            }`}
          >
            Riasis
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-80 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Construccion#contacto"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-brand-600 text-white hover:bg-brand-700"
                : "bg-white text-brand-700 hover:bg-white/90"
            }`}
          >
            Pedir presupuesto
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center lg:hidden ${
            scrolled || open ? "text-slate-800" : "text-white"
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
            className="absolute inset-x-0 top-full border-t border-slate-200 bg-white px-5 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-slate-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/Construccion#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Pedir presupuesto
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
