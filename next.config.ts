import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ocean-sounds",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
