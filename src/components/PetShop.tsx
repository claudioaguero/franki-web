import { site, wa } from "@/lib/site";
import Reveal from "./Reveal";
import { IconArrow, IconBag, IconPaw, IconPin } from "./icons";

const categorias = [
  { title: "Alimentos premium", desc: "Balanceados y dietas recomendadas por el veterinario." },
  { title: "Arena sanitaria", desc: "Para gatos, siempre en stock." },
  { title: "Snacks & premios", desc: "Naturales, para premiar sin culpa." },
  { title: "Accesorios", desc: "Correas, camas, juguetes y más." },
];

export default function PetShop() {
  return (
    <section id="petshop" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Texto */}
        <Reveal className="lg:sticky lg:top-28">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            Pet shop
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Lo que recomendamos, no solo lo que vendemos.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Cada producto de nuestra tienda pasa por el criterio de nuestros
            veterinarios. Alimentos, arena, snacks y accesorios elegidos por
            quienes cuidan a tu mascota todos los días.
          </p>

          <div className="mt-7 rounded-2xl border-l-4 border-terracotta bg-cream-200 p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
              Nota
            </p>
            <p className="mt-1 font-serif text-lg italic text-forest">
              “La salud empieza por lo que tu mascota come, toca y duerme.”
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={wa("Hola Franki! Quiero consultar por productos del pet shop.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-cream transition hover:bg-forest-700"
            >
              Consultar por WhatsApp
            </a>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 font-semibold text-forest transition hover:text-terracotta"
            >
              <IconPin className="h-4 w-4" /> Cómo llegar
            </a>
          </div>
        </Reveal>

        {/* Categorías */}
        <div className="grid gap-4 sm:grid-cols-2">
          {categorias.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 2) * 90}
              className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-terracotta-100 text-terracotta-600">
                {i === 3 ? <IconPaw className="h-5 w-5" /> : <IconBag className="h-5 w-5" />}
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-forest">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-terracotta-600">
                Curaduría veterinaria <IconArrow className="h-3.5 w-3.5" />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
