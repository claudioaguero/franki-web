import { services, wa } from "@/lib/site";
import Reveal from "./Reveal";
import {
  IconBag,
  IconHome,
  IconScalpel,
  IconScissors,
  IconStethoscope,
  IconSyringe,
  IconArrow,
  IconTruck,
} from "./icons";

const icons = [
  IconStethoscope,
  IconSyringe,
  IconScalpel,
  IconScissors,
  IconHome,
  IconBag,
];

export default function Services() {
  return (
    <section id="servicios" className="bg-cream-200 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            Nuestros servicios
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Todo el cuidado, bajo un mismo techo.
          </h2>
          <p className="mt-4 text-lg text-muted">
            De la consulta al spa: cada servicio, pensado para el bienestar de
            tu mascota y tu tranquilidad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={s.n}
                delay={(i % 3) * 80}
                className="group flex h-full flex-col rounded-3xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-cream transition-colors group-hover:bg-terracotta">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-serif text-3xl font-medium text-line">
                    {s.n}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-forest">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-cream-200 px-3 py-1 text-xs font-medium text-forest/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={wa(`Hola Franki! Quiero consultar por ${s.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 transition hover:gap-2.5"
                >
                  Consultar <IconArrow className="h-4 w-4" />
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Delivery — servicio destacado */}
        <Reveal className="mt-5 flex flex-col gap-6 rounded-3xl bg-forest p-7 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-terracotta text-white">
              <IconTruck className="h-7 w-7" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-2xl font-semibold text-cream">
                  Delivery
                </h3>
                <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream/80">
                  Asunción y Gran Asunción
                </span>
              </div>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-cream/70">
                Te llevamos medicación, alimento y lo esencial hasta tu casa —
                ideal para urgencias o cuando no podés salir.
              </p>
            </div>
          </div>
          <a
            href={wa("Hola Franki! Quiero pedir un delivery.")}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-terracotta px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-terracotta-600"
          >
            Pedir delivery <IconArrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
