/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    loader: 'akamai',
    path: ''
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}
