/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Cambia 'tu-repositorio' por el nombre de tu repositorio en GitHub
  // Si tu repo es: github.com/AngelmarkX/portfolio -> basePath: '/portfolio'
  // Si usas un dominio personalizado o es username.github.io, deja basePath vacío
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

export default nextConfig
