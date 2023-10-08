/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/p3MMVZD/**',
      },
      {
        protocol: 'https',
        hostname: 'www.m3mprojects.in',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
