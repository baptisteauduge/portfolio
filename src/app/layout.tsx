import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { JetBrains_Mono, Newsreader } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { seo, site } from '@/content/content';
import { personJsonLd } from './structured-data';
import './globals.css';

const serif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  // Arrows and bullets (→ ↗ ●) are not in the font, so they come from the
  // fallback. Plain monospace draws them as the design does; its metrics are
  // close enough to JetBrains Mono that no adjusted fallback is needed.
  adjustFontFallback: false,
  fallback: ['monospace'],
});

const ogImage = {
  url: '/og-image.png',
  type: 'image/png',
  width: 1200,
  height: 630,
  alt: seo.imageAlt,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: '/' },
  authors: [{ name: site.name }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: {
    type: 'profile',
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    url: '/',
    locale: 'en_US',
    images: [ogImage],
    firstName: site.firstName,
    lastName: site.lastName,
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f3ee',
  colorScheme: 'light',
  // Lets the phone contact bar sit above the home indicator (safe-area insets).
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
      <GoogleAnalytics gaId={site.gaId} />
    </html>
  );
}
