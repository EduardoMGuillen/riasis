"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/constants";
import { mailtoUrl, whatsappQuoteUrl, whatsappUrl } from "@/lib/contact";

const serviceTypes = [
  "Cámaras de seguridad",
  "Control de acceso",
  "Cableado estructurado",
  "Puntos de red",
  "Racks y servidores",
  "Redes empresariales",
  "Mantenimiento IT",
  "Varios / por definir",
];

export default function CtaBand() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const contacto = String(data.get("contacto") || "").trim();
    const tipo = String(data.get("tipo") || "").trim();
    const predio = String(data.get("predio") || "").trim();
    const ubicacion = String(data.get("ubicacion") || "").trim();
    const alcance = String(data.get("alcance") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const lines = [
      `Hola, quiero cotizar un proyecto de Riasis Tecnología.`,
      `Nombre: ${nombre}`,
      `Contacto: ${contacto}`,
      tipo ? `Servicio: ${tipo}` : "",
      predio ? `Tipo de predio: ${predio}` : "",
      ubicacion ? `Ubicación: ${ubicacion}` : "",
      alcance ? `Alcance aproximado: ${alcance}` : "",
      mensaje ? `Detalle: ${mensaje}` : "",
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

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
            Cotiza la instalación, no un paquete genérico.
          </h2>
          <p className="mt-4 max-w-md text-white/85 md:text-lg">
            Completa el formulario y te abrimos WhatsApp con el detalle. Si
            encaja, coordinamos visita técnica.
          </p>

          <dl className="mt-10 space-y-5 text-sm md:text-base">
            <div>
              <dt className="text-white/60">WhatsApp</dt>
              <dd>
                <a
                  href={whatsappQuoteUrl("Riasis Tecnología")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition hover:text-white/80"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Correo</dt>
              <dd>
                <a href={mailtoUrl()} className="font-medium text-white transition hover:text-white/80">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Cobertura</dt>
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
                <label htmlFor="nombre" className="mb-1.5 block text-sm text-white/80">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="contacto" className="mb-1.5 block text-sm text-white/80">
                  Teléfono o correo
                </label>
                <input
                  id="contacto"
                  name="contacto"
                  required
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  placeholder="Para responderte"
                />
              </div>
              <div>
                <label htmlFor="tipo" className="mb-1.5 block text-sm text-white/80">
                  Servicio
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white"
                >
                  <option value="" disabled className="text-foreground">
                    Selecciona
                  </option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type} className="text-foreground">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="predio" className="mb-1.5 block text-sm text-white/80">
                  Tipo de predio
                </label>
                <input
                  id="predio"
                  name="predio"
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  placeholder="Oficina, casa, bodega…"
                />
              </div>
              <div>
                <label htmlFor="ubicacion" className="mb-1.5 block text-sm text-white/80">
                  Ubicación
                </label>
                <input
                  id="ubicacion"
                  name="ubicacion"
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  placeholder="Ciudad o barrio"
                />
              </div>
              <div>
                <label htmlFor="alcance" className="mb-1.5 block text-sm text-white/80">
                  Alcance aproximado
                </label>
                <input
                  id="alcance"
                  name="alcance"
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  placeholder="Cámaras, puntos de red, racks…"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm text-white/80">
                  Detalle
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  placeholder="Estado actual de la red y lo que necesitas"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-dark transition hover:bg-white/90"
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
