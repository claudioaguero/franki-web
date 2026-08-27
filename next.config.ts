import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático → export a /out (deploy simple y robusto en cualquier host)
  output: "export",
  images: {
    // Con export no hay optimizador de Next; se sirven las URLs tal cual.
    unoptimized: true,
    remotePatterns: [
      // Banco de imágenes provisorio (a reemplazar por fotos reales de Franki)
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
