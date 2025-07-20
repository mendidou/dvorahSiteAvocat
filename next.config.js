/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr', 'en', 'es'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig