// @ts-check
const { withPlaiceholder } = require("@plaiceholder/next");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"]
  },
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  experimental: { images: { allowFutureImage: true } }
};

module.exports = withPlaiceholder(
  withPWA({
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV !== "production",
      runtimeCaching
    },
    ...nextConfig
  })
);
