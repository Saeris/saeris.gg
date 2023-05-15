// @ts-check
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
};

module.exports = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching
})(nextConfig);
