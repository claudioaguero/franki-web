import Image from "next/image";
import { stats, img } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="nosotros" className="bg-forest py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta">
              Sobre Franki
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              No solo atendemos pacientes. Cuidamos vínculos.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cream/75">
              <p>
                Franki nació de una idea simple: la medicina veterinaria puede
                ser precisa como un laboratorio y cálida como un hogar.
              </p>
              <p>
                Sabemos que tu mascota es parte de tu familia. Por eso cada
                gesto —de la consulta a la estancia— está pensado para que ella,
                y vos, se sientan seguros.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-cream/15">
              <Image
                src={img.nosotros}
                alt="El cuidado cercano de Franki"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-cream/15 pt-12 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <p className="font-serif text-4xl font-semibold text-terracotta sm:text-5xl">
                {s.num}
              </p>
              <p className="mt-2 text-sm text-cream/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
