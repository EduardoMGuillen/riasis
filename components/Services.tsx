"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Diseño de paisajes",
    description:
      "Planos conceptuales y selección vegetal adaptada al clima hondureño, la topografía y el uso real del espacio.",
  },
  {
    num: "02",
    title: "Jardinería residencial",
    description:
      "Jardines frontales, patios y terrazas con composición, color y textura pensados para vivirlos todo el año.",
  },
  {
    num: "03",
    title: "Mantenimiento",
    description:
      "Programas de poda, fertilización y salud del césped para que el resultado se sostenga con el tiempo.",
  },
  {
    num: "04",
    title: "Riego e instalación",
    description:
      "Sistemas eficientes, trasplante, hardscape ligero y ejecución limpia de principio a fin.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="leaf-wash relative overflow-hidden py-24 md:py-32">
      <div className="grain" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Servicios
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-rv-ink text-balance md:text-5xl">
            Del primer bosquejo al jardín que se mantiene vivo.
          </h2>
        </div>

        <ul className="divide-y divide-rv-mist/80 border-y border-rv-mist/80">
          {services.map((service, i) => (
            <motion.li
              key={service.num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group grid gap-4 py-8 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-10 md:py-10"
            >
              <span className="font-[family-name:var(--font-display)] text-sm text-rv-sage md:text-base">
                {service.num}
              </span>
              <h3 className="text-xl font-semibold text-rv-charcoal transition group-hover:text-rv-forest md:text-2xl">
                {service.title}
              </h3>
              <p className="text-rv-stone leading-relaxed md:text-[1.05rem]">
                {service.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
