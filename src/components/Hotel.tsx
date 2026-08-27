import Image from "next/image";
import { wa, img } from "@/lib/site";
import Reveal from "./Reveal";
import { IconArrow, IconClock, IconHome, IconPaw } from "./icons";

const features = [
  { icon: IconHome, title: "Espacios luminosos", desc: "Descanso cómodo, limpio y seguro." },
  { icon: IconPaw, title: "Juego y paseos", desc: "Actividad diaria y compañía constante." },
  { icon: IconClock, title: "Guardería diurna", desc: "Por el día o por varias noches." },
];

export default function Hotel() {
  return (
    <section id="hotel" className="bg-cream-200 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Imagen */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10 ring-1 ring-line">
            <Image
              src={img.hotel}
              alt="Mascotas jugando en el hotel de Franki"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal className="order-1 lg:order-2">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            Hotel y guardería
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Un hogar lejos de casa, mientras viajás.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Tu mascota descansa cómoda y cuidada cuando vos no podés estar. Un
            equipo que la acompaña, la hace jugar y está atento a su bienestar
            todo el día.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-terracotta-600 ring-1 ring-line">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-forest">
                    {f.title}
                  </p>
                  <p className="text-sm text-muted">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={wa("Hola Franki! Quiero reservar el hotel/guardería para mi mascota.")}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-white shadow-lg shadow-terracotta/25 transition hover:-translate-y-0.5 hover:bg-terracotta-600"
          >
            Reservar estancia <IconArrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
