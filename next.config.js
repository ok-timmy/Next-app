/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      domains: ['imdb-api.com', 'm.media-amazon.com' ], 
      // domains: ['m.media-amazon.com'], 
    },
}

module.exports = nextConfig
