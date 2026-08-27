"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Evaluación",
    body: "Levantamos el sitio: distancias, energía, puntos existentes y lo que realmente hay que resolver.",
  },
  {
    title: "Diseño",
    body: "Plano de red, cámaras o racks con criterio de servicio. Sin diagramas ornamentales.",
  },
  {
    title: "Cotización",
    body: "Alcance, materiales y mano de obra desglosados. El equipo se confirma aquí, no en la web.",
  },
  {
    title: "Implementación",
    body: "Instalación en campo con un responsable de obra. Orden de cableado y etiquetado incluidos.",
  },
  {
    title: "Pruebas",
    body: "Enlaces, grabación, accesos y cobertura Wi-Fi se verifican antes de dar por cerrado.",
  },
  {
    title: "Entrega",
    body: "Documentación, accesos y, si aplica, plan de mantenimiento. Quedas operando, no a medias.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Proceso
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Seis pasos. Sin teatro.
          </h2>
        </motion.div>

        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <p className="font-display text-sm font-semibold text-brand-blue">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
