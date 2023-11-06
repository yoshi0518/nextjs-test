/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reffect.co.jp',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
