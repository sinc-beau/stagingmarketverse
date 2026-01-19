import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsor Marketing Events | Partner with Marketverse',
  description: 'Partner with Marketverse to reach marketing leaders driving growth and innovation. Explore sponsorship opportunities for exclusive forums and events.',
  keywords: 'marketing sponsorship, B2B event sponsorship, marketing partnership, sponsor marketing events, B2B marketing partnerships, event sponsorship opportunities',
  openGraph: {
    title: 'Sponsor Marketing Events | Partner with Marketverse',
    description: 'Partner with Marketverse to reach marketing leaders. Explore sponsorship opportunities for exclusive forums and events.',
    type: 'website',
    url: 'https://marketverse.org/sponsor-marketing-events',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/marketverse-sponsor-opengraph.png',
        secureUrl: 'https://marketverse.org/marketverse-sponsor-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Sponsor Marketing Events with Marketverse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sponsor Marketing Events | Partner with Marketverse',
    description: 'Partner with Marketverse to reach marketing leaders. Explore sponsorship opportunities for exclusive forums and events.',
    images: ['https://marketverse.org/marketverse-sponsor-opengraph.png'],
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
