"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gardenTypes } from "@/lib/verde-content";
import { whatsappVerdeQuoteUrl } from "@/lib/contact";

export default function Gardens() {
  return (
    <section id="jardines" className="scroll-mt-24 bg-rv-fog py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Jardines
          </p>
          <h2 className="font-display text-3xl text-rv-ink text-balance md:text-5xl">
            El mismo oficio, distinto carácter.
          </h2>
          <p className="mt-4 text-rv-stone md:text-lg">
            Residencia, empresa o local: el diseño parte del uso diario, no de
            una plantilla. Fotos de referencia hasta cargar las del equipo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gardenTypes.map((garden, i) => (
            <motion.a
              key={garden.slug}
              href={whatsappVerdeQuoteUrl({
                service: "Diseño y paisajismo",
                details: `Tipo de jardín: ${garden.name}`,
              })}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[5/4]"
            >
              <Image
                src={garden.image.src}
                alt={garden.image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rv-ink/75 via-rv-ink/15 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-4 text-lg font-semibold text-white md:p-5 md:text-xl">
                {garden.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
