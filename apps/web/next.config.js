/** @type {import("next").NextConfig} */
const { existsSync } = require("fs")
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
})

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `${process.env.API_URL}/api/:path*`,
        basePath: false,
      },
    ]
  },
  env: {
    API_URL: process.env.API_URL,
  },
}
