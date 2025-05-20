/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'localhost', 'api.anggagumilang.my.id']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.anggagumilang.my.id/api/email' // Sesuaikan dengan path Anda
      }
    ]
  }
}

module.exports = nextConfig
