"use client";

import { useState } from "react";
import Image from "next/image";
import { wa } from "@/lib/site";
import { IconWhatsApp } from "./icons";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#petshop", label: "Pet shop" },
  { href: "#hotel", label: "Hotel" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const cita = wa("Hola Franki! Quiero agendar una consulta para mi mascota.");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center" aria-label="Franki — inicio">
          <Image
            src="/logo-franki-1.png"
            alt="Franki Clínica Veterinaria"
            width={853}
            height={245}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-terracotta"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={cita}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-700 sm:inline-flex sm:items-center sm:gap-2"
          >
            <IconWhatsApp className="h-4 w-4" />
            Reservar cita
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-forest md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-4 bg-current transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="border-t border-line/70 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={cita}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream"
              >
                <IconWhatsApp className="h-4 w-4" /> Reservar cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
