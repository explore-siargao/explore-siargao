/** @type {import("next").NextConfig} */
const { existsSync } = require("fs")
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
})

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}
