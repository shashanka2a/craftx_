import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CraftX — Creative Studio',
  description: 'A creative studio built on stories, not statistics. Est. 2024 — San Francisco, CA',
  keywords: ['creative studio', 'design', 'editing', 'shooting', 'planning', 'San Francisco'],
  authors: [{ name: 'CraftX Creative Studio' }],
  creator: 'CraftX Creative Studio',
  publisher: 'CraftX Creative Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://craftx.studio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CraftX — Creative Studio',
    description: 'A creative studio built on stories, not statistics. Est. 2024 — San Francisco, CA',
    url: 'https://craftx.studio',
    siteName: 'CraftX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CraftX — Creative Studio',
    description: 'A creative studio built on stories, not statistics. Est. 2024 — San Francisco, CA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
        <style>{`
          :root {
            --font-cooper-black: 'Cooper Black', 'Rockwell Extra Bold', serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

