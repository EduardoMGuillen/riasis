"use client";

import { motion } from "framer-motion";
import { installSteps } from "@/lib/verde-content";

export default function Process() {
  return (
    <section id="instalacion" className="scroll-mt-24 bg-rv-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Instalación
          </p>
          <h2 className="font-display text-3xl text-rv-ink text-balance md:text-5xl">
            Un proceso de obra, no una entrega de producto.
          </h2>
          <p className="mt-4 text-rv-stone md:text-lg">
            Así instalamos grama natural o artificial. El orden no cambia para
            “cerrar más rápido”.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-rv-mist bg-rv-mist sm:grid-cols-2 lg:grid-cols-3">
          {installSteps.map((step, i) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-rv-white p-6 md:p-8"
            >
              <p className="font-display text-2xl text-rv-moss">{step.num}</p>
              <h3 className="mt-3 text-lg font-semibold text-rv-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-rv-stone md:text-base">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
