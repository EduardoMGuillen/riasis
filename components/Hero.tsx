"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { demoImages } from "@/lib/demo-images";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={demoImages.hero.src}
            alt={demoImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-rv-ink/80 via-rv-ink/35 to-rv-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-rv-ink/50 via-transparent to-transparent" />
        <div className="grain" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-4 font-[family-name:var(--font-display)] text-3xl text-white md:text-5xl lg:text-6xl"
        >
          Riasis Verde
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="max-w-xl text-balance text-2xl font-light leading-snug text-white/95 md:max-w-2xl md:text-4xl md:leading-tight"
        >
          Paisajes que respiran con el clima y el carácter de Honduras.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-5 max-w-md text-base text-white/75 md:text-lg"
        >
          Diseño, instalación y mantenimiento de exteriores con mirada local y
          ejecución impecable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contacto"
            className="rounded-full bg-rv-moss px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-rv-leaf"
          >
            Hablar con el equipo
          </a>
          <a
            href="#proyectos"
            className="rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Ver proyectos
          </a>
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
