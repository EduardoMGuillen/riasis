"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderSearch from "@/components/tecnologia/HeaderSearch";
import { INSTAGRAM_HANDLE } from "@/lib/constants";
import { instagramUrl, whatsappInterestUrl } from "@/lib/contact";

const nav = [
  { href: "/tecnologia#destacados", label: "Destacados" },
  { href: "/tecnologia#catalogo", label: "Catálogo" },
  { href: "/tecnologia#nosotros", label: "Nosotros" },
  { href: "/tecnologia#ubicacion", label: "Ubicación" },
  { href: "/tecnologia#contacto", label: "Contacto" },
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
          ? "bg-[#ececef]/92 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-5 md:h-18 md:gap-5 md:px-8">
        <Link
          href="/tecnologia"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Riasis Tecnología"
        >
          <Image
            src="/logos/riasis-tecnologia-icon.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-[9px] shadow-sm"
          />
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors md:text-xl ${
              scrolled || open ? "text-foreground" : "text-white"
            }`}
          >
            Riasis <span className="text-brand-blue">Tecnología</span>
          </span>
        </Link>

        <Link
          href="/"
          className={`hidden shrink-0 text-xs font-medium transition-colors sm:inline ${
            scrolled || open
              ? "text-foreground/50 hover:text-foreground"
              : "text-white/55 hover:text-white/90"
          }`}
        >
          Riasis
        </Link>

        <HeaderSearch
          className="hidden min-w-0 flex-1 md:block md:max-w-[220px] lg:max-w-xs"
          inputClassName="w-full rounded-full border border-black/10 bg-white/90 py-2 pl-4 pr-10 text-base text-foreground outline-none transition placeholder:text-muted focus:border-brand-blue md:text-sm"
        />

        <nav className="ml-auto hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden text-sm font-medium transition-colors xl:inline ${
              scrolled ? "text-foreground/70 hover:text-brand-blue" : "text-white/80 hover:text-white"
            }`}
          >
            {INSTAGRAM_HANDLE}
          </a>
          <a
            href={whatsappInterestUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 ml-auto flex h-10 w-10 shrink-0 items-center justify-center md:ml-0 lg:hidden ${
            scrolled || open ? "text-foreground" : "text-white"
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

      <div
        className={`px-5 py-2 md:hidden ${scrolled || open ? "border-t border-black/5" : ""}`}
      >
        <HeaderSearch inputClassName="w-full rounded-full border border-black/10 bg-white/90 py-2 pl-4 pr-10 text-base text-foreground outline-none transition placeholder:text-muted focus:border-brand-blue" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full border-t border-black/10 bg-[#ececef] px-5 py-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={instagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
              <a
                href={whatsappInterestUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-blue px-4 py-3 text-center font-semibold text-white"
              >
                Escribir por WhatsApp
              </a>
            </nav>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
