/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "stormsend1.djicdn.com",
      "store.dji.com",
      "images.pexels.com",
      "images.squarespace-cdn.com",
      "i.pinimg.com",
    ],
  },
};

export default nextConfig;
