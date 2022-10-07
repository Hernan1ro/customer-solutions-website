/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  i18n: {
    locales: ["es-ES", "en-US"], // Lista de todos los locales a soportar
    defaultLocale: "es-ES", // Locale por defecto
  },
};

module.exports = nextConfig;
