/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.anggapersonalweb.vercel.app/api/email', // Sesuaikan dengan path Anda
      },
    ]
  },
}

module.exports = nextConfig
