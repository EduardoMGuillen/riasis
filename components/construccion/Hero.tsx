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
    <section className="relative overflow-hidden bg-hero-mesh pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600"
          >
            Construcción y reformas integrales
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-5xl leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            <span className="block">Levantamos</span>
            <span className="mt-1 block bg-gradient-to-r from-brand-600 via-brand-500 to-amber-500 bg-clip-text text-transparent">
              proyectos que duran
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg text-slate-600"
          >
            Obra nueva, rehabilitación y ampliaciones con dirección de obra propia,
            materiales certificados y cumplimiento estricto de plazos y presupuesto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
            >
              Pedir presupuesto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-brand-400 hover:text-brand-700"
            >
              Ver servicios
            </a>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200/80 pt-10"
          >
            {metrics.map((m) => (
              <li key={m.label}>
                <p className="font-display text-3xl text-brand-600">{m.value}</p>
                <p className="mt-1 text-xs text-slate-500">{m.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5 sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={construccionImages.hero}
              alt="Obra en construcción — imagen de demostración"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm text-white/90">
              Foto de demostración (Unsplash). Sustituir en producción.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
