/** @type {import("next").NextConfig} */
const { apiUrl } = require("@repo/env-vars")

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/*",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/assets/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/assets/:path*",
        destination: `${apiUrl}/assets/:path*`,
      },
    ]
  },
}
