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

// Fotos reales de Franki (optimizadas en /public/img).
export const img = {
  hero: "/img/hero.jpg", // vet con perrito
  nosotros: "/img/nosotros.jpg", // vet con labrador
  hotel: "/img/hotel.jpg", // hospedaje real
  analisis: "/img/analisis.jpg", // extra, disponible
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
