import Image from "next/image";
import { site, wa } from "@/lib/site";

const cols = [
  {
    title: "Servicios",
    links: [
      { label: "Consultas", href: "#servicios" },
      { label: "Cirugía", href: "#servicios" },
      { label: "Estética y baño", href: "#servicios" },
      { label: "Hotel y guardería", href: "#hotel" },
    ],
  },
  {
    title: "Clínica",
    links: [
      { label: "Pet shop", href: "#petshop" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-2xl bg-cream px-4 py-3">
              <Image
                src="/logo-franki-2.png"
                alt="Franki Clínica Veterinaria"
                width={506}
                height={503}
                className="h-16 w-auto"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Clínica veterinaria en Asunción. Cuidamos a tu mascota con ciencia
              y cariño.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm transition hover:text-terracotta">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={wa("Hola Franki!")} target="_blank" rel="noopener" className="transition hover:text-terracotta">
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={site.maps} target="_blank" rel="noopener" className="transition hover:text-terracotta">
                  {site.address}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener" className="transition hover:text-terracotta">
                  Instagram: {site.instagramHandle}
                </a>
              </li>
              <li className="text-cream/50">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Franki Clínica Veterinaria. Todos los derechos reservados.</span>
          <a
            href="https://claudelino.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-semibold text-cream/80 transition hover:text-terracotta"
          >
            <Image src="/claudelino-icon.png" alt="Claudelino" width={18} height={18} />
            Hecho por Claudelino
          </a>
        </div>
      </div>
    </footer>
  );
}
