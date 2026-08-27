"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Consulta",
    body: "Nos cuentas el alcance, el predio y la fecha que tienes en mente. Sin compromiso.",
  },
  {
    title: "Visita",
    body: "Medimos, fotografiamos y vemos restricciones reales: acceso, vecinos, instalaciones.",
  },
  {
    title: "Diseño",
    body: "Propuesta de ejecución alineada al proyecto. Si hace falta plano o cálculo, se coordina aquí.",
  },
  {
    title: "Presupuesto",
    body: "Partidas desglosadas. Lo que no está en el documento no se inventa en obra.",
  },
  {
    title: "Ejecución",
    body: "Un responsable de proyecto, gremios coordinados y calendario compartido.",
  },
  {
    title: "Supervisión",
    body: "Visitas con informe fotográfico. Ajustes a tiempo, no al cierre.",
  },
  {
    title: "Entrega",
    body: "Recorrido final, pendientes cerrados y, si lo pides, mantenimiento posterior.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Proceso
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            De la consulta a la entrega
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Siete pasos que ya usamos en obra. El orden no cambia para parecer
            más sofisticado.
          </p>
        </motion.div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border-t border-slate-200 pt-5"
            >
              <p className="font-display text-2xl text-brand-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
