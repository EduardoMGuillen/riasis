"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappQuoteUrl } from "@/lib/contact";

const services = [
  {
    num: "01",
    title: "Cámaras de seguridad",
    body: "CCTV IP, PoE, NVR y monitoreo remoto. Recorrido de cobertura según el predio, no un paquete cerrado de cámaras.",
    tags: ["CCTV IP", "PoE", "NVR", "Monitoreo remoto"],
    topic: "cámaras de seguridad (CCTV, IP, PoE, NVR)",
  },
  {
    num: "02",
    title: "Control de acceso",
    body: "Biometría, videoporteros y cerraduras electrónicas. Un solo criterio de acceso para personal, visitas y horarios.",
    tags: ["Biometría", "Videoporteros", "Cerraduras"],
    topic: "control de acceso y seguridad electrónica",
  },
  {
    num: "03",
    title: "Cableado estructurado",
    body: "Cat5e, Cat6 y Cat6A con plano de canalizaciones, etiquetado y certificación de enlaces cuando el alcance lo pide.",
    tags: ["Cat5e", "Cat6", "Cat6A", "Planificación"],
    topic: "cableado estructurado",
  },
  {
    num: "04",
    title: "Puntos de red",
    body: "Tomas para PCs, teléfonos IP, access points, cámaras e IoT. Cada punto queda identificable para el mantenimiento.",
    tags: ["PCs", "IP phones", "APs", "Cámaras", "IoT"],
    topic: "puntos de red",
  },
  {
    num: "05",
    title: "Racks y servidores",
    body: "Montaje, organización y centros de datos de escala operativa. El rack se entrega para servir, no para lucir.",
    tags: ["Racks", "Servidores", "Organización"],
    topic: "racks, servidores y centro de datos",
  },
  {
    num: "06",
    title: "Redes y mantenimiento",
    body: "Switching, ruteo, VLAN y Wi-Fi empresarial. Planes preventivos y correctivos. Las marcas se confirman en cotización.",
    tags: ["VLAN", "Wi-Fi", "Switches", "Planes mensuales"],
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
            Infraestructura IT, de punta a punta.
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Redes, seguridad electrónica y racks en sitio. El equipo se define
            en la cotización — no rellenamos marcas en la web.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col border-t border-black/10 pt-6"
            >
              <p className="font-display text-sm font-semibold text-brand-blue">
                {service.num}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappQuoteUrl("Riasis Tecnología", service.topic)}
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
          Organización de racks: referencia visual. Sustituir por fotos reales
          de instalaciones Riasis.
        </p>
      </div>
    </section>
  );
}
