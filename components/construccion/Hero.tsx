"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { construccionImages } from "@/lib/construccion-images";

const metrics = [
  { value: "15+", label: "Años en el sector" },
  { value: "120+", label: "Proyectos entregados" },
  { value: "100%", label: "Garantía en acabados" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={construccionImages.hero}
            alt="Obra en construcción — imagen de demostración"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/45 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="grain" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-6 md:justify-center md:pb-24 md:pt-32 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-400"
        >
          Construcción y reformas integrales
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="max-w-2xl font-display text-4xl leading-[0.95] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Levantamos
          <span className="block text-brand-400">proyectos que duran.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-5 max-w-lg text-base text-white/80 md:text-lg"
        >
          Obra nueva, rehabilitación y ampliaciones con dirección de obra propia,
          materiales certificados y cumplimiento estricto de plazos y presupuesto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contacto"
            className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Pedir presupuesto
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {metrics.map((m) => (
            <li
              key={m.label}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
            >
              <p className="font-display text-2xl text-white">{m.value}</p>
              <p className="mt-0.5 text-xs text-white/65">{m.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/35 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
