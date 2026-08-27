import Image from "next/image";
import { wa, img } from "@/lib/site";
import {
  IconArrow,
  IconBed,
  IconCalendar,
  IconClock,
  IconPaw,
  IconStethoscope,
  IconWhatsApp,
} from "./icons";

const quick = [
  {
    icon: IconStethoscope,
    title: "Emergencia",
    desc: "Atención urgente 24/7",
    accent: true,
    msg: "Hola Franki! Tengo una emergencia con mi mascota.",
  },
  {
    icon: IconCalendar,
    title: "Consulta rutina",
    desc: "Chequeo y vacunación",
    msg: "Hola Franki! Quiero agendar una consulta de rutina.",
  },
  {
    icon: IconBed,
    title: "Reserva hotel",
    desc: "Estancia y guardería",
    msg: "Hola Franki! Quiero consultar por el hotel para mascotas.",
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[72px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[32rem] w-[32rem] rounded-full bg-terracotta-100/50 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-24">
        {/* Texto */}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Clínica veterinaria · Asunción
          </span>

          <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.05] text-forest sm:text-6xl">
            Cuidamos a tu mascota con ciencia y{" "}
            <span className="italic text-terracotta">cariño</span>.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Consultas, cirugía, estética, hotel y pet shop — todo en un solo
            lugar, en el corazón de Asunción.
          </p>

          {/* Accesos rápidos (cuadrados) */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {quick.map((q) => (
              <a
                key={q.title}
                href={wa(q.msg)}
                target="_blank"
                rel="noopener"
                className="group flex aspect-square flex-col justify-between rounded-2xl border border-line bg-card p-4 transition hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-md"
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full ${
                    q.accent
                      ? "bg-terracotta text-white"
                      : "bg-forest text-cream"
                  }`}
                >
                  <q.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-[0.95rem] font-semibold leading-tight text-forest">
                    {q.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">
                    {q.desc}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={wa("Hola Franki! Quiero agendar una consulta para mi mascota.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-white shadow-lg shadow-terracotta/25 transition hover:-translate-y-0.5 hover:bg-terracotta-600"
            >
              <IconWhatsApp className="h-5 w-5" />
              Agendar ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-1.5 font-semibold text-forest transition hover:text-terracotta"
            >
              Ver servicios <IconArrow className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
            <IconClock className="h-4 w-4 text-terracotta" />
            Abiertos de lunes a lunes, 8:00 a 20:00 hs
          </p>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10 ring-1 ring-line">
            <Image
              src={img.hero}
              alt="Familia con su mascota en Franki"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Badge: atención con cariño */}
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-line sm:-left-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-terracotta text-white">
              <IconPaw className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-forest">
                Atención con cariño
              </p>
              <p className="text-xs text-muted">En el corazón de Asunción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
