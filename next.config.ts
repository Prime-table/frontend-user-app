// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.js
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // ✅ allow Cloudinary
  },
}

module.exports = nextConfig
