"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { grasses } from "@/lib/verde-content";
import { whatsappVerdeQuoteUrl } from "@/lib/contact";

export default function Grasses() {
  return (
    <section id="gramas" className="scroll-mt-24 bg-rv-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-leaf">
            Gramas
          </p>
          <h2 className="font-display text-3xl text-rv-ink text-balance md:text-5xl">
            La variedad se elige en el terreno, no en un catálogo.
          </h2>
          <p className="mt-4 text-rv-stone md:text-lg">
            Estas son las que más instalamos. Riego, rendimiento y precio se
            confirman en visita; no publicamos fichas técnicas inventadas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grasses.map((grass, i) => (
            <motion.article
              key={grass.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-rv-mist bg-rv-fog/40"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={grass.image.src}
                  alt={grass.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-2xl text-rv-ink">{grass.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-rv-stone">
                  {grass.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {grass.traits.map((trait) => (
                    <li
                      key={trait}
                      className="rounded-full bg-rv-white px-2.5 py-1 text-[11px] font-medium tracking-wide text-rv-forest"
                    >
                      {trait}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-rv-charcoal">
                  <span className="font-medium">Usos. </span>
                  {grass.uses}
                </p>
                <p className="mt-2 text-sm text-rv-stone">
                  <span className="font-medium text-rv-charcoal">Mantenimiento. </span>
                  {grass.care}
                </p>
                <a
                  href={whatsappVerdeQuoteUrl({
                    service: "Instalación de grama",
                    details: `Variedad de interés: ${grass.name}`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex self-start rounded-full bg-rv-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rv-leaf"
                >
                  Solicitar cotización
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
