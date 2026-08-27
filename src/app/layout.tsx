import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frankiveterinaria.com.py"),
  title: "Franki · Clínica Veterinaria en Asunción",
  description:
    "Clínica veterinaria en Asunción: consultas, vacunación, cirugía, estética, hotel y pet shop. Atención con ciencia y cariño, de lunes a lunes de 8 a 20 hs.",
  icons: { icon: "/logo-franki-2.png", apple: "/logo-franki-2.png" },
  openGraph: {
    title: "Franki · Clínica Veterinaria en Asunción",
    description:
      "Atención médica responsable para tu mascota: consultas, cirugía, estética, hotel y pet shop. Lunes a lunes de 8 a 20 hs.",
    type: "website",
    locale: "es_PY",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F6F1",
  // El sitio es de esquema claro: evita que Chrome (Android) lo "oscurezca" a la fuerza
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
