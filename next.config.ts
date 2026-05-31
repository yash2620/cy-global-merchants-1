import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Prevent styling guidelines / minor warnings from completely blocking builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // Maintain full type safety checks during compile
  },
};

export default nextConfig;
