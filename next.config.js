/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/metaverse',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/metaverse',
  },

  trailingSlash: true, // optional, improves static asset routing in some cases
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
