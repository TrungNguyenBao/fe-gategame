const path = require('path')

const rewrites = () => {
  return [
    {
      source: '/api/:path*',
      destination: 'http://52.77.251.127/api/:path*',
    },
  ]
}

module.exports = {
  rewrites,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['cdn.dribbble.com', 'cdn.gategame.io', 'gategame.io'],
  },
  experimental: { images: { layoutRaw: true } },
}
