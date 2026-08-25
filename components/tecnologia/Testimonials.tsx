"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "Pedí el iPhone por WhatsApp y en minutos ya tenía opciones de color y entrega. Super claro.",
    author: "Andrea M.",
  },
  {
    text: "Me asesoraron entre Galaxy Ultra y Pixel Pro sin presión. Se nota que conocen el producto.",
    author: "Carlos R.",
  },
  {
    text: "La web se ve premium y el trato por Instagram fue igual de pro. Volvería a comprar aquí.",
    author: "Sofía L.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Clientes
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Confianza que se nota.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-black/8 bg-white p-8 shadow-sm"
            >
              <span
                className="font-display text-6xl leading-none text-brand-blue/25"
                aria-hidden
              >
                “
              </span>
              <blockquote className="-mt-4 leading-relaxed text-foreground/90">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-black/8 pt-6">
                <p className="font-semibold text-foreground">{q.author}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
