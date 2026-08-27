"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/constants";
import { mailtoUrl, whatsappQuoteUrl, whatsappUrl } from "@/lib/contact";

const workTypes = [
  "Vivienda nueva o ampliación",
  "Remodelación",
  "Obra comercial",
  "Obra civil",
  "Estructura o cubiertas",
  "Acabados",
  "Mantenimiento",
  "Otro",
];

export default function CtaBand() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const contacto = String(data.get("contacto") || "").trim();
    const tipo = String(data.get("tipo") || "").trim();
    const ubicacion = String(data.get("ubicacion") || "").trim();
    const presupuesto = String(data.get("presupuesto") || "").trim();
    const inicio = String(data.get("inicio") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const lines = [
      `Hola, quiero cotizar un proyecto de Riasis Construcción.`,
      `Nombre: ${nombre}`,
      `Contacto: ${contacto}`,
      tipo ? `Tipo de obra: ${tipo}` : "",
      ubicacion ? `Ubicación: ${ubicacion}` : "",
      presupuesto ? `Presupuesto estimado: ${presupuesto}` : "",
      inicio ? `Inicio aproximado: ${inicio}` : "",
      mensaje ? `Detalle: ${mensaje}` : "",
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
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
            Completa el formulario y te abrimos WhatsApp con el detalle. Si
            encaja, coordinamos visita técnica.
          </p>

          <dl className="mt-10 space-y-5 text-sm md:text-base">
            <div>
              <dt className="text-white/50">Teléfono / WhatsApp</dt>
              <dd>
                <a
                  href={whatsappQuoteUrl("Riasis Construcción")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition hover:text-brand-400"
                >
                  {WHATSAPP_DISPLAY}
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
                Honduras · consultas a nivel nacional
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
              Gracias. Si WhatsApp no se abrió, escríbenos al {WHATSAPP_DISPLAY}.
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
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
                <label htmlFor="contacto" className="mb-1.5 block text-sm text-white/70">
                  Teléfono o correo
                </label>
                <input
                  id="contacto"
                  name="contacto"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Para responderte"
                />
              </div>
              <div>
                <label htmlFor="tipo" className="mb-1.5 block text-sm text-white/70">
                  Tipo de obra
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-brand-400"
                >
                  <option value="" disabled className="text-slate-800">
                    Selecciona
                  </option>
                  {workTypes.map((type) => (
                    <option key={type} value={type} className="text-slate-800">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ubicacion" className="mb-1.5 block text-sm text-white/70">
                  Ubicación
                </label>
                <input
                  id="ubicacion"
                  name="ubicacion"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Ciudad o barrio"
                />
              </div>
              <div>
                <label htmlFor="presupuesto" className="mb-1.5 block text-sm text-white/70">
                  Presupuesto estimado
                </label>
                <input
                  id="presupuesto"
                  name="presupuesto"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Opcional"
                />
              </div>
              <div>
                <label htmlFor="inicio" className="mb-1.5 block text-sm text-white/70">
                  Inicio aproximado
                </label>
                <input
                  id="inicio"
                  name="inicio"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Mes o trimestre"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm text-white/70">
                  Detalle
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-400"
                  placeholder="Área, estado actual y lo que necesitas"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 transition hover:bg-slate-100"
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
