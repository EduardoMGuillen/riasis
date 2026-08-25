"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Originales y verificados",
    body: "Trabajamos modelos de alta gama con garantía y soporte claro al comprar.",
  },
  {
    title: "Asesoría personal",
    body: "Te guiamos por WhatsApp o Instagram para elegir almacenamiento, color y presupuesto.",
  },
  {
    title: "Sin fricción online",
    body: "La web es tu vitrina. Cierras la compra directo con el equipo de Riasis Tecnología.",
  },
  {
    title: "Stock de flagships",
    body: "iPhone 17, Galaxy Ultra, Pixel Pro y más referencias premium disponibles.",
  },
];

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

export default function WhyMarphone() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Por qué Riasis
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Compra premium, trato cercano.
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {points.map((point, i) => (
            <motion.li
              key={point.title}
              variants={item}
              className="group rounded-2xl border border-black/8 bg-surface p-6 shadow-sm transition hover:border-brand-blue/30 hover:shadow-md md:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 font-display text-lg font-semibold text-brand-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
