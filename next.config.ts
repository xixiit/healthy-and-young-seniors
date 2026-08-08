import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    // Static export has no server to run the default Image Optimization
    // API against, so images must be served unoptimized.
    unoptimized: true,
  },
};

export default nextConfig;
