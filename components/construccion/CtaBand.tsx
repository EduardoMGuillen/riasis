"use client";

import { motion } from "framer-motion";
import { CONTACT_EMAIL } from "@/lib/constants";
import { mailtoUrl } from "@/lib/contact";

const tel = "tel:+50499990000";

export default function CtaBand() {
  return (
    <section id="contacto" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-cta-gradient px-6 py-12 text-center shadow-xl shadow-brand-900/20 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
          <h2 className="relative font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Cuéntanos tu proyecto
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Te respondemos en 24–48 h laborables con una primera valoración y, si encaja, visita
            técnica sin compromiso.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={tel}
              className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-md transition hover:bg-slate-50"
            >
              Llamar ahora
            </a>
            <a
              href={mailtoUrl()}
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="relative mt-8 text-sm text-white/75">
            Honduras · Francisco Morazán y alrededores · Lun–Vie 9:00–18:00
          </p>
        </motion.div>
      </div>
    </section>
  );
}
