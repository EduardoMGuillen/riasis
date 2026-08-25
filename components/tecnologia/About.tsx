"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  "Modelos verificados con garantía real",
  "Asesoría honesta por WhatsApp o Instagram",
  "Coordinación clara de entrega y pago",
  "Soporte post-venta cuando lo necesitas",
];

export default function About() {
  return (
    <section id="nosotros" className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80"
              alt="Smartphones en vitrina"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 max-w-[14rem] rounded-2xl bg-brand-blue px-5 py-4 text-white shadow-lg md:-right-6 md:max-w-[16rem]">
            <p className="font-display text-3xl leading-none font-semibold">+500</p>
            <p className="mt-1 text-sm text-white/80">
              equipos entregados a clientes en Honduras
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Nosotros
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Tecnología con cara amigable.
          </h2>
          <p className="mt-5 text-white/70 md:text-lg">
            Riasis Tecnología es una tienda de smartphones de alta gama en
            Honduras. Te ayudamos a elegir el modelo correcto y cierras la
            compra por WhatsApp o Instagram — simple, directo y humano.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/85">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue"
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
