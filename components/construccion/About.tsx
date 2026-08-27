"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { construccionImages } from "@/lib/construccion-images";

const checks = [
  "Equipo técnico y de obra en plantilla",
  "Presupuestos desglosados sin letra pequeña",
  "Visitas periódicas con informe fotográfico",
  "Mantenimiento posterior si el cliente lo pide",
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5">
              <Image
                src={construccionImages.about}
                alt="Equipo en obra — imagen de demostración"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute -bottom-6 -right-2 max-w-[220px] rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:right-4"
            >
              <p className="font-display text-2xl text-brand-600">En sitio</p>
              <p className="mt-1 text-xs text-slate-600">
                Levantamiento y mediciones antes de cotizar. Nada de números de
                catálogo.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Por qué Riasis
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
              Obra seria, sin sorpresas
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Trabajamos con planificación realista y comunicación clara. Cada proyecto tiene un
              responsable asignado y un calendario compartido para que sepas en todo momento en qué
              fase estamos.
            </p>
            <ul className="mt-8 space-y-3">
              {checks.map((text) => (
                <li key={text} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#proceso"
              className="mt-10 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-700"
            >
              Conocer nuestro proceso
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
