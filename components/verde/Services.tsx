"use client";

import { motion } from "framer-motion";
import { extraServices, services } from "@/lib/verde-content";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="leaf-wash relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="grain" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Servicios
          </p>
          <h2 className="font-display text-3xl text-rv-ink text-balance md:text-5xl">
            Del primer bosquejo al jardín que se mantiene vivo.
          </h2>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service) => (
            <motion.li
              key={service.num}
              variants={item}
              className="group rounded-2xl border border-rv-mist bg-rv-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:border-rv-moss/40 hover:shadow-md md:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rv-moss/15 font-display text-lg text-rv-forest">
                {service.num}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-rv-charcoal transition group-hover:text-rv-forest md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-rv-stone md:text-[1.05rem]">
                {service.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-rv-stone md:text-base">
          También hacemos{" "}
          {extraServices.map((name, i) => (
            <span key={name}>
              {i > 0 ? (i === extraServices.length - 1 ? " y " : ", ") : null}
              <span className="text-rv-charcoal">{name.toLowerCase()}</span>
            </span>
          ))}
          . Si no está en la lista, se evalúa en visita.
        </p>
      </div>
    </section>
  );
}
