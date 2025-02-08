import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/brown-noise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
