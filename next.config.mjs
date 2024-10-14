/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/v2/resize:fill:320:214/*',
      },
    ],
  },
};

export default nextConfig;
