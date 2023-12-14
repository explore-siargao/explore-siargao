/** @type {import("next").NextConfig} */
const { existsSync } = require("fs")
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
})

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
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    API_AUTH_URL: process.env.API_AUTH_URL,
    API_MOCK_URL: process.env.API_MOCK_URL,
    WEB_URL: process.env.WEB_URL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    RECAPTCHA_KEY_SECRET: process.env.RECAPTCHA_KEY_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET_ID: process.env.GOOGLE_SECRET_ID,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_SECRET_ID: process.env.FACEBOOK_SECRET_ID,
  },
}
