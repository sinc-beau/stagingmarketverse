import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://marketverse.org'),
  title: 'Marketverse | Marketing Leaders Community',
  description: 'Access content, insights, and strategies from marketing leaders actively executing in Growth, Demand Gen, and Field Marketing. Join exclusive forums and events.',
  keywords: 'marketing leadership, demand generation, field marketing, growth marketing, B2B marketing, CMO community, marketing events, marketing insights',
  icons: {
    icon: '/MVfavicon.png',
  },
  openGraph: {
    title: 'Marketverse | Marketing Leaders Community',
    description: 'Access content, insights, and strategies from marketing leaders actively executing in Growth, Demand Gen, and Field Marketing.',
    type: 'website',
    url: 'https://marketverse.org',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/marketverse-main-opengraph.png',
        secureUrl: 'https://marketverse.org/marketverse-main-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Marketverse - Marketing Leaders Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketverse | Marketing Leaders Community',
    description: 'Access content, insights, and strategies from marketing leaders actively executing in Growth, Demand Gen, and Field Marketing.',
    images: ['https://marketverse.org/marketverse-main-opengraph.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
