import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Miguel Angel - Full-Stack Developer',
  description: 'Portfolio of Miguel Angel, a passionate full-stack developer from Colombia specializing in JavaScript, React, Node.js, PHP, Laravel, Java, and MySQL.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.className} ${geistMono.className}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
