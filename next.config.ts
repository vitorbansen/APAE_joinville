import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Mantém funcionando os links das notícias do site antigo (WordPress: /AAAA/MM/DD/slug/)
  async redirects() {
    return [
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/noticias/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
