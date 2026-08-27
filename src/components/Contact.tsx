"use client";

import { useState } from "react";
import { site, wa } from "@/lib/site";
import {
  IconClock,
  IconInstagram,
  IconPin,
  IconWhatsApp,
  IconArrow,
} from "./icons";

const servicios = [
  "Consulta general",
  "Vacunación",
  "Cirugía",
  "Estética y baño",
  "Hotel y guardería",
  "Pet shop",
  "Urgencia",
];

const infoItems = [
  { icon: IconPin, label: "Visitanos", value: site.address, href: site.maps },
  { icon: IconWhatsApp, label: "Llamanos / escribinos", value: site.whatsappDisplay, href: wa("Hola Franki!") },
  { icon: IconInstagram, label: "Seguinos", value: site.instagramHandle, href: site.instagram },
  { icon: IconClock, label: "Horario", value: site.hours },
];

export default function Contact() {
  const [f, setF] = useState({
    nombre: "",
    telefono: "",
    mascota: "",
    servicio: servicios[0],
    mensaje: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hola Franki! Soy ${f.nombre || "—"}.` +
      ` Quiero consultar por: ${f.servicio}.` +
      (f.mascota ? ` Mi mascota: ${f.mascota}.` : "") +
      (f.mensaje ? ` ${f.mensaje}` : "") +
      (f.telefono ? ` (Tel: ${f.telefono})` : "");
    window.open(wa(msg), "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-line bg-cream/60 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-terracotta focus:bg-white";
  const lbl =
    "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted";

  return (
    <section id="contacto" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
              Hablemos
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Reservá un momento de cuidado.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Contanos qué necesitás y te respondemos por WhatsApp. Para
              urgencias, escribinos directamente.
            </p>

            <ul className="mt-8 space-y-3">
              {infoItems.map((it) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-terracotta-100 text-terracotta-600">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        {it.label}
                      </span>
                      <span className="block font-medium text-forest">
                        {it.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={it.label}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition hover:border-terracotta/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div
              id="ubicacion"
              className="mt-6 scroll-mt-28 overflow-hidden rounded-2xl border border-line shadow-sm"
            >
              <iframe
                src={site.mapsEmbed}
                title="Ubicación de Franki Clínica Veterinaria"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="rounded-3xl border border-line bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={lbl}>Tu nombre</label>
                <input
                  className={field}
                  value={f.nombre}
                  onChange={(e) => setF({ ...f, nombre: e.target.value })}
                  placeholder="Nombre y apellido"
                />
              </div>
              <div>
                <label className={lbl}>Teléfono</label>
                <input
                  className={field}
                  value={f.telefono}
                  onChange={(e) => setF({ ...f, telefono: e.target.value })}
                  placeholder="09xx xxx xxx"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className={lbl}>Nombre de tu mascota</label>
              <input
                className={field}
                value={f.mascota}
                onChange={(e) => setF({ ...f, mascota: e.target.value })}
                placeholder="¿Cómo se llama?"
              />
            </div>
            <div className="mt-4">
              <label className={lbl}>Servicio de interés</label>
              <select
                className={field}
                value={f.servicio}
                onChange={(e) => setF({ ...f, servicio: e.target.value })}
              >
                {servicios.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className={lbl}>Mensaje</label>
              <textarea
                rows={4}
                className={field + " resize-none"}
                value={f.mensaje}
                onChange={(e) => setF({ ...f, mensaje: e.target.value })}
                placeholder="Contanos brevemente qué necesitás"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-cream transition hover:bg-forest-700"
            >
              Enviar por WhatsApp <IconArrow className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              Se abre WhatsApp con tu mensaje listo para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
