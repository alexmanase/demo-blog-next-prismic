/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["images.prismic.io"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
