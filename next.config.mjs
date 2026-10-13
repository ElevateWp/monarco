/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/dental-implants/', destination: '/estruturas-metalicas/', permanent: true },
      { source: '/root-canal/', destination: '/telhados-coberturas/', permanent: true },
      { source: '/teeth-whitening/', destination: '/engenharia-montagem/', permanent: true },
      { source: '/dental-cleaning/', destination: '/fabricacao-metalica/', permanent: true },
      { source: '/braces/', destination: '/montagem-industrial/', permanent: true },
      { source: '/cosmetic-dentistry/', destination: '/reformas-manutencao/', permanent: true },
      { source: '/book-appointment/', destination: '/solicitar-orcamento/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
