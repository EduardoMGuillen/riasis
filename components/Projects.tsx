"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { demoImages } from "@/lib/demo-images";

const projects = [
  {
    image: demoImages.project1,
    title: "Residencia Las Lomas",
    place: "Tegucigalpa",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    image: demoImages.project2,
    title: "Patio tropical",
    place: "Valle de Ángeles",
    span: "",
  },
  {
    image: demoImages.project3,
    title: "Jardín ornamental",
    place: "Comayagua",
    span: "",
  },
  {
    image: demoImages.project4,
    title: "Sendero residencial",
    place: "San Pedro Sula",
    span: "md:col-span-2",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-rv-fog py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
              Proyectos
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-rv-ink md:text-5xl">
              Espacios que ya crecen.
            </h2>
          </div>
          <p className="max-w-sm text-rv-stone md:text-right">
            Selección visual de trabajos recientes. Las fotos de cliente
            reemplazarán estas imágenes de referencia.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-4 md:auto-rows-[240px] md:grid-cols-4 md:gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl ${project.span}`}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rv-ink/70 via-transparent to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-white/70">{project.place}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
