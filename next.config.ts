import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The app is local-first and stores all data in the browser (IndexedDB +
  // localStorage). It needs no server functions or database, so we deploy it
  // as a fully static export that Vercel serves from the CDN.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;