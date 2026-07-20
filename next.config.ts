import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // To silence turbopack root warnings
  // @ts-ignore
  turbopack: {
    root: __dirname,
  }
};

export default nextConfig;
