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
    <section id="testimonios" className="bg-rv-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Clientes
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-rv-ink md:text-5xl">
            Voces de quienes ya caminan su jardín.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative border-t border-rv-mist pt-8"
            >
              <span
                className="absolute -top-3 left-0 font-[family-name:var(--font-display)] text-5xl leading-none text-rv-sage/60"
                aria-hidden
              >
                “
              </span>
              <p className="text-lg leading-relaxed text-rv-charcoal md:text-[1.15rem]">
                {item.quote}
              </p>
              <footer className="mt-6">
                <cite className="not-italic font-semibold text-rv-forest">
                  {item.author}
                </cite>
                <p className="text-sm text-rv-stone">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
