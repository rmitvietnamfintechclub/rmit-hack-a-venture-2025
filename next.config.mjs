/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configures allowed hostnames for the next/image component
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2prwyp3rwi40.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;