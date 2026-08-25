"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Entendieron el terreno desde el primer recorrido. El jardín no parece impuesto: parece que siempre estuvo ahí.",
    author: "María Fernanda C.",
    role: "Residencia en Tegucigalpa",
  },
  {
    quote:
      "Puntuales, ordenados y con buen criterio de plantas. El mantenimiento mensual nos quitó un dolor de cabeza.",
    author: "Andrés R.",
    role: "Comercio en SPS",
  },
  {
    quote:
      "Pasamos de un patio seco a un espacio donde la familia se junta. Se nota que hay oficio detrás.",
    author: "Karla M.",
    role: "Casa en Comayagua",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-rv-fog py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Clientes
          </p>
          <h2 className="font-display text-3xl text-rv-ink md:text-5xl">
            Voces de quienes ya caminan su jardín.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-rv-mist bg-rv-white p-8 shadow-sm"
            >
              <span
                className="font-display text-6xl leading-none text-rv-sage/40"
                aria-hidden
              >
                “
              </span>
              <blockquote className="-mt-4 leading-relaxed text-rv-charcoal">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-rv-mist pt-6">
                <p className="font-semibold text-rv-forest">{item.author}</p>
                <p className="mt-1 text-sm text-rv-stone">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
