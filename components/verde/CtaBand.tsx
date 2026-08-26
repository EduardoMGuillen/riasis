"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/constants";
import { mailtoUrl, whatsappUrl, whatsappVerdeQuoteUrl } from "@/lib/contact";
import { quoteServices } from "@/lib/verde-content";

export default function CtaBand() {
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nombre") || "").trim();
    const phone = String(data.get("telefono") || "").trim();
    if (!name || !phone) {
      setError("Nombre y teléfono son necesarios para cotizar.");
      return;
    }
    setError("");
    window.open(
      whatsappVerdeQuoteUrl({
        name,
        phone,
        email: String(data.get("email") || "").trim(),
        location: String(data.get("ubicacion") || "").trim(),
        service: String(data.get("servicio") || "").trim(),
        area: String(data.get("area") || "").trim(),
        details: String(data.get("mensaje") || "").trim(),
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-rv-forest py-24 text-white md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-rv-moss/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-rv-leaf/25 blur-3xl"
        aria-hidden
      />
      <div className="grain opacity-[0.06] mix-blend-overlay" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-rv-glow">
            Cotización
          </p>
          <h2 className="font-display text-3xl text-balance md:text-5xl">
            Cuéntanos el terreno. Te respondemos por WhatsApp.
          </h2>
          <p className="mt-4 max-w-md text-white/75 md:text-lg">
            Visita técnica, instalación o plan mensual. Las fotos del espacio
            se mandan en el mismo chat: WhatsApp no deja adjuntarlas desde la
            web.
          </p>

          <dl className="mt-10 space-y-5 text-sm md:text-base">
            <div>
              <dt className="text-white/50">Teléfono / WhatsApp</dt>
              <dd>
                <a
                  href={whatsappUrl(
                    "Hola, quisiera cotizar un proyecto con Riasis Verde",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition hover:text-rv-glow"
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
                  className="font-medium text-white transition hover:text-rv-glow"
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
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="nombre" label="Nombre" placeholder="Tu nombre" required />
            <Field
              id="telefono"
              label="Teléfono"
              placeholder="+504 …"
              type="tel"
              required
            />
            <Field
              id="email"
              label="Correo"
              placeholder="opcional"
              type="email"
            />
            <Field
              id="ubicacion"
              label="Ubicación"
              placeholder="Colonia, ciudad"
            />
            <div>
              <label htmlFor="servicio" className="mb-1.5 block text-sm text-white/70">
                Tipo de servicio
              </label>
              <select
                id="servicio"
                name="servicio"
                className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none [color-scheme:dark] focus:border-rv-glow"
                defaultValue="Diseño y paisajismo"
              >
                {quoteServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <Field id="area" label="Área aproximada" placeholder="m², si los tienes" />
            <div className="sm:col-span-2">
              <label htmlFor="mensaje" className="mb-1.5 block text-sm text-white/70">
                Descripción
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-rv-glow"
                placeholder="Sol, sombra, qué hay hoy en el terreno y qué quieres lograr."
              />
            </div>
          </div>
          {error ? <p className="mt-3 text-sm text-rv-glow">{error}</p> : null}
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-rv-forest transition hover:bg-rv-fog"
          >
            Abrir cotización en WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-white/45">
            Se abre WhatsApp con los datos. Ahí puedes adjuntar fotos del terreno.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-white/70">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-rv-glow"
        placeholder={placeholder}
      />
    </div>
  );
}
