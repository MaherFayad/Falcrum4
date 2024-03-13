/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
      },
    output: 'export',  
    trailingSlash: true,
    images: {
      unoptimized: true
    }
}

module.exports = nextConfig
