import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/relaxing-jazz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
