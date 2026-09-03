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
    "Clínica veterinaria en Asunción: consultas, vacunación, cirugía, estética, hotel, pet shop y delivery. Atención con ciencia y cariño, de lunes a lunes de 8 a 20 hs.",
  keywords: [
    "veterinaria Asunción",
    "clínica veterinaria",
    "veterinaria Paraguay",
    "urgencias veterinarias Asunción",
    "hotel para mascotas",
    "pet shop Asunción",
    "vacunación mascotas",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/franki-icon.png", apple: "/apple-icon.png" },
  openGraph: {
    title: "Franki · Clínica Veterinaria en Asunción",
    description:
      "Atención médica responsable para tu mascota: consultas, cirugía, estética, hotel, pet shop y delivery. Lunes a lunes de 8 a 20 hs.",
    url: "/",
    siteName: "Franki Clínica Veterinaria",
    type: "website",
    locale: "es_PY",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Franki Clínica Veterinaria en Asunción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franki · Clínica Veterinaria en Asunción",
    description:
      "Atención médica responsable para tu mascota. Lunes a lunes de 8 a 20 hs.",
    images: ["/og-image.png"],
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
