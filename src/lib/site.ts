// Datos reales de Franki + helpers. Cambiar acá y se actualiza todo el sitio.

export const WHATSAPP = "595982297132";

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const site = {
  name: "Franki",
  tagline: "Clínica Veterinaria",
  whatsappDisplay: "+595 982 297132",
  whatsapp: WHATSAPP,
  address: "Julio Correa y Molas López, Asunción",
  maps: "https://www.google.com/maps?q=-25.2740725,-57.5667208",
  mapsEmbed:
    "https://maps.google.com/maps?q=-25.2740725,-57.5667208&z=16&output=embed",
  instagram: "https://www.instagram.com/franki_veterinaria/",
  instagramHandle: "@franki_veterinaria",
  hours: "Lunes a lunes · 8:00 a 20:00 hs",
};

// Banco de imágenes provisorio (Unsplash) — reemplazar por fotos reales de Franki.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export const img = {
  hero: u("photo-1654895716780-b4664497420d", 1400),
  consulta: u("photo-1644675272883-0c4d582528d8", 900),
  nosotros: u("photo-1700665537604-412e89a285c3", 1200),
  gato: u("photo-1579452113472-2f2a764188ac", 900),
  hotel: u("photo-1548199973-03cce0bbc87b", 1200),
  estetica: u("photo-1588943211346-0908a1fb0b01", 900),
  perro: u("photo-1561037404-61cd46aa615b", 900),
};

export type Service = {
  n: string;
  title: string;
  desc: string;
  tags: string[];
};

export const services: Service[] = [
  {
    n: "01",
    title: "Consultas",
    desc: "Chequeos generales y diagnóstico con tiempo real para escuchar a tu mascota y a vos.",
    tags: ["Medicina general", "Diagnóstico"],
  },
  {
    n: "02",
    title: "Vacunación",
    desc: "Planes de vacunas y desparasitación para proteger cada etapa de su vida.",
    tags: ["Plan sanitario", "Refuerzos"],
  },
  {
    n: "03",
    title: "Cirugía",
    desc: "Procedimientos quirúrgicos y castraciones en un quirófano equipado y seguro.",
    tags: ["Cirugía general", "Esterilización"],
  },
  {
    n: "04",
    title: "Estética y baño",
    desc: "Baño, corte y cuidado del pelaje con productos de calidad. Sale feliz y radiante.",
    tags: ["Baño", "Corte", "Spa"],
  },
  {
    n: "05",
    title: "Hotel y guardería",
    desc: "Un hogar lejos de casa mientras viajás: descanso, juego y compañía constante.",
    tags: ["Hospedaje", "Guardería"],
  },
  {
    n: "06",
    title: "Pet shop",
    desc: "Alimentos, arena, snacks y accesorios seleccionados por nuestros veterinarios.",
    tags: ["Alimentos", "Accesorios"],
  },
];

export const stats = [
  { num: "+2.000", label: "mascotas atendidas" },
  { num: "7/7", label: "abiertos todos los días" },
  { num: "12h", label: "de atención por día" },
  { num: "24/7", label: "consultas por WhatsApp" },
];
