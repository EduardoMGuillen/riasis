"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NEXUS_URL } from "@/lib/constants";

const panels = [
  {
    href: "/verde",
    index: "01",
    kicker: "Paisaje",
    title: "Verde",
    line: "Jardines y paisajes que se viven con el clima de Honduras.",
    cta: "Entrar",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2400&q=75",
    alt: "Patio tropical con piscina, palmeras y jardín residencial",
    accent: "bg-rv-moss",
    accentText: "text-rv-glow",
    wash: "bg-rv-forest/20",
  },
  {
    href: "/tecnologia",
    index: "02",
    kicker: "Tecnología",
    title: "Tecnología",
    line: "Smartphones de alta gama. Vitrina online, compra por WhatsApp.",
    cta: "Entrar",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=2400&q=75",
    alt: "Smartphone de alta gama y audífonos sobre superficie de madera",
    accent: "bg-brand-blue",
    accentText: "text-brand-blue",
    wash: "bg-black/10",
  },
  {
    href: "/Construccion",
    index: "03",
    kicker: "Obra",
    title: "Construcción",
    line: "Obra nueva, reformas y dirección de obra. Plazos que se cumplen.",
    cta: "Entrar",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=75",
    alt: "Equipo en una obra de construcción con estructura y acero",
    accent: "bg-brand-500",
    accentText: "text-brand-400",
    wash: "bg-brand-950/20",
  },
] as const;

export default function LandingTriptych() {
  return (
    <main className="relative h-svh overflow-hidden bg-black text-white">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-4 md:px-8 md:py-7"
      >
        <span className="flex items-center gap-2">
          <Image
            src="/logos/riasis-grupo-icon.png"
            alt=""
            width={26}
            height={26}
            priority
            className="h-6 w-6 rounded-[7px] shadow-sm md:h-[26px] md:w-[26px]"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
            Riasis
          </span>
        </span>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
          Honduras
        </p>
      </motion.header>

      <div className="landing-triptych">
        {panels.map((panel, i) => (
          <Link
            key={panel.href}
            href={panel.href}
            className="landing-panel group outline-none focus-visible:z-20"
            aria-label={`${panel.kicker}: Riasis ${panel.title}`}
          >
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                {...(i === 0 ? { priority: true } : { loading: "eager" as const })}
                quality={80}
                sizes="(max-width: 767px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-105 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className={`absolute inset-0 ${panel.wash}`} />
              <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-t md:from-black/80 md:via-black/20 md:to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
              <div className="grain opacity-[0.12] mix-blend-overlay" />
            </motion.div>

            <span
              className={`absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 ${panel.accent} transition-transform duration-700 ease-out group-active:scale-x-100 group-hover:scale-x-100 group-focus-visible:scale-x-100 md:h-1`}
              aria-hidden
            />

            {i > 0 ? (
              <>
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/15 md:hidden"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-px bg-white/15 md:block"
                  aria-hidden
                />
              </>
            ) : null}

            <div className="relative z-10 flex h-full flex-row items-center gap-3 px-5 md:flex-col md:items-stretch md:justify-end md:px-8 md:pb-12 md:pt-24 lg:px-10 lg:pb-14">
              <p
                className={`shrink-0 font-display text-2xl leading-none tracking-tight opacity-25 md:mb-auto md:pt-1 md:text-7xl lg:text-8xl ${panel.accentText}`}
                aria-hidden
              >
                {panel.index}
              </p>

              <motion.div
                className="min-w-0 flex-1 md:flex-none"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.22 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${panel.accentText}`}
                >
                  {panel.kicker}
                </p>
                <h2
                  className="mt-1 truncate font-display text-3xl leading-[0.95] tracking-tight md:mt-2 md:overflow-visible md:text-4xl md:[font-size:clamp(2rem,12cqw,3.75rem)]"
                >
                  {panel.title}
                </h2>
                <p className="mt-4 hidden max-w-sm text-sm leading-relaxed text-white/78 transition duration-500 md:block md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
                  {panel.line}
                </p>
                <span className="mt-6 hidden items-center gap-2 text-sm font-semibold tracking-wide md:inline-flex">
                  {panel.cta}
                  <span
                    className={`inline-block transition-transform duration-500 group-hover:translate-x-1.5 ${panel.accentText}`}
                  >
                    →
                  </span>
                </span>
              </motion.div>

              <span
                aria-hidden
                className={`ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-base backdrop-blur-sm transition-transform duration-300 group-active:scale-90 md:hidden`}
              >
                <span className={panel.accentText}>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-center justify-between px-5 py-3 md:px-8 md:py-4"
      >
        <p className="text-[10px] text-white/50 md:text-[11px]">
          © {new Date().getFullYear()} Riasis
        </p>
        <a
          href={NEXUS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto text-[10px] text-white/50 transition hover:text-white/85 md:text-[11px]"
        >
          Powered by Nexus Global
        </a>
      </motion.footer>
    </main>
  );
}
