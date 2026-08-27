"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1557597774-9d18259838ab?auto=format&fit=crop&w=900&q=80",
    title: "Cámaras y monitoreo",
    meta: "CCTV IP · referencia visual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=900&q=80",
    title: "Cableado estructurado",
    meta: "Cat6 / puntos de red · referencia visual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    title: "Racks y servidores",
    meta: "Organización de rack · referencia visual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=900&q=80",
    title: "Redes empresariales",
    meta: "Switching y Wi-Fi · referencia visual",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Proyectos
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Instalaciones que se pueden mantener.
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Maqueta de portafolio por categoría. Las fichas reales —cliente,
            ubicación, equipos y fotos— sustituyen estas imágenes de referencia.
          </p>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {gallery.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group overflow-hidden rounded-3xl bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — imagen de referencia`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.meta}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
