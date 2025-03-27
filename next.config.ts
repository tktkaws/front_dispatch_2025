import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'], // Add your domains if needed
  },
};

export default nextConfig;
