import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketverse Forum 2026 | National Field, Growth, and Demand Gen Leaders Forum',
  description: 'Join 70+ Growth, Demand Gen, and Field Marketing Leaders October 11-13, 2026 at M Resort, Las Vegas for strategic insights, tactical sessions, and executive networking.',
  keywords: 'marketing forum, demand generation, field marketing, growth marketing, Las Vegas, marketing leadership, B2B marketing events, marketing conference',
  openGraph: {
    title: 'Marketverse Forum 2026 | National Field, Growth, and Demand Gen Leaders Forum',
    description: 'Join 70+ marketing leaders October 11-13, 2026 in Las Vegas for the premier marketing leadership forum.',
    type: 'website',
    url: 'https://marketverse.org/marketing-forum-las-vegas-2026',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/marketverse-forum-opengraph.png',
        secureUrl: 'https://marketverse.org/marketverse-forum-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Marketverse Forum 2026 - Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketverse Forum 2026 | National Field, Growth, and Demand Gen Leaders Forum',
    description: 'Join 70+ marketing leaders October 11-13, 2026 in Las Vegas for the premier marketing leadership forum.',
    images: ['https://marketverse.org/marketverse-forum-opengraph.png'],
  },
};

export default function VegasForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
