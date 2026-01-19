import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Field Intelligence | Marketing Leader Interviews & Insights',
  description: 'Unfiltered insights from marketing leaders actively executing in Growth, Demand Gen, and Field Marketing. Interviews with practitioners sharing real-world strategies and tactics.',
  keywords: 'marketing insights, marketing interviews, demand generation strategies, field marketing tactics, growth marketing, marketing leadership, practitioner insights',
  openGraph: {
    title: 'Field Intelligence | Marketing Leader Interviews & Insights',
    description: 'Unfiltered insights from marketing leaders who are doing the work. Real strategies and tactics from practitioners.',
    type: 'website',
    url: 'https://marketverse.org/field-intelligence',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/marketverse-archives-opengraph.png',
        secureUrl: 'https://marketverse.org/marketverse-archives-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Field Intelligence - Marketing Leader Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Field Intelligence | Marketing Leader Interviews & Insights',
    description: 'Unfiltered insights from marketing leaders who are doing the work. Real strategies and tactics from practitioners.',
    images: ['https://marketverse.org/marketverse-archives-opengraph.png'],
  },
};

export default function FieldIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
