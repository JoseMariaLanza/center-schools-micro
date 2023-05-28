/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
