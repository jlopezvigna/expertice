/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/expertice" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/expertice" : "/",
};

module.exports = nextConfig;
