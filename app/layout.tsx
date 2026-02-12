import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SITE } from '../lib/seo'
import { PromotionBanner } from '@/components/promotion-banner'

export const metadataBase = new URL(SITE.url)

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  metadataBase,
  authors: [{ name: SITE.shortName }],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.shortName,
    images: [{ url: SITE.image, alt: SITE.name }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: [SITE.image],
  },
  icons: {
    icon: '/logo.ico',
    apple: '/logo.ico',
    other: [
      { rel: 'manifest', url: '/manifest.json' }
    ]
  }
}

const localBusinessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Store",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  logo: SITE.image,
  telephone: SITE.telephone,
  sameAs: [SITE.url],
  potentialAction: {
    "@type": "BuyAction",
    target: SITE.url
  }
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessSchema }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <PromotionBanner />
        <main className='selection:bg-primary selection:text-white'>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
