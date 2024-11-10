/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const path = require('path');

module.exports = {
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@fonts': path.resolve(__dirname, 'path-to-your-fonts-folder'),
    };
    return config;
  },
};

