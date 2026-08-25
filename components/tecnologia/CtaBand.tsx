"use client";

import { motion } from "framer-motion";
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";
import { instagramUrl, mailtoUrl, whatsappInterestUrl } from "@/lib/contact";

export default function CtaBand() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-brand-blue py-24 text-white md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-black/15 blur-3xl"
        aria-hidden
      />
      <div className="grain opacity-[0.06] mix-blend-overlay" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
            Contacto
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            ¿Listo para tu próximo teléfono?
          </h2>
          <p className="mt-4 max-w-md text-white/85 md:text-lg">
            Escríbenos y te respondemos con disponibilidad, colores y formas
            de pago. Sin carrito online — atención directa de Riasis
            Tecnología.
          </p>

          <dl className="mt-10 space-y-5 text-sm md:text-base">
            <div>
              <dt className="text-white/60">WhatsApp</dt>
              <dd className="font-medium text-white">{WHATSAPP_DISPLAY}</dd>
            </div>
            <div>
              <dt className="text-white/60">Instagram</dt>
              <dd className="font-medium text-white">{INSTAGRAM_HANDLE}</dd>
            </div>
            <div>
              <dt className="text-white/60">Correo</dt>
              <dd className="font-medium text-white">{CONTACT_EMAIL}</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center gap-3 rounded-3xl bg-white/10 p-6 backdrop-blur-sm md:p-8"
        >
          <p className="text-sm text-white/75">
            Elige tu canal favorito. Te respondemos al instante.
          </p>
          <a
            href={whatsappInterestUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-black/85"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-center text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <a
            href={mailtoUrl()}
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-center text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            {CONTACT_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
