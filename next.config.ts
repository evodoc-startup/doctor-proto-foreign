import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Ensure ESLint errors don't fail the build on Vercel
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Ensure TypeScript errors fail the build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
