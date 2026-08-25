"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text:
      "Reforma integral de oficinas en ocho semanas, con mínimo impacto en nuestra operación. Comunicación impecable.",
    author: "Laura Méndez",
    role: "Directora de operaciones, Logística Norte",
  },
  {
    text:
      "La vivienda unifamiliar quedó tal como en el proyecto 3D. Presupuesto cerrado y sin extras no acordados.",
    author: "Javier Ortega",
    role: "Particular, urbanización El Robledal",
  },
  {
    text:
      "Nos ayudaron con la ampliación del almacén y la nueva cubierta. Cumplieron plazo y normativa industrial.",
    author: "Carmen Ríos",
    role: "Responsable de instalaciones, Metalúrgicas Ríos",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Lo que dicen quienes ya confiaron en nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Referencias reales sustituyen estas citas de ejemplo cuando publiques el sitio.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span
                className="font-display text-6xl leading-none text-brand-200"
                aria-hidden
              >
                “
              </span>
              <blockquote className="-mt-4 text-slate-700">{q.text}</blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-6">
                <p className="font-semibold text-slate-900">{q.author}</p>
                <p className="mt-1 text-sm text-slate-500">{q.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
