/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configures allowed hostnames for the next/image component
  images: {
    remotePatterns: [
      {
        // Giữ lại cấu hình cũ của bạn cho CloudFront
        protocol: "https",
        hostname: "d2prwyp3rwi40.cloudfront.net",
      },
      {
        // Thêm cấu hình mới cho YouTube thumbnails
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;