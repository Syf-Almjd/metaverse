/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/metaverse',
  trailingSlash: true, // optional, improves static asset routing in some cases

  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
