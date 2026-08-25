"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const panels = [
  {
    href: "/verde",
    index: "01",
    kicker: "Paisaje",
    title: "Verde",
    line: "Jardines y paisajes que se viven con el clima de Honduras.",
    cta: "Entrar",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=3840&q=90",
    alt: "Patio tropical con piscina, palmeras y jardín residencial",
    titleClass: "font-[family-name:var(--font-fraunces)]",
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
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=3840&q=90",
    alt: "Smartphone de alta gama y audífonos sobre superficie de madera",
    titleClass: "font-[family-name:var(--font-space)] font-semibold tracking-tight",
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
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=3840&q=90",
    alt: "Equipo en una obra de construcción con estructura y acero",
    titleClass: "font-[family-name:var(--font-bebas)] tracking-wide",
    accent: "bg-brand-500",
    accentText: "text-brand-400",
    wash: "bg-brand-950/20",
  },
] as const;

export default function LandingTriptych() {
  return (
    <main className="relative bg-black text-white max-md:h-svh max-md:snap-y max-md:snap-mandatory max-md:overflow-y-auto">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-5 py-5 md:px-8 md:py-7"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
          Riasis
        </p>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
          Honduras
        </p>
      </motion.header>

      <div className="landing-triptych">
        {panels.map((panel, i) => (
          <Link
            key={panel.href}
            href={panel.href}
            className="landing-panel group max-md:snap-start outline-none focus-visible:z-20"
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
                priority
                quality={90}
                sizes="(max-width: 767px) 100vw, 80vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className={`absolute inset-0 ${panel.wash}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
              <div className="grain opacity-[0.12] mix-blend-overlay" />
            </motion.div>

            <span
              className={`absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 ${panel.accent} transition-transform duration-700 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 md:h-1`}
              aria-hidden
            />

            {i > 0 ? (
              <span
                className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-px bg-white/15 md:block"
                aria-hidden
              />
            ) : null}

            <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-10 pt-24 md:min-h-0 md:h-full md:px-8 md:pb-12 lg:px-10 lg:pb-14">
              <p
                className={`mb-auto pt-1 font-[family-name:var(--font-fraunces)] text-6xl leading-none opacity-20 md:text-7xl lg:text-8xl ${panel.accentText}`}
                aria-hidden
              >
                {panel.index}
              </p>

              <motion.div
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
                  className={`mt-2 text-4xl leading-[0.95] [font-size:clamp(2rem,12cqw,3.75rem)] ${panel.titleClass}`}
                >
                  {panel.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/78 opacity-100 transition duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
                  {panel.line}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
                  {panel.cta}
                  <span
                    className={`inline-block transition-transform duration-500 group-hover:translate-x-1.5 ${panel.accentText}`}
                  >
                    →
                  </span>
                </span>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
