/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:8000/api",
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
