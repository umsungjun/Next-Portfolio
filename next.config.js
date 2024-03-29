/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
      "www.notion.so",
    ],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
};

module.exports = nextConfig;
