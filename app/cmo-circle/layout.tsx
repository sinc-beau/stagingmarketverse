import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CMO Circle | Executive Marketing Leadership Community',
  description: 'Join an exclusive community of marketing leaders shaping the future of growth, demand generation, and go-to-market excellence. Apply for the Marketverse Executive Council.',
  keywords: 'CMO, chief marketing officer, marketing executives, executive council, marketing leadership, demand generation leadership, growth marketing',
  openGraph: {
    title: 'CMO Circle | Executive Marketing Leadership Community',
    description: 'An exclusive community of marketing leaders shaping the future of growth and demand generation.',
    type: 'website',
    url: 'https://marketverse.org/cmo-circle',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/marketverse-council-opengraph.png',
        secureUrl: 'https://marketverse.org/marketverse-council-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'CMO Circle - Executive Marketing Leadership',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CMO Circle | Executive Marketing Leadership Community',
    description: 'An exclusive community of marketing leaders shaping the future of growth and demand generation.',
    images: ['https://marketverse.org/marketverse-council-opengraph.png'],
  },
};

export default function CMOCircleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
