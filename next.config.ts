import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  experimental: {
    optimizeCss: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    disableStaticImages: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [25, 50, 75],
  },
  turbopack: {
    root: path.join(__dirname, '..'),
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      },
    },
  },

  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"]
  //   });

  //   return config;
  // }
};

export default nextConfig;
