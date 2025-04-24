import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["@" ] = path.resolve(__dirname);
    return config;
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode:false
};

export default nextConfig;