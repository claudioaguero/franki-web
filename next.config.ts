import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático → export a /out (deploy simple y robusto en cualquier host)
  output: "export",
  images: {
    // Export estático: sin optimizador en runtime. Las fotos ya vienen optimizadas en /public/img.
    unoptimized: true,
  },
};

export default nextConfig;
