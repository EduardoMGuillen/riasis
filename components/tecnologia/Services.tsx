"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappQuoteUrl } from "@/lib/contact";

const pillars = [
  {
    num: "01",
    title: "Seguridad electrónica",
    body: "Cámaras IP y PoE, NVR, monitoreo remoto, control de acceso, biometría y videoporteros. El diseño sale del predio, no de un paquete cerrado.",
    tags: ["CCTV IP", "PoE", "NVR", "Monitoreo remoto", "Biometría", "Videoporteros"],
    topic: "seguridad electrónica (cámaras y control de acceso)",
  },
  {
    num: "02",
    title: "Cableado, racks y servidores",
    body: "Cableado estructurado Cat5e / Cat6 / Cat6A, puntos de red para PCs, teléfonos IP, APs, cámaras e IoT, y organización de racks lista para servicio.",
    tags: ["Cat5e / 6 / 6A", "Puntos de red", "Racks", "Servidores"],
    topic: "cableado estructurado y organización de racks",
  },
  {
    num: "03",
    title: "Redes y mantenimiento",
    body: "Switching, ruteo, VLAN y Wi-Fi empresarial. Mantenimiento preventivo y correctivo para que la red no dependa de visitas de emergencia.",
    tags: ["VLAN", "Wi-Fi empresarial", "Switches", "Planes mensuales"],
    topic: "redes empresariales y mantenimiento IT",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Servicios
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Infraestructura que se instala y se sostiene.
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Además del catálogo, ejecutamos redes y seguridad electrónica en
            sitio. El equipo se define en la cotización — no rellenamos marcas.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col border-t border-black/10 pt-6"
            >
              <p className="font-display text-sm font-semibold text-brand-blue">
                {pillar.num}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {pillar.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappQuoteUrl("Riasis Tecnología", pillar.topic)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-semibold text-brand-blue transition hover:text-brand-blue-dark"
              >
                Cotizar este servicio
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-16 grid overflow-hidden rounded-3xl bg-surface md:grid-cols-2"
        >
          <figure className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
              alt="Rack con cableado por organizar — imagen de referencia"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              Antes
            </figcaption>
          </figure>
          <figure className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1400&q=80"
              alt="Centro de datos organizado — imagen de referencia"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-brand-blue px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              Después
            </figcaption>
          </figure>
        </motion.div>
        <p className="mt-4 text-xs text-muted">
          Referencia visual de organización de racks. Sustituir por fotos reales
          de instalaciones Riasis.
        </p>
      </div>
    </section>
  );
}
