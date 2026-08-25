"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { demoImages } from "@/lib/demo-images";

const points = [
  "Criterio botánico adaptado a Honduras",
  "Coordinación clara con el cliente y proveedores",
  "Acabados limpios en bordes, caminos y plantaciones",
  "Seguimiento post-instalación cuando hace falta",
];

export default function About() {
  return (
    <section id="sobre" className="bg-rv-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            <Image
              src={demoImages.about.src}
              alt={demoImages.about.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 max-w-[14rem] rounded-2xl bg-rv-forest px-5 py-4 text-white shadow-lg md:-right-6 md:max-w-[16rem]">
            <p className="font-[family-name:var(--font-display)] text-3xl leading-none">
              +80
            </p>
            <p className="mt-1 text-sm text-white/75">
              espacios verdes entregados en residencias y comercios
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Sobre nosotros
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-rv-ink text-balance md:text-4xl">
            Trabajamos la tierra con oficio, no con fórmulas.
          </h2>
          <p className="mt-5 text-rv-stone leading-relaxed md:text-lg">
            Somos un equipo hondureño de landscaping y jardinería. Combinamos
            sensibilidad estética con disciplina de obra: escuchamos el sitio,
            proponemos con honestidad y ejecutamos con limpieza.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-rv-charcoal">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rv-moss/15 text-rv-forest"
                  aria-hidden
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
