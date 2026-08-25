"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_EMAIL } from "@/lib/constants";
import { mailtoUrl } from "@/lib/contact";

export default function CtaBand() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 py-24 text-white md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"
        aria-hidden
      />
      <div className="grain opacity-[0.06] mix-blend-overlay" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
            Contacto
          </p>
          <h2 className="font-display text-3xl text-balance md:text-5xl">
            Cuéntanos tu proyecto de construcción.
          </h2>
          <p className="mt-4 max-w-md text-white/75 md:text-lg">
            Te respondemos en 24–48 h laborables con una primera valoración y,
            si encaja, visita técnica sin compromiso.
          </p>

          <dl className="mt-10 space-y-5 text-sm md:text-base">
            <div>
              <dt className="text-white/50">Teléfono</dt>
              <dd>
                <a
                  href="tel:+50499990000"
                  className="font-medium text-white transition hover:text-brand-400"
                >
                  +504 9999-0000
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Correo</dt>
              <dd>
                <a
                  href={mailtoUrl()}
                  className="font-medium text-white transition hover:text-brand-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Cobertura</dt>
              <dd className="font-medium text-white">
                Francisco Morazán y alrededores · consultas a nivel nacional
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm md:p-8"
        >
          {sent ? (
            <p className="py-10 text-center text-lg text-white">
              Gracias. Te contactaremos pronto para coordinar la visita.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm text-white/70">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                  Correo o teléfono
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Para responderte"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-1.5 block text-sm text-white/70">
                  Proyecto
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Tipo de obra, zona y lo que buscas..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 transition hover:bg-slate-100"
              >
                Enviar consulta
              </button>
              <p className="text-center text-xs text-white/45">
                Formulario de demostración — conectar a backend o servicio de
                correo cuando esté listo.
              </p>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
