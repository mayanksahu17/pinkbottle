/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['images.unsplash.com','aceternity.com'],
  },
};

export default nextConfig;