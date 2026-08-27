"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappQuoteUrl } from "@/lib/contact";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Infraestructura de red y racks — imagen de referencia"
          fill
          priority
          quality={95}
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 md:justify-center md:px-8 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Riasis <span className="text-brand-blue">Tecnología</span>
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Cámaras, redes y racks.
            <span className="block text-brand-blue">Instalados para operar.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/75 md:text-lg">
            Infraestructura IT, cableado estructurado y seguridad electrónica.
            Se diseña en sitio, se cotiza con alcance claro y se entrega
            documentado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#servicios"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Cotizar
            </a>
            <a
              href={whatsappQuoteUrl("Riasis Tecnología")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/35 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
