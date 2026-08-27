"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { construccionImages } from "@/lib/construccion-images";

const gallery = [
  {
    image: construccionImages.projects.vivienda,
    title: "Vivienda unifamiliar",
    meta: "Francisco Morazán · referencia visual",
  },
  {
    image: construccionImages.projects.comercial,
    title: "Local comercial",
    meta: "San Pedro Sula · referencia visual",
  },
  {
    image: construccionImages.projects.acabados,
    title: "Acabados interiores",
    meta: "Remodelación · referencia visual",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Proyectos
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Obra que se ve, no un catálogo ajeno
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Maqueta de portafolio. Las fichas reales —ubicación, alcance, duración
            y fotos del cliente— sustituyen estas imágenes de referencia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid md:grid-cols-2">
            <figure className="relative aspect-[4/3]">
              <Image
                src={construccionImages.beforeAfter.before}
                alt="Interior en obra — imagen de referencia"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                Antes
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/3]">
              <Image
                src={construccionImages.beforeAfter.after}
                alt="Interior terminado — imagen de referencia"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                Después
              </figcaption>
            </figure>
          </div>
          <div className="border-t border-slate-100 px-6 py-5 sm:px-8">
            <p className="font-display text-2xl text-slate-900">Remodelación interior</p>
            <p className="mt-1 text-sm text-slate-500">
              Formato de ficha: cliente · ubicación · área · duración. Completar
              con un trabajo real de Riasis.
            </p>
          </div>
        </motion.div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {gallery.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — imagen de referencia`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
